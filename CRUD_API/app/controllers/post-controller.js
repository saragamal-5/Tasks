const Post = require("../models/post");

async function index(req, res) {
  const posts = await Post.find({});

  try {
    res.status(200).json({
      method: "GET",
      url: "http://localhost:5000/api/v1/posts",
      data: posts,
      message: "Posts fetched successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function show(req, res) {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  try {
    res.status(200).json({
      method: "GET",
      url: `http://localhost:5000/api/v1/posts/${post._id}`,
      data: post,
      message: "Post fetched successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function create(req, res) {
  const { title, description } = req.body;
  const post = new Post({ title, description });
  await post.save();

  try {
    res.status(201).json({
      method: "POST",
      url: "http://localhost:5000/api/v1/posts",
      data: post,
      message: "Post created successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function patch(req, res) {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({
      method: "PATCH",
      url: `http://localhost:5000/api/v1/posts/${post._id}`,
      data: post,
      message: "Post updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function update(req, res) {
  const { id } = req.params;
  const { title, description } = req.body;

  const post = await Post.findByIdAndUpdate(id, { title, description });

  try {
    res.status(200).json({
      method: "PUT",
      url: `http://localhost:5000/api/v1/posts/${post._id}`,
      data: post,
      message: "Post updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function destroy(req, res) {
  const { id } = req.params;
  const post = await Post.findByIdAndDelete(id);

  try {
    res.status(200).json({
      method: "DELETE",
      url: `http://localhost:5000/api/v1/posts/${post._id}`,
      data: post,
      message: "Post deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  index,
  show,
  create,
  patch,
  update,
  destroy,
};
