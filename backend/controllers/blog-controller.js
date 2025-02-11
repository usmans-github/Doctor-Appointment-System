const blogModel = require("../models/blog-model")

const createBlog = async (req, res) => {
  try {
    const { title, imageUrl, content } = req.body;

    const newBlog = await blogModel.create({ title, imageUrl, content });

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

const loadBlog = async (blogId) => {
  const response = await axios.get(`/server/api/blogs/${blogId}`);
  setTitle(response.data.title);
  editor.commands.setContent(response.data.content);
};

module.exports = { createBlog, getBlogs, loadBlog };
