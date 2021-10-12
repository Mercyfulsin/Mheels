module.exports = function (sequelize, DataTypes) {
  return sequelize.define("tweet", {
    body: { type: DataTypes.STRING, allowNull: false },
    tweetId: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.STRING, allowNull: false }
  });
};
