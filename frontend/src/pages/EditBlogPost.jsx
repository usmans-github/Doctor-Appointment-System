import axios from 'axios';
import { ArrowLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';

const EditBlogPost = () => {
  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Youtube,
    ],
    content: '',
  });

  useEffect(() => {
    axios
      .get(`/server/api/user/Blogs/${id}`)
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
        await axios.put(`/server/api/user/update/Blogs/${id}`, {
          title,
          imageUrl,
          content: updatedContent,
        });
        navigate(`/blogpost/${id}`);
      } catch (error) {
        console.error("Error updating blog post:", error);
      }
    }
  };

  if (!blog) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <section className="py-14 mt-16 rounded-[2.5rem] flex justify-center items-center flex-col px-6 bg-[#f0f0f0]">
      <div className="w-full max-w-4xl bg-indigo-[#f0f0f0] text-black rounded-[2rem] border-2  border-indigo-500 overflow-hidden transition-all">
        <div className="relative h-64 md:h-96">
          <img src={imageUrl || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
        </div>
        <div className="p-8 fles flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-8 w-full px-2 py-3 border border-indigo-500 rounded-[1.5rem] text-black bg-[#f0f0f0]"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mb-8 w-full px-2 py-3 border border-indigo-500 rounded-[1.5rem] text-black bg-[#f0f0f0]"
          />
          <EditorContent editor={editor} />
          <button
            onClick={handleUpdate}
            className="mt-4 bg-white text-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Update Blog Post
          </button>
          <div className="flex justify-between items-center mt-4">
            <Link to="/admin/blogs" className="group">
              <button className="flex items-center gap-2 text-lg font-semibold group-hover:text-zinc-900 transition-all">
                <ArrowLeft />
                Back to Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditBlogPost;