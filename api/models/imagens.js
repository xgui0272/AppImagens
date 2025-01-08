'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imagens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  imagens.init({
    imgName: DataTypes.STRING,
    imgLink: DataTypes.STRING,
    category: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'imagens',
    modelName: 'imagens'
  });
  return imagens;
};