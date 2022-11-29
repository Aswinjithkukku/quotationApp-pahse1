module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
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
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    phone: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        defaultValue: "user" 
    },
    })
  
    Users.associate = (models) => {
      Users.hasMany(models.ExcursionQuotation)
      Users.hasMany(models.ExcursionQuotation)
      Users.hasMany(models.HotelQuotation)
      Users.hasMany(models.Quotations)
      Users.hasMany(models.QuotationAmendments)
  }
    return Users
  }