const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.MARIA_DB_URI);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.foods = require("./food")(sequelize, DataTypes);
db.menus = require("./menu")(sequelize, DataTypes);
db.tweets = require("./tweet")(sequelize, DataTypes);
db.vendors = require("./vendor")(sequelize, DataTypes);
db.foods.belongsTo(db.menus);
db.menus.hasMany(db.foods);
db.menus.belongsTo(db.vendors);
db.tweets.belongsTo(db.vendors);
db.vendors.hasMany(db.tweets);
module.exports = db;