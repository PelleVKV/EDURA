import React from "react";
import { Searchbar } from "../../tools/Searchbar";

export const DesignPanel = () => {
    return (
        <div className="w-full h-full p-2">
            <div className="text-xs w-full h-full space-y-8 select-none">
                <Searchbar />

                <div className="mt-4">
                    <p>Media</p>
                    <hr></hr>
                </div>
            </div>
        </div>
    )
}