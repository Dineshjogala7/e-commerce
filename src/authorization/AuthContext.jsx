import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../author/firebase";

const AuthCreateContext = createContext();

export const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Auth state changed:', currentUser); // Debug log
            
            if (currentUser) {
                // Fixed: Use currentUser instead of user (which is null initially)
                setUser({
                    
                    fstname: currentUser.displayName || currentUser.email.split('@')[0], // Extract first name from email if displayName not available
                    lstname: "" // You can set this based on your needs
                });
            } else {
                setUser(null);
            }
            
            setLoading(false); // Only set loading to false once
        });

        return () => unsubscribe();
    }, []); // Remove the dependency on user to avoid infinite loops

    const value = {
        user,
        setUser,
        loading,
        setLoading
    };

    return (
        <AuthCreateContext.Provider value={value}>
            {children}
        </AuthCreateContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthCreateContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};