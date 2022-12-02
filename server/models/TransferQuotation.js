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
    transferfrom: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    transferTo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    transferStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    returnStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    people: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalamount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amountPerPerson: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  TransferQuotation.associate = (models) => {
    TransferQuotation.belongsTo(models.QuotationAmendments);
  };

  return TransferQuotation;
};
