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
    excursions: {
      type: DataTypes.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("excursions"));
      },
      set: function (excursions) {
        this.setDataValue("excursions", JSON.stringify(excursions));
      },
    },
    totalamount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amountPerPerson: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
