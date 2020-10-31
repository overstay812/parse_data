import React, { useState } from 'react'
import styles from './App.module.css'
import searchIcon from './assets/img/magnifying-glass.svg'
import youtubeApi from './api/youtube'
import { connect } from 'react-redux'
import { getArrayData } from './redux/action'
import { Link } from 'react-router-dom'
import PopupVideoScreen from './components/PopupVideoScreen'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import Loader from 'react-loader-spinner'

const MainContent = React.lazy(()=> import('./components/MainContent'))

function App({ getArrayData, arrayData, isVideoActive }) {
  const [inputValue, setInputValue] = useState('')
  const [activeLink, setActiveLink] = useState(true)

  let onSearch = async () => {
    let response = await youtubeApi.get("/search", {
      params: {
        q: inputValue
      }
    })
    await function () {
      return response.data.items.map(item => item.bookmark = false)
    }()
    getArrayData(response.data.items)
  }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Youtube parser</h1>
        <div className={styles.inputWrapper}>
          <img src={searchIcon} className={styles.imgSearch} alt="search icon" />
          <input type="text"
            placeholder="Найти"
            className={styles.input}
            value={inputValue}
            onChange={event => {
              setInputValue(event.target.value)
            }} />
          <button className={styles.searchBtn} onClick={() => {
            onSearch(inputValue)

          }}>Найти</button>
        </div>
        <div className={styles.navigation}>
          <Link to="/" className={activeLink ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
            onClick={() => setActiveLink(true)}
            name="top"
          >Результаты поиска</Link>
          <Link to="/bookmarks" className={activeLink ? styles.navLink : `${styles.navLink} ${styles.activeLink}`}
            onClick={() => setActiveLink(false)}>Закладки</Link>

        </div>
        <React.Suspense fallback={<p>zxc</p>}>
           <MainContent/>
        </React.Suspense>
        
    </div>
      {isVideoActive ? <PopupVideoScreen /> : null}
    </div>
  );
}

const mapStateToprops = state => {
  return {
    arrayData: state.dataReducer.arrayData,
    isVideoActive: state.dataReducer.isVideoActive
  }
}
const mapDispatchToProps = {
  getArrayData,
}
export default connect(mapStateToprops, mapDispatchToProps)(App);