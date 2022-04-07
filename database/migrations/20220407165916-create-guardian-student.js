'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Guardian_students', {
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: "Students"
          },
          key : 'id'
        }
      },
      guardian_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: "Guardians"
          },
          key : 'id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Guardian_students');
  }
};