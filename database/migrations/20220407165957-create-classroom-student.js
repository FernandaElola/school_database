'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Classroom_Students', {
      classroom_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: "Classrooms"
          },
          key : 'id'
        }
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: "Students"
          },
          key : 'id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Classroom_Students');
  }
};