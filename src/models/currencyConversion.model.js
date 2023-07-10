module.exports = (sequelize, Sequelize) => {
    const currencyConversion = sequelize.define('currencyConversion', {
      conversion_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      from_currency_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Currency',
          key: 'currency_id',
        },
      },
      to_currency_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Currency',
          key: 'currency_id',
        },
      },
      rate: {
        type: Sequelize.DECIMAL(10, 6),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    });
  
    return currencyConversion;
  };
  