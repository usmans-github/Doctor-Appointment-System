import axios from "axios";
import { ArrowRight, MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
};

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const publicBlogs = blogs.filter(
    (blog) => blog.category === "Public Education"
  );

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user/Blogs/${id}`)
      .then((response) => {
        const blogData = response.data.blog;
        setBlog(blogData);
        setTitle(blogData.title);
        setImageUrl(blogData.imageUrl);
        editor.commands.setContent(blogData.content);
      })
      .catch((error) => console.error("Error fetching blog post:", error));
  }, [id, editor]);

  const handleUpdate = async () => {
    if (editor) {
      const updatedContent = editor.getHTML();
      try {
        await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/update/Blogs/${id}`,
          {
            title,
            imageUrl,
            content: updatedContent,
          }
        );
        navigate(`/blogpost/${id}`);
      } catch (error) {
        console.error("Error updating blog post:", error);
      }
    }
  };

  if (!blog) {
    return <div className="mt-20 text-center">Loading...</div>;
  }

  return (
    <section className="py-14 mt-16 rounded-[2.5rem] flex justify-center items-center flex-col px-6 bg-[#f0f0f0]">
      <div className="text-center mb-12 w-full md:w-[40vw]">
        <h2 className="mt-8 mb-4 text-4xl font-extrabold text-center text-indigo-500 md:text-5xl">
          Public Education
        </h2>
        <p className="max-w-3xl text-xl font-semibold text-center text-black sm:text-2xl">
          Stay updated with the latest healthcare insights and advancements from
          our expert doctors.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {publicBlogs.map((blog, index) => (
          <div
            key={index}
            className="group bg-indigo-500 text-white rounded-[2rem] overflow-hidden transition-all"
          >
            <div className="relative h-48">
              <img
                src={blog.imageUrl || "/placeholder.svg"}
                alt={blog.title}
                className="object-cover h-[30vh] w-full"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-3"></div>
              <Link to={`/blogpost/${blog._id}`}>
                <h3 className="mb-3 text-xl font-bold group-hover:text-zinc-900 group-hover:cursor-pointer group-hover:underline">
                  {blog.title}
                </h3>
              </Link>

              <p className="mb-6 text-base">
                {truncateText(blog.content.replace(/<[^>]+>/g, ""), 150)}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-md">
                  By &nbsp;
                  <Link to="/all-doctors">
                    <span className="cursor-pointer group-hover:text-zinc-900 group-hover:underline">
                      {blog.author}
                    </span>
                  </Link>
                </span>
                <div className="flex items-center justify-center gap-2 font-semibold transition-all md:text-lg">
                  <Link to={`/blogpost/${blog._id}`}>
                    <button className="flex items-center justify-center gap-1 transition-all group-hover:text-zinc-900 group-hover:gap-2">
                      Learn more
                      <ArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center group">
        <Link to="/blogs">
          <button className="group-hover:gap-4 group-hover:text-zinc-900 font-semibold text-white gap-2 transition-all text-lg flex justify-center items-center text-center w-full py-4 bg-indigo-500 px-10 rounded-[2.5rem] self-center">
            See more
            <MoveRight />
          </button>
        </Link>
      </div>
    </section>
  );
}
