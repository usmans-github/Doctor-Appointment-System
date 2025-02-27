import axios from "axios";
import { ArrowRight, MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InfiniteMovingCards } from "../components/infinite-moving-cards.jsx";

export const truncateText = (text, length) => {
  if (!text) return "No content available"; // Handle empty text safely
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user/Blogs`)
      .then((response) => setBlogs(response.data.blogs || []))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

       const PublicBlogs = blogs.filter(
         (blog) => blog.category === "Public Education"
       );

  return (
    <section className="py-14 mt-16 flex flex-col justify-center items-center px-6 bg-[#f0f0f0] rounded-[2.5rem]">
      <div className="text-center mb-12 w-full md:w-[40vw]">
        <h2 className="md:text-5xl text-4xl text-indigo-500 font-extrabold mb-4">
          Public Education
        </h2>
        <p className="text-xl sm:text-2xl font-semibold text-black text-center max-w-3xl">
          Stay updated with the latest healthcare insights and advancements from
          our expert doctors.
        </p>
      </div>

      {/* Moving Cards Component */}
      <div className="w-full max-w-6xl">
        {blogs.length > 0 ? (
          <InfiniteMovingCards
            items={PublicBlogs.map((blog) => ({
              name: blog.title || "Untitled",
              quote: truncateText(
                blog.content ? blog.content.replace(/<[^>]+>/g, "") : "",
                100
              ),
              title: blog.author || "Unknown",
              imageUrl:
                blog.imageUrl?.trim() || "https://via.placeholder.com/300",
              link: `/blogpost/${blog._id}`,
            }))}
            speed="slow"
          />
        ) : (
          <p className="text-center text-gray-500">No blogs available</p>
        )}
      </div>

      <div className="group text-center mt-12">
        <Link to="/blogs" className="inline-block">
          <button className="group-hover:gap-4 group-hover:text-zinc-900 font-semibold text-white gap-2 transition-all text-lg flex justify-center items-center text-center w-full py-4 bg-indigo-500 px-10 rounded-[2.5rem]">
            See more
            <MoveRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Blogs;