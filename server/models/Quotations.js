module.exports = (sequelize, DataTypes) => {
    const Quotations = sequelize.define("Quotations", {
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
        defaultValue: 1
      },
    });
  
    Quotations.associate = (models) => {
      Quotations.hasMany(models.QuotationAmendments, {
        onDelete: 'cascade'
      });

    };
  
    return Quotations;
  };
  