import React, { useState } from "react";
import { AssetsFolder } from "./components/AssetsFolder";
import { DesignPanel } from "./components/DesignPanel";

const tabs = [
    { name: 'Design', id: 'design' },
    { name: 'Assets', id: 'assets' }
];

export const Toolbar = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="w-full h-full">
            <div className="flex text-xs">
                <button className={`flex justify-center items-center w-1/2 py-1 rounded-t-lg cursor-pointer
                ${activeTab === 'design' ? 'bg-gray-100' : ''}`} onClick={() => setActiveTab('design')}>DESIGN</button>
                <button className={`flex justify-center items-center w-1/2 py-1 rounded-t-lg cursor-pointer
                ${activeTab === 'assets' ? 'bg-gray-100' : ''}`} onClick={() => setActiveTab('assets')}>ASSETS</button>
            </div>
            <div className="w-full h-full bg-gray-100">
                {activeTab === 'design' ? <DesignPanel /> : <AssetsFolder /> }
            </div>
        </div>
    )
}