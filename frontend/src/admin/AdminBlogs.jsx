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
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user/Blogs`)
      .then((response) => setBlogs(response.data.blogs))
      .catch((error) => console.error("Error fetching blogs:", error));
    setloading(false);
  }, []);

  const handleDelete = async (id) => {
    try {
      setloading(true)
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/user/delete/Blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 mt-6">
      <div className="max-w-[80vw]  mx-auto">
        <h1 className="mb-6 text-2xl font-semibold text-center text-white sm:text-3xl">
          Manage Blogs
        </h1>
        <div className="flex items-center justify-between mb-6">
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
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Title
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Author
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Created At
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
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
                  <td className="px-6 py-4 text-sm font-medium text-right md:flex whitespace-nowrap">
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
