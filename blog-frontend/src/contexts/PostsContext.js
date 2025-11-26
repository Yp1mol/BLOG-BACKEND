import { createContext, useContext, useReducer, useEffect } from "react";
import { fetchPosts, createPost, deletePost } from "../api";
import { useAuth } from "./AuthContext";

const PostsContext = createContext(null);

export const usePosts = () => useContext(PostsContext);

function postsReducer(state, action) {
  switch (action.type) {
    case "SET_POSTS":
      return action.payload;

    case "ADD_POST":
      return [...state, action.payload];

    case "DELETE_POST":
      return state.filter((p) => p.id !== action.payload);

    default:
      return state;
  }
}

export const PostsProvider = ({ children }) => {
  const { token } = useAuth();
  const [posts, dispatch] = useReducer(postsReducer, []);

  useEffect(() => {
    if (!token) return;

    const load = async () => {
      const data = await fetchPosts(token);
      dispatch({ type: "SET_POSTS", payload: data });
    };

    load();
  }, [token]);

  const addPost = async (postData) => {
    const newPost = await createPost(token, postData);
    dispatch({ type: "ADD_POST", payload: newPost });
  };

  const removePost = async (id) => {
    await deletePost(token, id);
    dispatch({ type: "DELETE_POST", payload: id });
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, removePost }}>
      {children}
    </PostsContext.Provider>
  );
};
