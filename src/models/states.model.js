module.exports = (sequelize, Sequelize) => {
  const statesModel = sequelize.define('state', {
    country_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    state_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    state_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  statesModel.associate = (model) => {
    statesModel.belongsTo(model.countryModel, { foreignKey: 'id' });
  };
  return statesModel;
};
