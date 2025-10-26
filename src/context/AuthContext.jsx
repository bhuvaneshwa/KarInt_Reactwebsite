import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const token = localStorage.getItem("adminToken");
    const userData = localStorage.getItem("adminUser");
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");
      }
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      // Simulate API call - replace with actual authentication
      // For demo purposes, we'll accept admin@karint.com / admin123
      if (
        credentials.identifier === "admin@karint.com" && 
        credentials.password === "admin123"
      ) {
        const userData = {
          id: 1,
          name: "Admin User",
          email: "admin@karint.com",
          role: "admin"
        };
        
        const token = "demo-admin-token-" + Date.now();
        
        localStorage.setItem("adminToken", token);
        localStorage.setItem("adminUser", JSON.stringify(userData));
        setUser(userData);
        
        return { success: true };
      } else {
        return { 
          success: false, 
          error: "Invalid credentials. Use admin@karint.com / admin123" 
        };
      }
    } catch (error) {
      return { 
        success: false, 
        error: "Login failed. Please try again." 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};