import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import { DataProvider } from "./context/DataContext";
import { NotificationProvider } from "./context/NotificationContext";
import { Notification } from "./components/tools/Notification";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
		{/* Wrapping the App with DataProvider (for gathering course structure data) and NotificationProvider (for global notifications) */}
        <DataProvider>
            <NotificationProvider>
                <App />
                <Notification />
            </NotificationProvider>
        </DataProvider>
    </React.StrictMode>
);
