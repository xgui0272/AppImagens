const express = require('express');

//Instancia do router
const router = express.Router();

//Controllers
const manageImageController = require('../controllers/manageImageController');

//Middlewares
const upload = require('../middlewares/multerConfig');


router.post('/upload-image-local', upload.single('image'), manageImageController.uploadImageLocal);
router.post('/upload-image-link', manageImageController.uploadImageFromLink);

module.exports = router;