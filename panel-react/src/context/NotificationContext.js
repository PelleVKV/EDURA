import React, { createContext, useContext, useState, useCallback } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState({
        message: "",
        isVisible: false,
        duration: 3000,
    });

    const showNotification = useCallback((message, duration = 3000) => {
        setNotification({ message, isVisible: true, duration });

        setTimeout(() => {
            setNotification({ message: "", isVisible: false, duration });
        }, duration);
    }, []);

    return (
        <NotificationContext.Provider value={{ notification, showNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => useContext(NotificationContext);
