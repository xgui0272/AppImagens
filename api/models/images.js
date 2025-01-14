'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      images.belongsTo(models.categories, {foreignKey: 'categoryId', as: 'categories'})
    }
  }
  images.init({
    imgName: DataTypes.STRING,
    imgLink: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'images',
    tableName: 'images'
  });
  return images;
};