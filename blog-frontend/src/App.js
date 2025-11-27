import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { PostsProvider } from './contexts/PostsContext';

import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PostsProvider>
          <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/posts/:id" element={<PostPage />} />

            <Route
              path="/create"
              element={
                <CreatePage />
              }
            />

            <Route
              path="/edit/:id"
              element={
                  <EditPage />
              }
            />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterPage />} />

            <Route
              path="/profile"
              element={
                  <ProfilePage />
              }
            />

            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </PostsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
