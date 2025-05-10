import { useRef, useEffect } from "react";
import { useData } from "../../context/DataContext";

export const courseEnvMenu = [
    { label: "Add Item", onClick: () => console.log("Add Item") },
    { label: "Delete Item", onClick: () => console.log("Delete Item") },
    { label: "Edit Item", onClick: () => console.log("Edit Item") },
    { label: "Duplicate Item", onClick: () => console.log("Duplicate Item") },
];

export const courseTreeMenu = [
    { label: "Add Frame", onClick: () => console.log("Add Course") },
    { label: "Delete Frame", onClick: () => console.log("Delete Course") },
    { label: "Edit Frame", onClick: () => console.log("Edit Course") },
    { label: "Duplicate Frame", onClick: () => console.log("Duplicate Course") },
];

export const ContextMenu = ({ data, position, onClose, selectedObject }) => {
    const { dataCollection, setDataCollection } = useData();
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    if (!position) return null;

    return (
        <div
            ref={menuRef}
            className="absolute bg-gray-100 shadow-md z-50"
            style={{ top: position.y, left: position.x }}
            onClick={onClose}
        >
            <ul className="text-[8px]">
                {data.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => (onClose())}
                        className="px-4 py-2 hover:bg-white cursor-pointer"
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};
