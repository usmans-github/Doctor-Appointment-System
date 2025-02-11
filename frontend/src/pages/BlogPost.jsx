import React from 'react'

const BlogPost = () => {
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`/server/api/user/Blogs/${id}`)
      .then((response) => setBlog(response.data))
      .catch((error) => console.error("Error fetching blog post:", error))
  }, [id])

  if (!blog) {
    return <div className="text-center mt-20">Loading...</div>
  }

  return (
    <section className="py-14 mt-16 rounded-[2.5rem] flex justify-center items-center flex-col px-6 bg-[#f0f0f0]">
      <div className="w-full max-w-4xl bg-indigo-500 text-white rounded-[2rem] overflow-hidden transition-all">
        <div className="relative h-64 md:h-96">
          <img src={blog.imageUrl || "/placeholder.svg"} alt={blog.title} className="object-cover w-full h-full" />
        </div>
        <div className="p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-semibold">By {blog.author}</span>
            <span className="text-md">{blog.readTime}</span>
          </div>
          <p className="mb-6 text-lg">{blog.excerpt}</p>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Specialty</h2>
            <p>{blog.specialty}</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Content</h2>
            <p>{blog.content}</p>
          </div>
          <div className="flex justify-between items-center">
            <Link to="/blogs" className="group">
              <button className="flex items-center gap-2 text-lg font-semibold group-hover:text-zinc-900 transition-all">
                <ArrowLeft />
                Back to Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}



export default BlogPost
