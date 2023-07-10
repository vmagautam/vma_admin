module.exports = (sequelize, Sequelize) => {
  const dateTimeZone = sequelize.define("dateTimeZone", {
    zone_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    country_code: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    zone_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    gmt_offset: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    is_dst: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });
  return dateTimeZone;
};
