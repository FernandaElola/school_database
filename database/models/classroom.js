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
      Classroom.hasMany(models.Teacher,{
        as: 'teacher',
        foreignKey: 'teacher_id'
      }),
      Classroom.hasMany(models.Grade,{
        as: 'grades',
        foreignKey: 'grade_id'
      }),
      Classroom.belongsToMany(models.Classroom_student,{
        through: 'Classroom_students',
        as : 'classroom_student',
        foreignKey : 'clasroom_id'
      })
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