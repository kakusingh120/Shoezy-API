'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Each OrderItem belongs to one Order
      OrderItem.belongsTo(models.Order, {
        foreignKey: 'orderId',
        as: 'order'
      });

      // Each OrderItem belongs to one ProductVariant
      OrderItem.belongsTo(models.ProductVariant, {
        foreignKey: 'productVariantId',
        as: 'productVariant'
      });

    }
  }
  OrderItem.init({
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productVariantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};