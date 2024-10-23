const db = require('../database/db');

// Add a new transaction
exports.addTransaction = (req, res) => {
    const { type, category, amount, date, description } = req.body;
    const sql = `INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [type, category, amount, date, description], function (err) {
        if (err) return res.status(400).json({ error: err.message });
        res.status(201).json({ id: this.lastID });
    });
};

// Get all transactions
exports.getAllTransactions = (req, res) => {
    const sql = `SELECT * FROM transactions`;
    db.all(sql, [], (err, rows) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json(rows);
    });
};

// Get a transaction by ID
exports.getTransactionById = (req, res) => {
    const sql = `SELECT * FROM transactions WHERE id = ?`;
    db.get(sql, [req.params.id], (err, row) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json(row);
    });
};

// Update a transaction by ID
exports.updateTransaction = (req, res) => {
    const { type, category, amount, date, description } = req.body;
    const sql = `UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?`;
    db.run(sql, [type, category, amount, date, description, req.params.id], function (err) {
        if (err) return res.status(400).json({ error: err.message });
        res.json({ updatedID: req.params.id });
    });
};

// Delete a transaction by ID
exports.deleteTransaction = (req, res) => {
    const sql = `DELETE FROM transactions WHERE id = ?`;
    db.run(sql, [req.params.id], function (err) {
        if (err) return res.status(400).json({ error: err.message });
        res.json({ deletedID: req.params.id });
    });
};

// Get summary
exports.getSummary = (req, res) => {
    const sql = `SELECT type, SUM(amount) as total FROM transactions GROUP BY type`;
    db.all(sql, [], (err, rows) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json(rows);
    });
};
