import styles from './styles/app.module.scss'

import Main from './components/Main'
import FilterContextProvider from './context/FilterContext'

const App: React.FC = () => {
  return (
    <div className={styles.apka}>
      <FilterContextProvider>
        <Main />
      </FilterContextProvider>
    </div>
  )
}

export default App
