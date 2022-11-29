module.exports = (sequelize, DataTypes) => {
  const Airports = sequelize.define("Airports", {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    cityCode: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    cityName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    countryName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    countryCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    timezone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    numAirports: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

    Airports.associate = (models) => {
      Airports.hasMany(models.Transfers);
    };

  return Airports;
};
