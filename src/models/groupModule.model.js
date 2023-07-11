module.exports = (sequelize, DataTypes) => {
    const GroupModule = sequelize.define('GroupModule', {
      groupModule_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      moduleIds: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    GroupModule.associate = (models) => {
      GroupModule.belongsToMany(models.Module, {
        through: 'GroupModuleModule',
        foreignKey: 'groupModule_id',
      });
    };
  
    return GroupModule;
  };
  