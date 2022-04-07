'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Grade.belongsTo(models.Classroom,{
        as : 'grade',
        foreignKey : 'grade_id'
      }),
      Grade.belongsTo(models.Course,{
        as : 'grade',
        foreignKey : 'grade_id'
      })
    }
  }
  Grade.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Grade',
    paranoid: true
  });
  return Grade;
};