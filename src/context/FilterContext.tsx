import { useContext, useState, createContext } from 'react';
import React from "react";

type FilterContext = {
    filter: string;
}

const FilterContext = createContext({} as FilterContext);


export const useFilterContext = () => {
  return (
    useContext(FilterContext)
  )
}

type FilterProviderProps = {
    children: React.ReactNode;
}

export default function FilterContextProvider({ children }: FilterProviderProps) {
    const [filterState, setFilterState] = useState('Brightness');

    return (
        <FilterContext.Provider value={{filterState,setFilterState}}>
            {children}
        </FilterContext.Provider>
    )
}