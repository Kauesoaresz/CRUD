const Cabelo = require('../models/cabeloModel');

const cabeloController = {
    createCabelo: (req, res) => {
        const newCabelo = {
            cabeloname: req.body.cabeloname,
            password: req.body.password,
            role: req.body.role,
        };

        Cabelo.create(newCabelo, (err, cabeloId) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/cabelos');
        });
    },

    getCabeloById: (req, res) => {
        const cabeloId = req.params.id;

        Cabelo.findById(cabeloId, (err, cabelo) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!cabelo) {
                return res.status(404).json({ message: 'Cabelo not found' });
            }
            res.render('cabelos/show', { cabelo });
        });
    },

    getAllCabelos: (req, res) => {
        Cabelo.getAll((err, cabelos) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('cabelos/index', { cabelos });
        });
    },

    renderCreateForm: (req, res) => {
        res.render('cabelos/create');
    },

    renderEditForm: (req, res) => {
        const cabeloId = req.params.id;

        Cabelo.findById(cabeloId, (err, cabelo) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!cabelo) {
                return res.status(404).json({ message: 'Cabelo not found' });
            }
            res.render('cabelos/edit', { cabelo });
        });
    },

    updateCabelo: (req, res) => {
        const cabeloId = req.params.id;
        const updatedCabelo = {
            cabeloname: req.body.cabeloname,
            password: req.body.password,
            role: req.body.role,
        };

        Cabelo.update(cabeloId, updatedCabelo, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/cabelos');
        });
    },

    deleteCabelo: (req, res) => {
        const cabeloId = req.params.id;

        Cabelo.delete(cabeloId, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/cabelos');
        });
    },

    searchCabelos: (req, res) => {
        const search = req.query.search || '';

        Cabelo.searchByName(search, (err, cabelos) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.json({ cabelos });
        });
    },
};

module.exports = cabeloController;
