import { useState, createContext, useEffect, useContext } from "react";
import { useAuthContext } from "../context/AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            // Establish a new socket connection when the authUser is present
            const socket = io("https://nchatapp-server.vercel.app", {
                query: {
                    userId: authUser._id, // Passing the userId as a query parameter
                },
                withCredentials: true, // Ensures cookies are sent with requests if needed
                reconnection: true, // Reconnect automatically if the connection is lost
                reconnectionDelay: 500, // Reconnection attempt delay in milliseconds
                reconnectionAttempts: 10, // Maximum reconnection attempts
                transports: ["websocket"], // Forces the use of WebSockets

            });

            setSocket(socket);

            // Listen for 'getOnlineUsers' event from the server
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users); // Update the online users list in state
            });

            return () => {
                // Clean up the socket connection when the component unmounts or authUser changes
                socket.close();
            };
        } else {
            if (socket) {
                // Close the socket connection if the authUser is not present
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]); // Dependency array ensures the effect runs when authUser changes

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;
