import { useContext, useState, createContext } from 'react';
import React from "react";

type FilterContext = {
    current: string;
    setCurrent: (newCurrent: string) => void;
    filters: any
    setFilters : (filters: any) => void
    amount: number;
    setAmount: (amount: number) => void;
    rotateL: number;
    rotateR: number;
    setRotateLeft: (rotate: number) => void
    setRotateRight: (rotate: number) => void
    horizontalTurn: boolean;
    setHorizontalTurn: (b: boolean) => void
    verticalTurn: boolean;
    setVerticalTurn: (b: boolean) => void
    file: boolean
    setFile: (b: boolean) => void
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
    const [amount, setAmount] = useState(100);
    const [rotateL, setRotateLeft] = useState(0);
    const [rotateR, setRotateRight] = useState(0);
    const [current, setCurrent] = useState('Brightness');
    const [filters, setFilters] = useState({
        brightness: 100,
        saturate: 100,
        invert: 0,
        grayscale: 0,
    });

    const [file , setFile] = useState(false)

    const [horizontalTurn, setHorizontalTurn] = useState(false);
    const [verticalTurn, setVerticalTurn ] = useState(false);

    return (
        <FilterContext.Provider value={{file, setFile,current, setCurrent, 
        filters,setFilters,amount,setAmount, rotateL, 
        setRotateLeft, rotateR, setRotateRight,
        horizontalTurn, setHorizontalTurn, verticalTurn, setVerticalTurn}}>
            {children}
        </FilterContext.Provider>
    )
}