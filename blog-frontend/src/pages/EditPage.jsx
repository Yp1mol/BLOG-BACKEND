import { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";
import { useAuth } from "../contexts/AuthContext";

export default function EditPage() {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, updatePost } = usePosts();

  const post = posts.find(p => p.id === id);

  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");

  if (!token) return <Navigate to="/login" replace />;
  if (!post) return <p className="text-center mt-10 text-red-500">Post not found</p>;

  const submit = async e => {
    e.preventDefault();
    await updatePost(id, { title, content });
    navigate("/posts");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Edit post</h1>

      <form onSubmit={submit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border p-2 rounded"
          value={content}
          onChange={e => setContent(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save
        </button>
      </form>
    </div>
  );
}
