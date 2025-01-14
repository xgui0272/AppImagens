const path = require('path');
const fs = require('fs');
const {v4: uuidv4} = require('uuid');
const {BlobServiceClientInstance, containerName} = require('../config/azureConfig');


//Função para fazer upload de arquivos para o Azure blob Storage
async function uploadFileToBlob(filePath, originalName) {
  try {
    const extension = path.extname(originalName);
    const uniqueNameBlob = `${uuidv4()}${extension}`;
    const containerClient = BlobServiceClientInstance.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(uniqueNameBlob);

    await blockBlobClient.uploadFile(filePath);

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error ao deletar o arquivo temporario');
      }
    });

    return {link: `https://${BlobServiceClientInstance.accountName}.blob.core.windows.net/${containerName}/${uniqueNameBlob}`, name: uniqueNameBlob};

  } catch (error) {
    console.erro('Ouve um error ao fazer o upload do arquivo para o AzureBlobStorage!', error);
  }
}

async function deleteFileToBlob(id) {
  try {
    const containerClient = BlobServiceClientInstance.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(id);
    const deleteResponse = await blockBlobClient.delete();


  } catch (error) {
    console.error('Error ao delete imagem do Blob!', error);
  }
}

module.exports = {
  uploadFileToBlob,
  deleteFileToBlob
}