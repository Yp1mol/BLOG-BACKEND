import { createContext, useContext, useState, useEffect } from 'react';

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
        try {
            const response = await loginUser(credentials);

            setToken(response.access_token);
            setUser(response.user);

            localStorage.setItem('token', response.access_token);
            localStorage.setItem('user', JSON.stringify(response.user));

            return response;
        } catch (error) {
            throw error;
        }
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