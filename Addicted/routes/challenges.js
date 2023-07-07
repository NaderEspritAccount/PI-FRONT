var express = require('express');
const Challenge = require("../models/Challenge");
var router = express.Router();

// POST route to add a new challenge
router.post("/addchallenge", async (req, res, next) => {
  try {
    // Extract challenge data from request body
    const { name, description, date_debut, date_fin, enabled } = req.body;

    // Check if the challenge already exists
    const checkIfChallengeExist = await Challenge.findOne({ name });
    if (checkIfChallengeExist) {
      throw new Error("Challenge already exists!");
    }

    // Create a new challenge object
    const challenge = new Challenge({
      name: name,
      description: description,
      date_debut: date_debut,
      date_fin: date_fin,
      enabled: enabled,
    });

    // Save the challenge to the database
    await challenge.save();
    res.json({challenge});
  } catch (error) {
    res.json({ message: error.message, error });
  }
});

// GET route to retrieve all challenges
router.get("/", async (req, res, next) => {
  try {
    const challenges = await Challenge.find();
    res.json({ challenges });
  } catch (error) {
    res.json({ message: error.message, error });
  }
});

// And a POST endpoint to create a new challenge:
router.post('/', async (req, res) => {
  const challenge = new Challenge(req.body);
  await challenge.save();
  res.json(challenge);
});


// DELETE route to delete a challenge
router.delete("/:challengeId", async (req, res, next) => {
  try {
    const challengeId = req.params.challengeId;

    // Find the challenge by ID and delete
    await Challenge.findByIdAndDelete(challengeId);

    res.sendStatus(204); // Send a success status with no content
  } catch (error) {
    res.json({ message: error.message, error });
  }
});

// Find the challenge by ID and update
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const challenge = await Challenge.findByIdAndUpdate(id, req.body, { new: true });
  res.json(challenge);
});

module.exports = router;
