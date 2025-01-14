'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      categories.hasMany(models.images, {foreignKey: 'categoryId', as: 'images'});
    }
  }
  categories.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categories',
    tableName: 'categories'
  });
  return categories;
};