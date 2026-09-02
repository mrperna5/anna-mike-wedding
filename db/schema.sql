-- RSVP storage for Cloudflare D1.
-- Apply once after creating the database (see DEPLOYMENT.md):
--   npx wrangler d1 execute anna-mike-rsvp --remote --file=./db/schema.sql

CREATE TABLE IF NOT EXISTS rsvps (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT NOT NULL,
  attending  TEXT NOT NULL,   -- 'yes' | 'no'
  days       TEXT,            -- comma-separated: friday,saturday,sunday
  dietary    TEXT,
  song       TEXT,
  message    TEXT,
  created_at TEXT NOT NULL    -- ISO timestamp
);
