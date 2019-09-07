const db = require("./db");

const { Movie } = db.models;

(async () => {
  await db.sequelize.sync({ force: true }); //Sync Movies table

  try {
    // creates a table
    const movie = await Movie.create({
      title: "Things fall apart"
    });
    console.log(movie.toJSON());

    // creates a table
    const movie2 = await Movie.create({
      title: "When fools fall in love"
    });
    console.log(movie2.toJSON());
  } catch (error) {
    console.log("error connecting to database", error);
  }
})();
