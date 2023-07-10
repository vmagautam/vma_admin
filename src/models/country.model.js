module.exports = (sequelize, Sequelize) => {
  const country = sequelize.define(
    'country',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      country_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    { schema: 'public' }
  );

  return country;
};
