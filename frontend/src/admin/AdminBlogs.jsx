import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoadingContext } from "../context/LoadingContext";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { loading, setloading } = useContext(LoadingContext);

  useEffect(() => {
    setloading(true);
    axios
      .get("https://sehatx.com/api/user/Blogs")
      .then((response) => setBlogs(response.data.blogs))
      .catch((error) => console.error("Error fetching blogs:", error));
    setloading(false);
  }, []);

  const handleDelete = async (id) => {
    try {
      setloading(true);
      await axios.delete(`https://sehatx.com/api/user/delete/Blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <section className="mt-6 flex justify-center items-center flex-col px-6">
      <div className="max-w-[80vw]  mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
          Manage Blogs
        </h1>
        <div className="flex justify-between items-center mb-6">
          <Link to="/admin/dashboard">
            <button
              className="text-white border border-[#f0f0f0] hover:bg-indigo-600 focus:ring-4 focus:outline-none 
              focus:ring-indigo-300 flex justify-center items-center gap-2 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              <ArrowLeftIcon className="size-4" />
              Back to dashboard
            </button>
          </Link>
          <Link to="/admin/create-blog">
            <button
              className="text-white border border-[#f0f0f0] hover:bg-indigo-600 focus:ring-4 focus:outline-none 
              focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Create New Blog
            </button>
          </Link>
        </div>
        <div className=" rounded-[1rem] overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created At
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {blog.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{blog.author}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 md:flex whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/blogpost/edit/${blog._id}`}>
                      <button
                        type="button"
                        className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(blog._id)}
                      className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AdminBlogs;
