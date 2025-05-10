import React from "react";

export const Searchbar = () => {
    return (
        <div className="relative h-6 text-xs">
            <input type="text" placeholder="Search..." className="w-full h-6 pl-8 bg-white shadow-md rounded-md"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
            className="feather feather-search absolute -top-[2px]">
                <circle cx="11" cy="11" r="5"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>          
        </div>
    )
}