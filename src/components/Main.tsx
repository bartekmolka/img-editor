import React from 'react'
import * as styles from '../styles/main.module.scss'
import image from '../assets/w.jpg'

import Edit from './Edit'

const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <header>
        <h2>
          Image editor you need! 📷😊
        </h2>
      </header>
      <aside>
        <Edit />
        <div className={styles.image}>
          <img src={image} alt="Image" />
        </div>
      </aside>
      <section className={styles.buttons}>
        <button>
          Reset Filters
        </button>
        <button>
          Choose Image
        </button>
        <button>
          Save Image
        </button>
      </section>
    </div>
  )
}

export default Main