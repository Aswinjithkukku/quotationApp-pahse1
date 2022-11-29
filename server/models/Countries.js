module.exports = (sequelize, DataTypes) => {
  const Countries = sequelize.define("Countries", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
 
    isoCode: {
      type: DataTypes.STRING,
      allowNull: false,
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
    nicename: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    iso3Code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    numCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    phoneCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
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

  Countries.associate = (models) => {
    Countries.hasMany(models.Places, {
      onDelete: "cascade",
    });
    Countries.hasMany(models.Transfers, {
      onDelete: "cascade",
    });
  };

  return Countries;
};
