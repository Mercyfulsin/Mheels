module.exports = function(sequelize, DataTypes){
  return sequelize.define("menu", {
    menuName: { type: DataTypes.STRING , allowNull: false },
  });
};