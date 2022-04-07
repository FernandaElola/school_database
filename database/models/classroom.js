'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Classroom.init({
    year: DataTypes.DATE,
    grade_id: DataTypes.INTEGER,
    section: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    remarks: DataTypes.STRING,
    teacher_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Classroom',
    paranoid: true
  });
  return Classroom;
};