const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/top_movies_api", {
  useNewUrlParser: true
});

mongoose.Promise = global.Promise;

module.exports.Movie = require("./movie");
