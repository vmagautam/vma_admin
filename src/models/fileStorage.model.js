module.exports = (sequelize, Sequelize) => {
  const FileStorage = sequelize.define('fileStorage', {
    fileStorage_id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
      defaultValue: Sequelize.UUIDV4,
    },
    custom_storage: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    sku: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
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
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });

  return FileStorage;
};
