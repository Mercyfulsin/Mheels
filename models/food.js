module.exports = function(sequelize, DataTypes){
  return sequelize.define('food', {
    foodName: { type: DataTypes.STRING , allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false, default: 0.00 },
    description : DataTypes.STRING,
    popular : DataTypes.BOOLEAN
  });
};