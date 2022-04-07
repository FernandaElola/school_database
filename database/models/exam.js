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
      Exam.hasMany(models.Exam_type,{
        as: 'exam_type',
        foreignKey: 'exam_type_id'
      }),
      Exam.belongsToMany(models.Exam_result,{
        through: 'Exam_results',
        as : 'exam_result',
        foreignKey : 'exam_result_id'
      })
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