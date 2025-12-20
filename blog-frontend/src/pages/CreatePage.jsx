import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";

export default function CreatePage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();
    const { createPost } = usePosts();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createPost({
            title,
            content,
        });

        navigate("/");
    };

    return (
        <div>
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Enter content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    required
                />

                <button type="submit">Create</button>
            </form>
        </div>
    );
}
