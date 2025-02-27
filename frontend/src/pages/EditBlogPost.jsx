import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import Link from "@tiptap/extension-link";
import { LoadingContext } from "../context/LoadingContext";
import React from "react";

const extensions = [
  StarterKit.configure({
    bulletList: { keepMarks: true },
    orderedList: { keepMarks: true },
  }),
  Heading.configure({ levels: [1, 2, 3] }),
  Image.configure({
    inline: true,
    allowBase64: true,
    HTMLAttributes: { class: "rounded-lg" },
  }),
  Youtube.configure({ inline: true, HTMLAttributes: { class: "rounded-lg" } }),
  Link.configure({ openOnClick: false }),
];

export default function EditBlogPost() {
  const { id } = useParams(); // Get blog ID from URL
  const navigate = useNavigate();
  const { loading, setloading } = useContext(LoadingContext);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("Public Education");

  const editor = useEditor({
    extensions,
    content: "",
    editorProps: {
      attributes: {
        class:
          "prose prose-lg border border-indigo-500 p-4 rounded-[1.5rem] mt-4 focus:outline-none",
      },
    },
  });

  // Fetch blog details on mount
  useEffect(() => {
    if (!id) return;
    setloading(true);

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user/Blogs/${id}`)
      .then((response) => {
        const { title, imageUrl, content, category } = response.data.blog;
        setTitle(title);
        setImageUrl(imageUrl);
        setCategory(category);
        editor?.commands.setContent(content);
      })
      .catch((error) => toast.error("Error fetching blog post"))
      .finally(() => setloading(false));
  }, [id, editor, setloading]);

  // Handle Update
  const handleUpdate = async () => {
    if (!editor || !id) return;

    setloading(true);
    const updatedContent = editor.getHTML();
    const admin_token = Cookies.get("admin_token");

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/update/Blogs/${id}`,
        { title, imageUrl, content: updatedContent, category },
        {
          headers: { Authorization: `Bearer ${admin_token}` },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success("Blog updated successfully!");
        setTimeout(() => navigate(`/admin/blogs`), 1000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Error updating blog post");
    } finally {
      setloading(false);
    }
  };

  if (!id) return <div className="text-center mt-20">Invalid Blog ID</div>;

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        theme="light"
        transition={Bounce}
      />
      <div className="max-w-4xl mx-auto p-6 bg-[#f0f0f0] rounded-[2.5rem] mt-16">
        <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 my-8">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-2 py-3 border border-indigo-500 rounded-[1.5rem] bg-[#f0f0f0]"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-2 py-3 border border-indigo-500 rounded-[1.5rem] bg-[#f0f0f0]"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="cursor-pointer w-full px-2 py-3 border border-indigo-500 rounded-[1.5rem] bg-[#f0f0f0]"
          >
            <option value="Public Education">Public Education</option>
            <option value="Medical Education">Medical Education</option>
          </select>
        </div>

         <EditorContent editor={editor} />

        <button
          onClick={handleUpdate}
          className="mt-10 font-semibold text-white gap-2 transition-all text-lg flex justify-center items-center text-center py-4 bg-indigo-500 px-10 rounded-[2.5rem] hover:bg-indigo-600"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Blog"}
        </button>
      </div>
    </>
  );
}
