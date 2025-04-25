import axios from 'axios'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const [blog, setBlog] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user/Blogs/${id}`)
      .then((response) => setBlog(response.data.blog))
      .catch((error) => console.error("Error fetching blog post:", error));
  }, [id])

   const shareUrl = `https://sehatx.com/blogpost/${id}`; // Fixed the shareUrl

  if (!blog) {
     return <div className="text-center mt-20">Loading...</div>
  }

  return (
    <>
      <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: blog.title,
              author: blog.author,
              datePublished: blog.createdAt,
              image: blog.imageUrl || "https://sehatx.com/sehatx-logo.png",
              url: `https://sehatx.com/blogpost/${id}`,
              description: blog.content?.substring(0, 150),
            })}
          </script>
          </Helmet>
          <Helmet>
        <title>{blog.title}</title>
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.content} />
        <meta
          property="og:image"
          content={blog.imageUrl || "https://sehatx.com/sehatx-logo.png"}
        />
        <meta property="og:url" content={`https://sehatx.com/blogpost/${id}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.content} />
        <meta
          name="twitter:image"
          content={blog.imageUrl || "https://sehatx.com/sehatx-logo.png"}
        />
      </Helmet>
      <section className="py-14 mt-16 rounded-[2.5rem] flex justify-center items-center flex-col px-6 bg-[#f0f0f0]">
        <div className="w-full max-w-4xl border-2 border-indigo-500 rounded-[2rem] overflow-hidden transition-all">
          <div className="relative h-64 md:h-96">
            <img
              src={blog.imageUrl || "/placeholder.svg"}
              alt={blog.title || "Blog Image"}
              loading="lazy"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {blog.title}
            </h1>
            <p className="mb-6 text-sm">By {blog.author}</p>
            <div
              className="mb-8"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>

            {/* Social Sharing Buttons */}
            <div className="flex gap-4 mb-8">
              <FacebookShareButton url={shareUrl} quote={blog.title}>
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={blog.title}>
                <TwitterIcon size={40} round />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl} summary={blog.content}>
                <LinkedinIcon size={40} round />
              </LinkedinShareButton>
              <WhatsappShareButton url={shareUrl} title={blog.title}>
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
            </div>

            <div className="flex justify-between items-center">
              <Link to="/" className="group">
                <button className="flex items-center gap-2 text-lg font-semibold group-hover:text-zinc-900 transition-all">
                  <ArrowLeft />
                  Back to Blogs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



export default BlogPost