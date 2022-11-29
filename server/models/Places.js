module.exports = (sequelize, DataTypes) => {
    const Places = sequelize.define("Places", {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
    });
    Places.associate = (models) => {
      Places.belongsTo(models.Countries);
      Places.hasMany(models.Transfers);
      
    };

    return Places;
  };