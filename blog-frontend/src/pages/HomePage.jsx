import { usePosts } from "../contexts/PostsContext";
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function HomePage() {
    const { posts, removePost } = usePosts();

    const { user, token, logout } = useAuth();

    if (!token) {
        return <Navigate to="/login" replace />;
    }
    
    return (

        <div className="max-w-3xl mx-auto p-6">
            <div className="flex items-center gap-4">
                <button className="font-semibold  hover:underline">
                    <Link to="/profile">
                        {user.username}
                    </Link>
                </button>
                <button
                    onClick={logout}
                    className="text-red-600 hover:underline"
                >
                    Logout
                </button>
                <button className="text-blue-600 hover:underline">
                    <Link to="/register">
                        Register
                    </Link>
                </button>
                <Link 
                    to="/create" 
                    className="text-green-600 hover:underline"
                >
                    Create New Post
                </Link>
            </div>
            <h1 className="text-3xl font-bold mb-6">Posts</h1>


            {posts.length === 0 ? (
                <p className="text-gray-500">No posts</p>
            ) : (
                <ul className="space-y-4">
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            className="border-4 border-black rounded-lg p-4 shadow-sm"
                        >
                            <h3 className="text-xl font-semibold mb-2">
                                {post.title}
                            </h3>

                            <p className="text-gray-700 mb-3">
                                {post.content}
                            </p>

                            <div className="flex justify-between items-center">
                                <Link
                                    to={`/posts/${post.id}`}
                                    className="text-blue-600 hover:underline"
                                >
                                    Read more
                                </Link>

                                <button
                                    onClick={() => removePost(post.id)}
                                    className="text-red-500 hover:text-red-700 border-2 border-red-500 rounded"
                                >
                                    Delete
                                </button>
                                <Link to={`/edit/${post.id}`}>
                                    <button className="text-green-500 hover:text-green-700 border-2 border-green-500 rounded">Edit</button>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
