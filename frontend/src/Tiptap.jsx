import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import Link from "@tiptap/extension-link";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useContext } from "react";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Undo,
  Image as ImageIcon,
  Youtube as YoutubeIcon,
  Link as LinkIcon,
  ArrowLeftIcon,
} from "lucide-react";
import axios from "axios";
import { LoadingContext } from "./context/LoadingContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";




const MenuBar = ({ editor }) => {
  if (!editor) return null;

  <div className="control-group">
    <div className="button-group">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        H3
      </button>
    </div>
  </div>;

  const addImage = () => {
    const url = prompt("Enter image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addVideo = () => {
    const url = prompt("Enter YouTube URL");
    if (url) {
      editor.chain().focus().setYoutubeVideo({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = prompt("Enter URL");
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 p-4 bg-indigo-500 rounded-[1.5rem]">
      {[
        {
          action: () => editor.chain().focus().toggleBold().run(),
          active: editor.isActive("bold"),
          label: "Bold",
          icon: <Bold className="w-5 h-5" />,
        },
        {
          action: () => editor.chain().focus().toggleItalic().run(),
          active: editor.isActive("italic"),
          label: "Italic",
          icon: <Italic className="w-5 h-5" />,
        },
        {
          action: () => editor.chain().focus().toggleBulletList().run(),
          active: editor.isActive("bulletList"),
          label: "Bullet List",
          icon: <List className="w-5 h-5" />,
        },
        {
          action: () => editor.chain().focus().toggleOrderedList().run(),
          active: editor.isActive("orderedList"),
          label: "Ordered List",
          icon: <ListOrdered className="w-5 h-5" />,
        },
        {
          action: () => editor.chain().focus().toggleBlockquote().run(),
          active: editor.isActive("blockquote"),
          label: "Blockquote",
          icon: <Quote className="w-5 h-5" />,
        },
        {
          action: () => editor.chain().focus().undo().run(),
          label: "Undo",
          icon: <Undo className="w-5 h-5" />,
        },
        {
          action: () => editor.chain().focus().redo().run(),
          label: "Redo",
          icon: <Redo className="w-5 h-5" />,
        },
        {
          action: addImage,
          label: "Insert Image",
          icon: <ImageIcon className="w-5 h-5" />,
        },
        {
          action: addVideo,
          label: "Insert YouTube Video",
          icon: <YoutubeIcon className="w-5 h-5" />,
        },
        {
          action: addLink,
          label: "Insert Link",
          icon: <LinkIcon className="w-5 h-5" />,
        },
      ].map((button, index) => (
        <button
          key={index}
          onClick={button.action}
          className={`flex items-center justify-center w-10 h-10 rounded-full text-indigo-500 ${
            button.active ? "bg-black" : "bg-white"
          } hover:bg-black transition-colors`}
          title={button.label}
        >
          {button.icon}
        </button>
      ))}
    </div>
  );
};

const extensions = [
  StarterKit.configure({
    bulletList: { keepMarks: true, keepAttributes: false },
    orderedList: { keepMarks: true, keepAttributes: false },
  }),
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  Image.configure({
    inline: true,
    allowBase64: true,
    HTMLAttributes: {
      class: "rounded-lg",
    },
  }),
  Youtube.configure({
    inline: true,
    HTMLAttributes: {
      class: "rounded-lg",
    },
  }),
  Link.configure({
    openOnClick: false,
  }),
];


const content = ``;

export default () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { loading, setloading } = useContext(LoadingContext);
  const [category, setCategory] = useState("Public Education");

  const navigate = useNavigate();

  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class:
          "prose prose-lg border border-indigo-500 p-4 rounded-[1.5rem] mt-10 focus:outline-none",
      },
    },
  });

  const handlePublish = async () => {
    if (editor) {
      const html = editor.getHTML();
      console.log(html);
      // send the HTML content to backend
      try {
        setloading(true);
        const admin_token = Cookies.get('admin_token')
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/admin/blog-new`,
          {
            title,
            imageUrl,
            content: html,
            category,
          },
          {
            headers: {
              Authorization: `Bearer ${admin_token}`,
            },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
          setTimeout(() => {
            navigate("/admin/blogs");
          }, 1000);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="max-w-4xl mx-auto p-6 bg-[#f0f0f0] rounded-[2.5rem]">
        <h1 className="text-2xl font-bold mb-4">Write a Blog</h1>

        {/* Responsive Flex Container */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 my-8">
          {/* Title Input */}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-2 py-3 border border-indigo-500 rounded-[1.5rem] bg-[#f0f0f0]"
          />

          {/* Image URL Input */}
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-2 py-3 border border-indigo-500 rounded-[1.5rem] bg-[#f0f0f0]"
          />

          {/* Category Select */}
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="cursor-pointer w-full px-2 py-3 border border-indigo-500 rounded-[1.5rem] bg-[#f0f0f0]"
          >
            <option value="Public Education">Public Education</option>
            <option value="Medical Education">Medical Education</option>
          </select>
        </div>

        {/* MenuBar and EditorContent */}
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />

        {/* Publish Button */}
        <button
          onClick={handlePublish}
          className="mt-10 font-semibold text-white gap-2 transition-all text-lg flex justify-center items-center text-center py-4 bg-indigo-500 px-10 rounded-[2.5rem] hover:bg-indigo-600"
        >
          Publish Now
        </button>
      </div>
    </>
  );
};
