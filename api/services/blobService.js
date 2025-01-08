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
        console.error('Error ao deletar o arquivo:')
      }
    });

    return {link: `https://${BlobServiceClientInstance.accountName}.blob.core.windows.net/${containerName}/${uniqueNameBlob}`, name: uniqueNameBlob};

  } catch (error) {
    console.log('Ouve um error ao fazer o upload do arquivo para o AzureBlobStorage!');
    console.log(error)
  }
}

module.exports = {
  uploadFileToBlob
}