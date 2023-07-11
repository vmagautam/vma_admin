module.exports = (sequelize, DataTypes) => {
    const GroupModuleModule = sequelize.define('GroupModuleModule', {
      groupModuleModule_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    });
  
    return GroupModuleModule;
  };
  
  
  
  