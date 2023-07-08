var express = require("express");
const Post = require("../models/post");
const Like = require("../models/like");
var router = express.Router();

router.patch("/updateLike/:id_post", async (req, res, next) => {
  try {
    const { enablelike, enabdislike } = req.body;
    const { id_post } = req.params;
    console.log("Update", req.body);
    const post = await Post.findById(id_post).populate("comments");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (enablelike == "true") {
      post.nbrlike++;
    }
    if (enabdislike == "true") {
      post.nbrdlike++;
    }
    post.enablelike = enablelike;
    post.enabdislike = enabdislike;
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message, error });
  }
});

module.exports = router;
