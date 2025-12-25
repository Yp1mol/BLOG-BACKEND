import { useParams, Link, Navigate } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";
import { useAuth } from "../contexts/AuthContext";

export default function PostPage() {
    const { id } = useParams();
    const { posts } = usePosts();
    const { token } = useAuth();

    if (!token) {
        return <Navigate to="/login" replace />;
    }
    const post = posts.find(p => p.id === id);

    if (!post) {
        return <p className="text-center mt-10">Post not found</p>;
    }

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="mb-6">{post.content}</p>

            <Link to="/posts" className="text-blue-600 hover:underline">
                Back
            </Link>
        </div>
    );
}
