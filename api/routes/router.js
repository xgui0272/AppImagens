const express = require('express');

//Instancia do router
const router = express.Router();

//Controllers
const ImageController = require('../controllers/ImageController');
const CategoryController = require('../controllers/CategoryController');

//Middlewares
const upload = require('../middlewares/multerConfig');


//Image Router
router.post('/upload-image', upload.single('image'), ImageController.uploadImage); //Upload de imagem
router.delete('/delete-image', ImageController.deleteImage); //deletar imagem
router.get('/get-imagens-category', CategoryController.getAllImagesByCategory); //Buscar todas imagens de uma categoria


//Category Router
router.post('/create-new-category', upload.single('image'), CategoryController.createCategory); //Criar nova categoria
router.get('/get-categorys', CategoryController.getAllCategorys); //Pegar todas as categorias


module.exports = router;