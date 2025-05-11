import React, { createContext, useContext } from "react";

export const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [dataCollection, setDataCollection] = React.useState([]);
    const [selectedShapes, setSelectedShapes] = React.useState([]);

    return (
        <DataContext.Provider value={{ dataCollection, setDataCollection, selectedShapes, setSelectedShapes }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;