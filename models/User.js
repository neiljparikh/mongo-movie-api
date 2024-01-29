const { Schema, model, SchemaTypes } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    moviesLiked: [
        {
            type: SchemaTypes.ObjectId,
            ref: "Movie"
        }
    ]
});

const User = model("User", userSchema)

module.exports = User;