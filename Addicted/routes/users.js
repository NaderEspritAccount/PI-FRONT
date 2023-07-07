var express = require('express');
const bcrypt = require('bcrypt');
var router = express.Router();
const usersModel = require("../models/User");



// router.get('/', function(req, res, next) {
//   res.send('user ajouté');
// });

router.post("/adduser",  async (req, res, next) => {
  try {

      const { name, email, password,role ,enabled} = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const checkIfuserExist = await usersModel.findOne({ name });
      if (checkIfuserExist) {
          throw new Error("user already exist!");
      }
      const user = new usersModel({
          name:name,
          email:email,
          password:hashedPassword,
          role:role,
          enabled:enabled,
      });

      user.save();
      res.json({user});
  } catch (error) {
      res.json("error", { message: error.message, error });
  }
}
);



router.get("/", async (req, res, next) => {
  try {
    const user = await usersModel.find();
    res.json(user);

  } catch (error) {
    res.json("error", { message: error.message, error });
  }
});




router.delete("/delete/:userid", async (req, res, next) => {
  try {
    const userid = req.params.userid;

    // Find the challenge by ID and delete
    await usersModel.findByIdAndDelete(userid);

    res.sendStatus(204); // Send a success status with no content
  } catch (error) {
    res.json({ message: error.message, error });
  }
});


router.get("/list/:userid", async (req, res, next) => {
  try {
    const userid = req.params.userid;
    const user = await usersModel.findById(userid);
    res.json(user);

  } catch (error) {
    res.json("error", { message: error.message, error });
  }
});




router.patch('/update/:id', async (req, res) => {
  const  {id}  = req.params;
  const user = await usersModel.findByIdAndUpdate(id, req.body, { new: true });
  res.json(user);
});



// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Retrieve the hashed password from the database for the given username
//     // Code for retrieving user data from the database

//     // Compare the provided password with the stored hashed password
//     const passwordMatch = await bcrypt.compare(password, storedHashedPassword);

//     if (passwordMatch) {
//       res.status(200).json({ message: 'Login successful' });
//     } else {
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });




module.exports = router;
