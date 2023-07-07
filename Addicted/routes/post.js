var express = require("express");
const Post = require("../models/post");
var router = express.Router();

// POST route to add a new post
router.post("/addpost", async (req, res, next) => {
  try {
    const { id_post, description, enabled, id_user, id_image, nbrlike, nbrdlike, enablelike, enabdislike} = req.body;

    const post = new Post({
      id_post,
      description,
      enabled,
      id_user,
      id_image,
      nbrlike,
      nbrdlike,
      enablelike,
      enabdislike,

    });

    await post.save();
    res.json({ post });
  } catch (error) {
    res.json({ message: error.message, error });
  }
});

// GET route to retrieve all posts
router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json({ posts });
  } catch (error) {
    res.json({ message: error.message, error });
  }
});

// DELETE route to delete a post
router.delete("/:postId", async (req, res, next) => {
  try {
    const postId = req.params.postId;
    await Post.findByIdAndDelete(postId);
    res.sendStatus(204);
  } catch (error) {
    res.json({ message: error.message, error });
  }
});

// PATCH route to update a post
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(post);
  } catch (error) {
    res.json({ message: error.message, error });
  }
});



// testing the add like function

router.patch("/updateLike/:id_post", async (req, res, next) => {
  try {
    const { enablelike, enabdislike } = req.body;
    const { id_post } = req.params;

    const post = await Post.findById(id_post);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (enablelike && enabdislike) {
      // User has not made a like or dislike before
      post.nbrlike++;
    } else if (!enablelike && enabdislike) {
      // User has made a dislike but not a like
      post.nbrlike++;
      post.nbrdlike--;
    }

    post.enablelike = false;
    post.enabdislike = true;

    await post.save();
    res.json({ post });
  } catch (error) {
    res.status(400).json({ message: error.message, error });
  }
});


module.exports = router;