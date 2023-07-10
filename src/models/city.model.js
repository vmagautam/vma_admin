module.exports = (sequelize, Sequelize) => {
  const cityModel = sequelize.define('city', {
    city_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    city_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    state_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  cityModel.associate = (model) => {
    cityModel.belongsTo(model.statesModel, { foreignKey: 'state_id' });
  };
  return cityModel;
};
