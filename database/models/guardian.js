'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guardian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Guardian.belongsToMany(models.Guardian_student,{
        through: 'Guardian_students',
        as : 'guardian_student',
        foreignKey : 'guardian_id'
      })
    }
  }
  Guardian.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    birthday: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    last_login_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Guardian',
    paranoid: true
  });
  return Guardian;
};