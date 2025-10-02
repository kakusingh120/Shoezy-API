'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductVariant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductVariant.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product'
      });

      // A ProductVariant has one Inventory
      ProductVariant.hasOne(models.Inventory, {
        foreignKey: 'productVariantId',
        as: 'inventory'
      });


      // Each ProductVariant can have many OrderItems
      ProductVariant.hasMany(models.OrderItem, {
        foreignKey: 'productVariantId',
        as: 'orderItems'
      });


    }
  }
  ProductVariant.init({
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // e.g., 99999999.99,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
    },
    stockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive', 'archived'),
      allowNull: false,
      defaultValue: 'active',
    },
    attributes: {
      type: DataTypes.JSON,
    },
  }, {
    sequelize,
    modelName: 'ProductVariant',
  });
  return ProductVariant;
};