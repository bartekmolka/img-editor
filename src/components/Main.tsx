import React, { useEffect, useState } from 'react'
import * as styles from '../styles/main.module.scss'
import {saveAs} from 'file-saver';

import Edit from './Edit'
import { useFilterContext } from '../context/FilterContext'
import { CgShapeTriangle } from 'react-icons/cg'

type styling = {
  filter: string;
  transform: string;
}

const Main: React.FC = () => {
  let { file, setFile, setCurrent, filters, setFilters, amount, setAmount,
    rotateL, setRotateLeft, rotateR, setRotateRight,
    horizontalTurn, verticalTurn, setHorizontalTurn, setVerticalTurn } = useFilterContext();

  let imgStyling: styling = {
    filter: '',
    transform: `rotate(-${rotateL * 90}deg) rotate(${rotateR * 90}deg) scaleX(${horizontalTurn ? '-' : '+'}1) scaleY(${verticalTurn ? '-' : '+'}1)`,

  }

  const [image, setImage] = useState<any>();

  
  
  const handleFile = (e: any) => {
    console.log(e.target.files[0]);
    setFile(!file)
    
    const fileReader = new FileReader();

    
    fileReader.onload = () => {
      if(fileReader.readyState === 2) {
        setImage(fileReader.result);
      }
    }
    
    fileReader.readAsDataURL(e.target.files[0])
  }

  console.log(image);

  imgStyling.filter += Object.entries(filters).map(filter => {
    return `${filter[0]}(${filter[1]}%)`
  }).join(' ');


  const saver = () => {
    saveAs(image, 'image.png');
  }

  return (
    <div className={styles.main}>
      <header>
        <h2>
          Image editor you need! 📷😊
        </h2>
      </header>
      <aside>
        <Edit />
        <div className={styles.image} style={imgStyling}>
          { image ? (
            <img src={image} alt="image"/>
          ) : (
            <label htmlFor="file">
              <div className={styles.placeholder}>
            </div>
              </label>
          )

          }
        </div>
      </aside>
      <section className={styles.buttons}>
        <button onClick={() => {
          setFilters({
            brightness: 100,
            saturate: 100,
            invert: 0,
            grayscale: 0,
          });
          setCurrent('Brightness');
          setAmount(100);
          setRotateLeft(0);
          setRotateRight(0);
          setHorizontalTurn(false);
          setVerticalTurn(false);
        }}>
          Reset Filters
        </button>
        <label htmlFor="file">
          Choose Image
        </label>
        <input type="file" name="file" id="file" accept="image/*" onChange={handleFile}></input>
        <button onClick={saver}>
          Save Image
        </button>
      </section>
    </div>
  )
}

export default Main