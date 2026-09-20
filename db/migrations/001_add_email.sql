-- Adds email support to an existing `rsvps` table (D1/SQLite).
-- Run once against a database created before the RSVP confirmation-email
-- feature existed:
--   npx wrangler d1 execute anna-mike-rsvp --remote --file=./db/migrations/001_add_email.sql
-- Safe to run even if a column already exists as long as you drop the one
-- line that errors and re-run — SQLite has no "ADD COLUMN IF NOT EXISTS".

ALTER TABLE rsvps ADD COLUMN email TEXT;
ALTER TABLE rsvps ADD COLUMN email_sent_at TEXT;
