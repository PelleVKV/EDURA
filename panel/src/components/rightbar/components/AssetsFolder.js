import { Searchbar } from "../../tools/Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import types from "../../../data/canvasTypes.json";
import { useData } from "../../../context/DataContext";
import { v4 as uuidv4 } from "uuid";

function ToolItem({ item }) {
    const { setDataCollection } = useData();
    const iconDef = Icons[item.icon]; // dynamically resolve icon

    if (!iconDef) {
        console.warn(`Icon "${item.icon}" not found in FontAwesome`);
        return null;
    }

    const determineColor = (type) => {
        switch (type) {
            case "media":
                return "bg-yellow-500";
            case "shapes":
                return "bg-blue-500";
            case "nodes":
                return "bg-green-500";
            default:
                return "bg-gray-500";
        }
    };

    const handleInclude = (newItem) => {
        const itemWithUniqueId = {
            ...newItem,
            id: uuidv4(), // generate a new UUID for this instance
        };
        setDataCollection((prev) => [...prev, itemWithUniqueId]);
    };

    return (
        <div
            className={`${determineColor(
                item.type
            )} flex flex-col items-center gap-1 p-2 rounded-xl bg-opacity-15 hover:bg-opacity-65 
            transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}
            onClick={() => handleInclude(item)}
        >
            <FontAwesomeIcon icon={iconDef} className="text-3xl" />
            <span>{item.name}</span>
        </div>
    );
}

export const AssetsFolder = () => {
    // Group items by type
    const groupedTypes = types.reduce((acc, item) => {
        if (!acc[item.type]) {
            acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
    }, {});

    return (
        <div className="w-full h-full p-2">
            <div className="text-xs w-full h-full space-y-8 select-none">
                <Searchbar />

                {Object.entries(groupedTypes).map(([type, items]) => (
                    <div key={type}>
                        <p className="mt-4 capitalize">{type}</p>
                        <hr />
                        <div className="grid grid-cols-3 gap-4 mt-2">
                            {items.map((item) => (
                                <ToolItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
