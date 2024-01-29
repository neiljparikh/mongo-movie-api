const { Schema, model, SchemaTypes } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  usersWhoLiked: [
    {
      type: SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
});

const Movie = model("Movie", movieSchema)

module.exports = Movie;
