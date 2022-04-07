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
      // define association here
    }
  }
  Guardian_student.init({
    student_id: DataTypes.INTEGER,
    guardian_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Guardian_student',
  });
  return Guardian_student;
};