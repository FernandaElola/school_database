'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Exam_type.belongsTo(models.Exam,{
        as : 'exam_type',
        foreignKey : 'exam_type_id'
      })
    }
  }
  Exam_type.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Exam_type',
  });
  return Exam_type;
};