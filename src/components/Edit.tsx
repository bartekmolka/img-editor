import React, { useEffect, useState } from 'react'
import * as styles from '../styles/edit.module.scss'
import { FiRotateCcw, FiRotateCw } from "react-icons/fi";
import { CgEditFlipH, CgEditFlipV } from "react-icons/cg";
import { useFilterContext } from '../context/FilterContext';


const Edit: React.FC = () => {
    const { current, setCurrent, filters, amount,
        setAmount, rotateR, setRotateRight,rotateL, setRotateLeft, setVerticalTurn, setHorizontalTurn, horizontalTurn, verticalTurn } = useFilterContext();

    const handleFilterChange = (newFilter: string) => {
        setCurrent(newFilter.toLowerCase());
    }

    const handleAmountChange = (e: any) => {
        filters[current] = amount;
        setAmount(parseInt(e.target.value));
    }


    const rotateRight = () => {
        setRotateRight(rotateR + 1);
    }

    const rotateLeft = () => {
        setRotateLeft(rotateL + 1);
    }

    useEffect(() => {
        if (rotateR == 4) {
            setRotateRight(0);
        }

        if (rotateL == 4) {
            setRotateLeft(0);
        }
    }, [rotateL, rotateR])

    const buttons = ['Brightness', 'Saturate', 'Invert', 'Grayscale'];

    return (
        <div className={styles.edit}>
            <div className={styles.filters}>
                <h4>Filters</h4>
                <div>
                    {buttons.map((button, index) => {
                        return (
                            <button key={index} onClick={() => handleFilterChange(button)}>{button}</button>
                        )
                    })}
                </div>
            </div>
            <div>
                <div className={styles.details}>
                    <h4><label id="range">{current.slice(0, 1).toUpperCase() + current.substring(1)}</label></h4>
                    <h4><label id="range">{amount}%</label></h4>
                </div>

                <div>
                    <input type="range" id="range" value={amount} onChange={(e) => handleAmountChange(e)} />
                </div>
            </div>
            <div>
                <h4>Rotate & Flip</h4>
                <div className={styles.buttons}>
                    <button onClick={rotateLeft}>
                        <FiRotateCcw />
                    </button>
                    <button onClick={rotateRight}>
                        <FiRotateCw />
                    </button>
                    <button onClick={() => setHorizontalTurn(!horizontalTurn)}>
                        <CgEditFlipH />
                    </button>
                    <button onClick={() => setVerticalTurn(!verticalTurn)}>
                        <CgEditFlipV />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Edit;