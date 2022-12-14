module.exports = (sequelize, DataTypes) => {
    const HotelQuotation = sequelize.define("HotelQuotation", {
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
      place: {
        type: DataTypes.STRING,
        allowNull: true
      },
      people: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      roomType: {
        type: DataTypes.TEXT,
        get: function () {
            return JSON.parse(this.getDataValue('roomType'))
        },
        set: function (roomType) {
            this.setDataValue('roomType', JSON.stringify(roomType));
        }
      },
      nights: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
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
    });
  
    HotelQuotation.associate = (models) => {
      HotelQuotation.belongsTo(models.QuotationAmendments);
    };
  
    return HotelQuotation;
  };
  