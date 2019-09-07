const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "movies.db",
  logging: false
});

const db = {
  sequelize,
  sequelize,
  models: {}
};

db.models.Movie = require("./models/movie.js")(sequelize);

module.exports = db;
