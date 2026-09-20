-- RSVP storage for Cloudflare D1.
-- Fresh install: apply once after creating the database (see DEPLOYMENT.md):
--   npx wrangler d1 execute anna-mike-rsvp --remote --file=./db/schema.sql
-- Already have a live rsvps table without `email`? Run the migration instead:
--   npx wrangler d1 execute anna-mike-rsvp --remote --file=./db/migrations/001_add_email.sql

CREATE TABLE IF NOT EXISTS rsvps (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  name           TEXT NOT NULL,
  email          TEXT,           -- guest's email, for the confirmation/reminder send
  attending      TEXT NOT NULL,  -- 'yes' | 'no'
  days           TEXT,           -- comma-separated: friday,saturday,sunday
  dietary        TEXT,
  song           TEXT,
  message        TEXT,
  email_sent_at  TEXT,           -- ISO timestamp once the confirmation email succeeds, else NULL
  created_at     TEXT NOT NULL   -- ISO timestamp
);
