import React from 'react'
import * as styles from '../styles/edit.module.scss'
import { FiRotateCcw,FiRotateCw } from "react-icons/fi";

const Edit: React.FC = () => {
    return (
        <div className={styles.edit}>
            <div>
                <h4>Filters</h4>
                <div>
                    <button>
                        Brightness
                    </button>
                    <button>
                        Saturation
                    </button>
                    <button>
                        Inversion
                    </button>
                    <button>
                        Grayscale
                    </button>
                </div>
            </div>
            <div>
                <h4>Brightness</h4>
                <div>
                    <input type="range" />
                </div>
            </div>
            <div>
                <h4>Rotate & Flip</h4>
                <div>
                    <button>
                        <FiRotateCcw />
                    </button>
                    <button>
                        <FiRotateCw />
                    </button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default Edit;