const mongoose = require("mongoose");

const bookGoals = new mongoose.Schema(
  {
    totalRead: {
      type: Number,
      required: [true, "Please enter book title"],
      maxlength: 250,
    },
    monthlyRead: {
      type: Number,
      required: [true, "Please enter book author"],
      maxlength: 250,
    },
    pagesPerDay: {
      type: String,
      required: [true, "Please enter book genre"],
      maxlength: 250,
    },
    pagesPerWeek: {
      type: Number,
      required: [true, "Please enter book pages"],
      maxlength: 250,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BookGoals", bookGoals);
