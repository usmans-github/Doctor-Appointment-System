import {  ArrowRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredBlogs = [
  {
    title: "Latest Healthcare Insights",
    excerpt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    author: "Dr. Sarah Wilson",
    specialty: "General Medicine",
    imageUrl:
      "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
    readTime: "5 min read",
  },
  {
    title: "Medical Advancements 2024",
    excerpt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    author: "Dr. Michael Chen",
    specialty: "Family Medicine",
    imageUrl:
      "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
    readTime: "4 min read",
  },
  {
    title: "Healthcare Technology",
    excerpt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    author: "Dr. Emily Brooks",
    specialty: "Digital Health",
    imageUrl:
      "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
    readTime: "6 min read",
  },
];

export default function Blogs() {
  return (
    <section
      className="py-14 mt-16 rounded-[2.5rem] flex justify-center items-center
     flex-col px-6 bg-[#f0f0f0]"
    >
      <div className="text-center mb-12 w-full md:w-[40vw]">
        <h2 className="md:text-5xl text-4xl text-indigo-500 text-center  font-extrabold mb-4 ">
          Featured Blogs
        </h2>
        <p className="text-2xl font-semibold text-zinc-900 mx-3 text-center mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          ipsa sed error eum
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredBlogs.map((blog, index) => (
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
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text- font-normal">
                  {blog.specialty}
                </span>
              </div>
              <h3 className="text-xl font-bold  mb-3 group-hover:text-zinc-900 group-hover:cursor-pointer group-hover:underline">
                {blog.title}
              </h3>
              <p className="mb-6 text-base">{blog.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-md font-semibold">By &nbsp; 
                   <Link to='/all-doctors'><span className="cursor-pointer group-hover:text-zinc-900 group-hover:underline">{blog.author}</span></Link>
                   </span>
                <div className="flex justify-center items-center gap-2  transition-all
                  md:text-lg font-semibold">
                <button className="flex justify-center items-center group-hover:text-zinc-900 group-hover:gap-2
             transition-all gap-1" >
                  Learn more
                  <ArrowRight  />
                </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="group text-center mt-12 ">
        <Link to="/all-pblogs">
        <button className="group-hover:gap-4 group-hover:text-zinc-900 font-semibold text-white gap-2   transition-all text-lg flex justify-center
         items-center text-center w-full py-4  bg-indigo-500 px-10 rounded-[2.5rem] self-center">
          All blogs
          <MoveRight />
        </button>
           </Link>
      </div>
    </section>
  );
}
