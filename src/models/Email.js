const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Email = sequelize.define('email', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Email;