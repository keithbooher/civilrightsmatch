#!/usr/bin/env node
/**
 * Usage: node send-email.js --to <email> --subject "<subject>" --body "<body>" [--from-name "<name>"]
 * Env: GMAIL_USER, GMAIL_APP_PASSWORD (or reads from ../.env.scripts)
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.scripts') });
const nodemailer = require('nodemailer');

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
  const { to, subject, body } = args;
  const fromName = args['from-name'] || 'RightsMatch';

  if (!to || !subject || !body) {
    console.error('Required: --to --subject --body');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { user: GMAIL_USER, pass: GMAIL_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 5000,
  });

  const info = await transporter.sendMail({
    from: `"${fromName}" <${GMAIL_USER}>`,
    to,
    subject,
    text: body,
  });

  console.log('Sent:', info.messageId);
}

main().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
