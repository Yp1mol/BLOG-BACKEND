import { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";
import { useAuth } from "../contexts/AuthContext";

export default function CreatePage() {
    const { token } = useAuth();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const { createPost } = usePosts();

    if (!token) {
        return <Navigate to="/login" replace />;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPost({ title, content });
        navigate("/posts");
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Create post</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    className="w-full border p-2 rounded"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <textarea
                    className="w-full border p-2 rounded min-h-[120px]"
                    placeholder="Content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />

                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Create
                </button>
            </form>

            <Link to="/posts" className="inline-block mt-4 text-blue-600 hover:underline">
                Back to posts
            </Link>
        </div>
    );
}
