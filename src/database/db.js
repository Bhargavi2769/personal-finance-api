const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./finance.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the finance database.');
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        type TEXT CHECK(type IN ('income', 'expense'))
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT CHECK(type IN ('income', 'expense')),
        category TEXT,
        amount REAL,
        date TEXT,
        description TEXT
    )`);
});

module.exports = db;
