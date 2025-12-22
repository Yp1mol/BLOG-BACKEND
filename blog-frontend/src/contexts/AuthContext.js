import { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, logoutUser } from '../api';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (credentials) => {
        const response = await loginUser(credentials);
        const token = response.access_token;
        const payload = JSON.parse(atob(token.split('.')[1]));
        const user = {
            id: payload.sub,
            username: payload.username,
            role: payload.role,
        };

        setToken(token);
        setUser(user);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        return response;
    };

    const logout = async () => {
        try {
            if (token) {
                await logoutUser(token);
            }
            setToken(null);
            setUser(null);
            localStorage.removeItem("token");
            localStorage.removeItem("user");

        } catch (error) {
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{
            user,
            token,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}