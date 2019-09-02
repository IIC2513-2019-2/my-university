const faker = require('faker');
const orm = require('../models');

const ENROLL_RATIO = 0.6;

module.exports = {
  up: async () => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    const students = await orm.student.findAll();
    const courses = await orm.course.findAll();
    const dbOps = [];

    students.forEach((student) => {
      courses.forEach((course) => {
        if (Math.random() <= ENROLL_RATIO) {
          dbOps.push(student.addCourse(course, { through: { registeredAt: faker.date.recent() } }));
        }
      });
    });

    return Promise.all(dbOps);
  },

  down: (queryInterface) => queryInterface.bulkDelete('enrollments', null, {}),
};
