'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Exam_results', {
      exam_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: "Exams"
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
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: "Courses"
          },
          key : 'id'
        }
      },
      marks: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Exam_results');
  }
};