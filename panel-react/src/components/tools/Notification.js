import React from "react";
import { useNotification } from "../../context/NotificationContext";

export const Notification = () => {
    const { notification } = useNotification();

    if (!notification.isVisible) return null;

    return (
        <div className="absolute text-sm top-2 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl p-2 px-6 rounded-full animate-[fadeIn_0.5s_ease-out]">
            {notification.message}
        </div>
    );
};