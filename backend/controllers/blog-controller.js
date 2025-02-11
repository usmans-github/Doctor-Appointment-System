const blogModel = require("../models/blog-model")

const createBlog = async (req, res) => {
  try {
    const { title, imageUrl, content, author } = req.body;

    const newBlog = await blogModel.create({ title, imageUrl, content, author });

    await newBlog.save();

    res
      .status(201)
      .send({
        success: true,
        message: "Blog created successfully",
        data: newBlog,
      });
  } catch (error) {
    console.log(error);
    res
      .status(201)
      .send({
        success: false,
        message: `Error in Create Blog controller ${error.message}`,
      });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find({})
    res.status(200).send({ success: true, blogs });
  } catch (error) {
    console.log(error);
    res
      .status(201)
      .send({
        success: false,
        message: `Error in Get Blogs controller ${error.message}`,
      });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);
    res.status(200).send({ success: true, blog });
  } catch (error) {
    console.log(error);
    res
      .status(201)
      .send({
        success: false,
        message: `Error in Get Blog by ID controller ${error.message}`,
      });
  }
};

module.exports = { createBlog, getBlogs, getBlogById };
