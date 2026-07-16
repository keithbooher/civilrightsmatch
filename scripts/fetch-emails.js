#!/usr/bin/env node
/**
 * Fetches unread emails from the civilrightsmatch Gmail inbox.
 * Outputs a JSON array of emails to stdout.
 * Usage: node fetch-emails.js [--mark-read <uid,uid,...>] [--label <label>]
 * Env: GMAIL_USER, GMAIL_APP_PASSWORD (or reads from ../.env.scripts)
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.scripts') });
const { ImapFlow } = require('imapflow');

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD;

if (!GMAIL_USER || !GMAIL_PASS) {
  console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD');
  process.exit(1);
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      args[argv[i].slice(2)] = argv[i + 1];
      i++;
    }
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const markReadUids = args['mark-read'] ? args['mark-read'].split(',') : [];

  const client = new ImapFlow({
    host: 'imap.gmail.com',
    port: 993,
    secure: true,
    logger: false,
    auth: { user: GMAIL_USER, pass: GMAIL_PASS },
  });

  await client.connect();
  const lock = await client.getMailboxLock('INBOX');

  try {
    // Mark specified UIDs as read
    if (markReadUids.length > 0) {
      await client.messageFlagsAdd(markReadUids.join(','), ['\\Seen'], { uid: true });
      console.log(JSON.stringify({ marked_read: markReadUids }));
      return;
    }

    const emails = [];
    for await (const msg of client.fetch('1:*', {
      uid: true,
      envelope: true,
      bodyStructure: true,
      source: true,
      flags: true,
    })) {
      if (msg.flags.has('\\Seen')) continue;

      const raw = msg.source?.toString() || '';
      // Extract plain text body (simple approach — strip headers)
      const bodyStart = raw.indexOf('\r\n\r\n');
      const body = bodyStart !== -1 ? raw.slice(bodyStart + 4) : raw;

      emails.push({
        uid: msg.uid,
        from: msg.envelope.from?.[0] || null,
        to: msg.envelope.to?.[0] || null,
        subject: msg.envelope.subject || '',
        date: msg.envelope.date || null,
        body: body.slice(0, 8000),
      });
    }

    console.log(JSON.stringify(emails, null, 2));
  } finally {
    lock.release();
    await client.logout();
  }
}

main().catch((err) => {
  console.error('IMAP error:', err.message);
  // Output empty array so callers don't break
  console.log('[]');
  process.exit(0);
});
