'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // ✅ A User can have many Orders (as customer)
      User.hasMany(models.Order, {
        foreignKey: 'userId',
        as: 'orders'
      });

      

    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('customer', 'admin', 'seller'),
      allowNull: false,
      defaultValue: 'customer'
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};