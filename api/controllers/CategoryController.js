//Model
const {categories, images} = require('../models/');

//Services
const {downloadImage} = require('../services/downloadImage');
const {uploadFileToBlob} = require('../services/blobService');

/*
Controller responsavel em criar uma nova categoria de imagens
*/
exports.createCategory = async (req, res) => {
    try {
        const {name, imageUrl} = req.body;

        if (!req.file) {
            const DownloadImage = await downloadImage(imageUrl);
            const urlImageBlob = await uploadFileToBlob(DownloadImage.filePath, DownloadImage.originalName);
            const query = await categories.create({name, img: urlImageBlob.link});
            res.status(200).json({msg: 'Imagem Salva com sucesso'});
        } else {
            const urlImageBlob = await uploadFileToBlob(req.file.path, req.file.originalname);
            const query = await categories.create({name, img: urlImageBlob.link});
            res.status(200).json({msg: 'Imagem Salva com sucesso'});
        }

    } catch (error) {
        console.error('Error ao criar categoria',error);
    }
}

/*
Controller responsalve para poder pegar todas a categorias
*/
exports.getAllCategorys = async (req, res) => {
    try {
        const getCategorys = await categories.findAll();
        res.status(200).json({message: 'Dados retornados com sucesso.', data: getCategorys});
    } catch (error) {
        console.error('Ouve algum error em buscar categorias');
    }
}


/*
Controller responsalver por pegar todas as imagens de uma determinada categoria
*/
exports.getAllImagesByCategory = async (req, res) => {
    try {
        const {id} = req.query;
        const getImages = await categories.findOne({
            where: {id},
            include: {model: images, as: 'images'}
        });
        res.status(200).json({message: 'Dados retornados com sucesso.', data: getImages});
    } catch (error) {
        console.error('Ouve algum error ao buscar imagens', error);
    }
}