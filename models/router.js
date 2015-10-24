module.exports = function(sequelize, DataTypes) {
  var Router = sequelize.define("Router", {
    ip: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
}
  /*{
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Task)
      }
    }
  }
  */
  );

  return Router;
};
