import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

export const AuthContext = createContext();

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

axios.defaults.baseURL = backendUrl;

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [authUser, setAuthUser] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(true);

  // ---------------- CHECK AUTH ----------------
  const checkAuth = async () => {

    try {

      const { data } = await axios.get("/api/users/check", {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (data.success) {

        setAuthUser(data.userData);
        connectSocket(data.userData);

      }

    } catch (error) {

      console.log("Auth check failed:", error.message);
      logout();

    } finally {

      setLoading(false);

    }

  };

  // ---------------- LOGIN / SIGNUP ----------------
  const login = async (state, credentials) => {

    try {

      const { data } = await axios.post(`/api/users/${state}`, credentials);

      if (data.success) {

        setAuthUser(data.userData);
        setToken(data.token);

        localStorage.setItem("token", data.token);

        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

        connectSocket(data.userData);

        toast.success(data.message);

      } else {

        toast.error(data.message);

      }

    } catch (error) {

      console.log(error);
      toast.error("Server Error");

    }

  };

  // ---------------- LOGOUT ----------------
  const logout = () => {

    localStorage.removeItem("token");

    setToken(null);
    setAuthUser(null);
    setOnlineUsers([]);

    delete axios.defaults.headers.common["Authorization"];

    if (socket) {
      socket.disconnect();
      setSocket(null);
    }

    toast.success("Logged out");

  };

  // ---------------- UPDATE PROFILE ----------------
  const updateProfile = async (body) => {

    try {

      const { data } = await axios.put("/api/users/update-profile", body);

      if (data.success) {

        setAuthUser(data.user);
        toast.success("Profile updated");

      }

    } catch (error) {

      console.log(error);
      toast.error("Profile update failed");

    }

  };

  // ---------------- SOCKET CONNECTION ----------------
  const connectSocket = (userData) => {

    if (!userData) return;

    const newSocket = io(backendUrl, {
      query: { userId: userData._id }
    });

    setSocket(newSocket);

    newSocket.on("connect", () => {

      console.log("Socket Connected:", newSocket.id);

    });

    newSocket.on("getOnlineUsers", (users) => {

      console.log("Online Users:", users);
      setOnlineUsers(users);

    });

  };

  // ---------------- INITIAL LOAD ----------------
  useEffect(() => {

    if (token) {

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      checkAuth();

    } else {

      setLoading(false);

    }

  }, [token]);

  const value = {
    axios,
    authUser,
    onlineUsers,
    socket,
    login,
    logout,
    updateProfile,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};