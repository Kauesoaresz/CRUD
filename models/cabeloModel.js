const db = require('../config/db');

const Cabelo = {
    create: (cabelo, callback) => {
        const query = 'INSERT INTO cabelos (cabeloname, password, role) VALUES (?, ?, ?)';
        db.query(query, [cabelo.cabeloname, cabelo.password, cabelo.role], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM cabelos WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    findByCabeloname: (cabeloname, callback) => {
        const query = 'SELECT * FROM cabelos WHERE cabeloname = ?';
        db.query(query, [cabeloname], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, cabelo, callback) => {
        const query = 'UPDATE cabelos SET cabeloname = ?, password = ?, role = ? WHERE id = ?';
        db.query(query, [cabelo.cabeloname, cabelo.password, cabelo.role, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM cabelos WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM cabelos';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    searchByName: (name, callback) => {
        const query = 'SELECT * FROM cabelos WHERE cabeloname LIKE ?';
        db.query(query, [`%${name}%`], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },    
};

module.exports = Cabelo;
