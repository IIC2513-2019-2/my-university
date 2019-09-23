module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('students', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  })
    .then(() => queryInterface
      .addIndex(
        'students',
        ['email'],
        { indexName: 'uniqueStudentEmail', indicesType: 'UNIQUE' },
      )),

  down: (queryInterface) => queryInterface.dropTable('students'),
};
