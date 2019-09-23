module.exports = (sequelize, DataTypes) => {
  const enrollment = sequelize.define('enrollment', {
    registeredAt: DataTypes.DATE,
  }, {});

  enrollment.associate = function associate() {
    // associations can be defined here. This method receives a models parameter.
  };

  return enrollment;
};
