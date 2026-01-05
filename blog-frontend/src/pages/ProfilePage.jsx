import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { fetchProfile, updateUsername } from "../api";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function ProfilePage() {
  const { token } = useAuth();
  const [username, setUsername] = useState("");

  useEffect(() => {

    if (!token) return;
    fetchProfile(token).then((data) => {
      setUsername(data.username);
    });
  }, [token]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const submit = async (e) => {
    e.preventDefault();
    const updated = await updateUsername(token, username);
  };

  return (

    <div className="max-w-md mx-auto p-6 space-y-4">
      <button className="text-blue-600 hover:underline">
        <Link to="/posts">
          Back
        </Link>
      </button>
      <h1 className="text-2xl font-bold">Profile</h1>

      <div>
        <p className="font-semibold">Username</p>

        <form className="space-y-4" onSubmit={submit}>
          <input
            className="w-full border p-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save
          </button>
        </form>
      </div>
      <div>
        <p className="font-semibold">Password</p>
        <p className="font-semibold">********</p>
      </div>
    </div>
  );
}
