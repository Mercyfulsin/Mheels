module.exports = function (sequelize, DataTypes) {
  return sequelize.define("vendor", {
    storeName: { type: DataTypes.STRING, allowNull: false },
    owner: { type: DataTypes.STRING, allowNull: false },
    ownerId: { type: DataTypes.STRING, allowNull: false },
    customTweet: { type: DataTypes.STRING, default: "" },
    //location: { type:DataTypes.STRING, default: "0,0", get(){ return this.getDataValue('location').split(';') }, set(val) { return this.setDataValue('location').join(';') } },
    //hashtags: { type:DataTypes.STRING, default: "#Mheels", get(){ return this.getDataValue('hashtags').split(';') }, set(val) { return this.setDataValue('hashtags').join(';') } },
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    status: { type: DataTypes.BOOLEAN, allowNull: false, default: false }, //False = closed ; True = open
    //categories: { type:DataTypes.STRING, default: "Food", get(){ return this.getDataValue('categories').split(';') }, set(val) { return this.setDataValue('categories').join(';') } },
    closingTime: DataTypes.STRING,
  });
};
