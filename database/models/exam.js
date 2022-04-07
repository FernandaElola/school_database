'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exam.init({
    exam_type: DataTypes.INTEGER,
    name: DataTypes.STRING,
    start_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Exam',
    paranoid: true
  });
  return Exam;
};