import { createContext } from "react";

export const WatchListContext = createContext();

const WatchListProvider = ({ children }) => {

    return (
        <WatchListContext.Provider value={{ data: 1 }}>
            {children}
        </WatchListContext.Provider>
    )
}

export default WatchListProvider;