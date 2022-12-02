module.exports = (sequelize, DataTypes) => {
    const QuotationAmendments = sequelize.define("QuotationAmendments", {
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
      amendmentNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      transferQuotationId: {
        type: DataTypes.STRING,
        allowNull: true
      },
      hotelQuotationId: {
        type: DataTypes.STRING,
        allowNull: true
      },
      excursionQuotationId: {
        type: DataTypes.STRING,
        allowNull: true
      },
    });
  
    QuotationAmendments.associate = (models) => {
      QuotationAmendments.hasMany(models.Quotations);
      QuotationAmendments.hasMany(models.TransferQuotation, {
        onDelete: 'cascade'
      });
      QuotationAmendments.hasMany(models.ExcursionQuotation,{
        onDelete: 'cascade'
      });
      QuotationAmendments.hasMany(models.HotelQuotation,{
        onDelete: 'cascade'
      });
    };
  
    return QuotationAmendments;
  };
  