'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guardian_student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Guardian_student.hasMany(models.Student,{
        as: 'student_guardian',
        foreignKey: 'student_id'
      }),
      Guardian_student.hasMany(models.Guardian,{
        as: 'guardian_student',
        foreignKey: 'guardian_id'
      })
    }
  }
  Guardian_student.init({
    student_id: DataTypes.INTEGER,
    guardian_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Guardian_student',
    timestamps: false
  });
  return Guardian_student;
};