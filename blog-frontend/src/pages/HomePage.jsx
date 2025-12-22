import { usePosts } from "../contexts/PostsContext";
import { Link } from "react-router-dom";

export default function HomePage() {
    const { posts, removePost } = usePosts();

    return (
        
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Posts</h1>
            <Link to="/create">
                <button className="text-blue-500 hover:text-blue-700 border-2 border-blue-500 rounded">Create</button>
            </Link>

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
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
