module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('enrollments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    studentId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'students',
        key: 'id',
      },
    },
    courseId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'courses',
        key: 'id',
      },
    },
    registeredAt: {
      type: Sequelize.DATE,
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('enrollments'),
};
