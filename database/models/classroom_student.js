'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classroom_Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Classroom_student.hasMany(models.Student,{
        as: 'students_classroom',
        foreignKey: 'student_id'
      }),
      Classroom.hasMany(models.Classroom,{
        as: 'classroom_student',
        foreignKey: 'classroom_id'
      })
    }
  }
  Classroom_Student.init({
    classroom_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Classroom_Student',
    timestamps: false
  });
  return Classroom_Student;
};