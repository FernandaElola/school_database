'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Exams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      exam_type: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: "Exam_types"
          },
          key : 'id'
        }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },      
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Exams');
  }
};