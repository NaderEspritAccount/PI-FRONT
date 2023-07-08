var express = require("express");
const Comm = require("../models/comm");
const post = require("../models/post");
var router = express.Router();

// comm route to add a new comm
router.post("/addcomm", async (req, res, next) => {
  try {
    console.log("Comm", req.body);

    const { description, id_post } = req.body;

    const po = await post.findOne({ _id: id_post });

    if (!po) {
      throw new Error("post n'existe pas");
    }
    console.log(po);

    //! add id user
    const comm = new Comm({
      description,
      id_post,
    });
    po.comments.push(comm);
    po.save();
    await comm.save();
    const comms = await Comm.find({ id_post: id_post });
    
    res.status(200).json(comms);
  } catch (error) {
    res.status(400).json({ message: error.message, error });
  }
});

// GET route to retrieve all comms
router.get("/", async (req, res, next) => {
  try {
    const comms = await Comm.find();
    res.json({ comms });
  } catch (error) {
    res.json({ message: error.message, error });
  }
});

// DELETE route to delete a comm
router.delete("/:commId", async (req, res, next) => {
  try {
    const commId = req.params.commId;
    await Comm.findByIdAndDelete(commId);
    res.sendStatus(204);

    const transporter = nodemailer.createTransport({
      // Configuration du service d'envoi d'e-mails (par exemple, Gmail)
      service: "gmail",
      auth: {
        user: "addictedadd8@gmail.com",
        pass: "rmbxsndyekvzjgoz",
      },
    });

    const post = req.body.name;
    const mailOptions = {
      from: "addictedadd8@gmail.com",
      to: "nader.welhazi@gmail.com",
      subject: "Notice mail",
      html: '<p>Hello, We would like to give you a notice that your comment doesn"t meat with our comunity gide line so we deleted it</p>',
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent: " + info.response);
        res.send("Email sent successfully");
      }
    });
  } catch (error) {
    res.json({ message: error.message, error });
  }
});

// PATCH route to update a comm
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const comm = await Comm.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(comm);
  } catch (error) {
    res.json({ message: error.message, error });
  }
});

module.exports = router;
