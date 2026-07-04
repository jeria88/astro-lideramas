CREATE TABLE IF NOT EXISTS mensajes (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre      TEXT,
  cargo       TEXT,
  establecimiento TEXT,
  comuna      TEXT,
  email       TEXT NOT NULL,
  mensaje     TEXT,
  leido       INTEGER DEFAULT 0,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);
