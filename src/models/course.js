module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define('course', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {});

  course.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return course;
};
