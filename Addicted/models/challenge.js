const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema({
    game: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dateStart: {
      type: Date,
      default: Date.now,
    },
    dateEnd: {
      type: Date,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard','Extreme'],
      required: true,
    },
    reward: {
      type: String,
      required: false, // This field is not required
    },
    // participants: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User', // Assuming you have a User model
    //   required: false,
    // }],
    isCompleted: {
      type: Boolean,
      default: false,
    },
    // winner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User', // Assuming you have a User model
    //   required: false,
    // },
  });

// Create the challenge model
const Challenge = mongoose.model("Challenge", ChallengeSchema);

module.exports = Challenge;
