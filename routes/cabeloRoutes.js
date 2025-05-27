const express = require('express');
const cabeloController = require('../controllers/cabeloController');
const router = express.Router();

router.get('/', cabeloController.getAllCabelos);
router.get('/search', cabeloController.searchCabelos); // Adicione esta rota
router.get('/new', cabeloController.renderCreateForm);
router.post('/', cabeloController.createCabelo);
router.get('/:id', cabeloController.getCabeloById);
router.get('/:id/edit', cabeloController.renderEditForm);
router.put('/:id', cabeloController.updateCabelo);
router.delete('/:id', cabeloController.deleteCabelo);

module.exports = router;