//Services
const {uploadFileToBlob, deleteFileToBlob} = require('../services/blobService');
const {downloadImage, deleteImageTemp} = require('../services/downloadImage')

//Models
const {images} = require('../models');
const { where } = require('sequelize');


/*
Controller responsavel em fazer upload de imagem no azure blob e no banco de dados
*/
exports.uploadImage = async (req, res) => {
    try {
        const file = req.file;
        const { categoryId } = req.body

        if(!file) {
            const downImage = await downloadImage(req.body.imageUrl);
            const blobUrl = await uploadFileToBlob(downImage.filePath, downImage.originalName);
            const uploadImage = await images.create({imgName: blobUrl.name, imgLink: blobUrl.link, categoryId});
            res.status(200).json({message: 'Imagem salva com sucesso'});
        } else {
            const blobUrl = await uploadFileToBlob(file.path, file.originalname);
            const uploadImage = await images.create({imgName: blobUrl.name, imgLink: blobUrl.link, categoryId});
            res.status(200).json({message: 'Imagem salva com sucesso'});
        }

    } catch (error) {
        console.error('Error ao fazer upload de imagem', error);
    }
}



/*
Controller responsavel por deletar imagens no azure blob e no banco de dados
*/
exports.deleteImage = async (req, res) => {
    try {
        const imageName = req.query.id;
        const deleteImageBlob = await deleteFileToBlob(imageName);
        const deleteImage = await images.destroy({where: {imgName: imageName}});
        res.status(200).json({msg: 'Imagem deletada com sucesso!'});
    } catch (error) {
        console.error('Error ao deletar imagem!', error);
    }
}

