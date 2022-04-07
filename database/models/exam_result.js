'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam_result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exam_result.init({
    exam_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    marks: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Exam_result',
  });
  return Exam_result;
};