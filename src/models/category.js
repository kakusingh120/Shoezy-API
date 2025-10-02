'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product, {
        foreignKey: 'categoryId',
        as: 'products'
      });
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isValidWordCount(value) {
          const wordCount = value.trim().split(/\s+/).length;
          if (wordCount > 200) {
            throw new Error("Description cannot exceed 200 words");
          }
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};