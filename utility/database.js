const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-app", "root", "necatiberkcelik", {  
    dialect : "mysql",
    host: "localhost"
});

module.exports = sequelize;