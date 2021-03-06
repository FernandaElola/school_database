'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.hasMany(models.Grade,{
        as: 'grades',
        foreignKey: 'grade_id'
      }),
      Course.belongsToMany(models.Exam_result,{        
        through: 'Exam_results',
        as : 'course',
        foreignKey : 'course_id'
      })
    }
  }
  Course.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    grade_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
    paranoid: true
  });
  return Course;
};