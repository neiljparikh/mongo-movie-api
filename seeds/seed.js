const db = require("../config/connection");
const { User, Movie } = require("../models");

db.on("error", (err) => err);

db.once("open", async () => {
  console.log("connected");
  let movieCheck = await db.db.listCollections({ name: "movies" }).toArray();
  if (movieCheck.length) {
    await db.dropCollection("movies");
  }

  let userCheck = await db.db.listCollections({ name: "users" }).toArray();
  if (userCheck.length) {
    await db.dropCollection("users");
  }

  await User.collection.insertMany([
    {
      username: "Bill",
      email: "bill@billlikesmovies.com",
    },
    {
      username: "Ava",
      email: "ava@gmail.com",
    },
  ]);

  await Movie.collection.insertMany([
    {
      title: "Jaws",
    },
    {
      title: "Cars",
    },
    {
      title: "Speed",
    },
  ]);

  const movies = await Movie.find();
  const users = await User.find();

  for (user of users) {
    const movieId = movies[Math.floor(Math.random() * movies.length)]._id;
    if (movieId) {
    await User.findOneAndUpdate(
      { _id: user._id },
      {
        $addToSet: {
          moviesLiked: movieId,
        },
      }
    );
    await Movie.findByIdAndUpdate(
        {_id: movieId},
        {
            $addToSet: { usersWhoLiked: user._id},
        }
    )

}
}
});
