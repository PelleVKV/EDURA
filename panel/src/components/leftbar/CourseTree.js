import React, { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import dragNdropIcon from "../../assets/images/dragNdrop.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const CourseTree = () => {
    const { dataCollection, setDataCollection, selectedShapes, setSelectedShapes } = useData();
    const [projectTitle, setProjectTitle] = useState("New Project");

    const saveTitle = (event) => {
        setProjectTitle(event.target.value);
        // Save title to cookie
    };

    const getDisplayNames = (items) => {
        const nameCount = {};
        return items.map((item) => {
            const baseName = item.name;
            nameCount[baseName] = (nameCount[baseName] || 0) + 1;
            const displayName =
                nameCount[baseName] > 1
                    ? `${baseName} (${nameCount[baseName]})`
                    : baseName;
            return { ...item, displayName };
        });
    };

    return (
        <div className="flex flex-col space-y-4 w-full h-full">
            <input
                type="text"
                className="outline-none"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                onBlur={saveTitle}
            />
            <div className="flex flex-col space-y-2">
                {getDisplayNames(dataCollection).map((item, index) => (
                    <div key={index} className={`flex items-center justify-between text-xs 
                        ${selectedShapes.some(shape => shape.id === item.id) ? "bg-gray-200" : ""}
                        space-x-2 hover:bg-gray-200 p-2 rounded`}>
                        <div className="flex">
                            <img src={dragNdropIcon} className="w-4"/>
                            <span>{item.displayName}</span>
                        </div>
                        <div className="hover:bg-gray-300 p-1 rounded">
                            <FontAwesomeIcon icon={faTrash} className="cursor-pointer"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
