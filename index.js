const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "movies.db"
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to database successfully");
  } catch (error) {
    console.log("error connecting to database", error);
  }
})();
