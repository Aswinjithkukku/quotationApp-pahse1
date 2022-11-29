module.exports = (sequelize, DataTypes) => {
    const ExcursionQuotation = sequelize.define("ExcursionQuotation", {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
      },
      quotationNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      descriptions: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      place: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      //id of excursiion
    });
  
    // ExcursionQuotation.associate = (models) => {
    //   ExcursionQuotation.hasMany(models.ExcursionDetails, {
    //     onDelete: "cascade",
    //   });
    // };
  
    return ExcursionQuotation;
  };
  