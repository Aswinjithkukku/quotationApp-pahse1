module.exports = (sequelize, DataTypes) => {
    const TransferQuotation = sequelize.define("TransferQuotation", {
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
      //id of transfer
    });
  
    // TransferQuotation.associate = (models) => {
    //   TransferQuotation.hasMany(models.ExcursionDetails, {
    //     onDelete: "cascade",
    //   });
    // };
  
    return TransferQuotation;
  };
  