require('dotenv').config();

const {BlobServiceClient} = require('@azure/storage-blob');

const connectionString = process.env.BLOB_KEY;

const BlobServiceClientInstance = BlobServiceClient.fromConnectionString(connectionString);

module.exports = {
    BlobServiceClientInstance,
    containerName: process.env.BLOB_CONTAINER_NAME
}