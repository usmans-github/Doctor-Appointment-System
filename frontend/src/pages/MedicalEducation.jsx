import axios from "axios";
import { ArrowRight, MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
};

const MedicalEducation = () => {
  const [blogs, setBlogs] = useState([]);

  const medicalBlogs = blogs.filter(
    (blog) => blog.category === "Medical Education"
  );

  useEffect(() => {
    axios
      .get("https://sehatx.com/api/user/Blogs")
      .then((response) => setBlogs(response.data.blogs))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <section
      className="py-14 mt-16 rounded-[2.5rem] flex justify-center items-center
     flex-col px-6 bg-[#f0f0f0]"
    >
      <div className="text-center mb-12 w-full md:w-[40vw]">
        <h2 className="md:text-5xl text-4xl text-indigo-500 text-center  font-extrabold mb-4 ">
          Medical Education
        </h2>
        <p className="text-xl sm:text-2xl font-semibold text-black text-center max-w-3xl">
          Stay updated with the latest healthcare insights and advancements from
          our expert doctors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {medicalBlogs.map((blog, index) => (
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
                <h3
                  className="text-xl font-bold  mb-3 group-hover:text-zinc-900 group-hover:cursor-pointer
               group-hover:underline"
                >
                  {blog.title}
                </h3>
              </Link>

              <p className="mb-6 text-base">
                {" "}
                {truncateText(blog.content.replace(/<[^>]+>/g, ""), 150)}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-md font-semibold">
                  By &nbsp;
                  <Link to="/all-doctors">
                    <span
                      className="cursor-pointer group-hover:text-zinc-900
                    group-hover:underline"
                    >
                      {blog.author}
                    </span>
                  </Link>
                </span>
                <div
                  className="flex justify-center items-center gap-2  transition-all
                  md:text-lg font-semibold"
                >
                  <Link to={`/blogpost/${blog._id}`}>
                    <button
                      className="flex justify-center items-center group-hover:text-zinc-900 group-hover:gap-2
                      transition-all gap-1"
                    >
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

      <div className="group text-center mt-12 ">
        <Link to="/medical/education">
          <button
            className="group-hover:gap-4 group-hover:text-zinc-900 font-semibold text-white gap-2   transition-all text-lg flex justify-center
         items-center text-center w-full py-4  bg-indigo-500 px-10 rounded-[2.5rem] self-center"
          >
            See more
            <MoveRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MedicalEducation;