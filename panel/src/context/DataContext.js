import React, { createContext, useContext, useRef } from "react";

export const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [dataCollection, setDataCollection] = React.useState([]);
    const [selectedShapes, setSelectedShapes] = React.useState([]);
    const isExternalSelectionChange = useRef(false);

    return (
        <DataContext.Provider
            value={{
                dataCollection,
                setDataCollection,
                selectedShapes,
                setSelectedShapes,
                isExternalSelectionChange
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
