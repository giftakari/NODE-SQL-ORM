const Sequelize = require("sequelize");

modules.exports = sequelize => {
  class Movie extends Sequelize.Model {}

  Movie.init(
    {
      title: Sequelize.STRING
    },
    { sequelize }
  );

  return Movie;
};
