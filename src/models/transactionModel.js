const db = require('../database/db');

// Function to add a transaction
const addTransaction = (transaction, callback) => {
    const { type, category, amount, date, description } = transaction;
    const sql = `INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [type, category, amount, date, description], function (err) {
        callback(err, this.lastID);
    });
};

// Function to get all transactions
const getAllTransactions = (callback) => {
    const sql = `SELECT * FROM transactions`;
    db.all(sql, [], (err, rows) => {
        callback(err, rows);
    });
};

// Function to get a transaction by ID
const getTransactionById = (id, callback) => {
    const sql = `SELECT * FROM transactions WHERE id = ?`;
    db.get(sql, [id], (err, row) => {
        callback(err, row);
    });
};

// Function to update a transaction by ID
const updateTransaction = (id, transaction, callback) => {
    const { type, category, amount, date, description } = transaction;
    const sql = `UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?`;
    db.run(sql, [type, category, amount, date, description, id], function (err) {
        callback(err, this.changes);
    });
};

// Function to delete a transaction by ID
const deleteTransaction = (id, callback) => {
    const sql = `DELETE FROM transactions WHERE id = ?`;
    db.run(sql, [id], function (err) {
        callback(err, this.changes);
    });
};

// Function to get a summary of transactions
const getSummary = (callback) => {
    const sql = `SELECT type, SUM(amount) as total FROM transactions GROUP BY type`;
    db.all(sql, [], (err, rows) => {
        callback(err, rows);
    });
};

module.exports = {
    addTransaction,
    getAllTransactions,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
    getSummary,
};
