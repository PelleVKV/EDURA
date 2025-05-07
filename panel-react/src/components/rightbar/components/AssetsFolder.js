import React, { useEffect } from "react";

export const AssetsFolder = () => {
    return (
        <div className="w-full h-full p-2">
            <div className="text-xs w-full h-full space-y-8 select-none">
                <div className="mt-4">
                    <p>Media</p>
                    <hr></hr>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                        {/* {#each assets.mediaTypes as mediaAsset}
                            <div className="relative flex flex-col justify-center shadow-md transform transition 
                                        duration-300 hover:scale-105 items-center w-16 h-16 bg-gray-100 cursor-pointer">
                                {@html mediaAsset.logo}
                                {mediaAsset.title}
                            </div>
                        {/each} */}
                    </div>
                </div>
            </div>
        </div>
    )
}