const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    // username: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    // },
    businessName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    targetAgeRange: {
      type: String,
      required: true,
    },
    targetHobby: {
      type: String,
      enum: ["sport", "music", "food", "travelling"],
      required: true,
    },
  },
  { timestamps: true }
);

const datadb = mongoose.model("data", businessSchema);

module.exports = datadb;
