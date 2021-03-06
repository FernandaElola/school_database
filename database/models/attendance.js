'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Attendance.hasMany(models.Student,{
        as: 'student_attendance',
        foreignKey: 'student_id'
      })
    }
  }
  Attendance.init({
    date: DataTypes.DATE,
    student_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    remark: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Attendance',
    paranoid: true
  });
  return Attendance;
};