import React, { useState } from 'react'
import styles from './App.module.css'
import searchIcon from './assets/img/magnifying-glass.svg'
import youtubeApi from './api/youtube'
import Item from './components/Item'
import { connect } from 'react-redux'
import { getArrayData, getArrayDataMore } from './redux/action'
import { Link, Route } from 'react-router-dom'
import PopupVideoScreen from './components/PopupVideoScreen'

function App({ getArrayData, getArrayDataMore, arrayData, isVideoActive }) {
  const [inputValue, setInputValue] = useState('')
  const [activeLink, setActiveLink] = useState(true)

  let onSearch = async keyword => {
    let response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    })
    await function () {
      return response.data.items.map(item => item.bookmark = false)
    }()
    getArrayData(response.data.items)
  }

  let downloadMoreVideo = async keyword => {
    let response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    })
    await function () {
      return response.data.items.map(item => item.bookmark = false)
    }()
    getArrayDataMore(response.data.items)
  }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Youtube parser</h1>
        <div className={styles.inputWrapper}>
          <img src={searchIcon} className={styles.imgSearch} />
          <input type="text"
            placeholder="Найти"
            className={styles.input}
            value={inputValue}
            onChange={event => {
              setInputValue(event.target.value)
            }} />
          <button className={styles.searchBtn} onClick={() => onSearch(inputValue)}>Найти</button>
        </div>
        <div className={styles.navigation}>
          <Link to="/" className={activeLink ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
            onClick={() => setActiveLink(true)}
          >Результаты поиска</Link>
          <Link to="/bookmarks" className={activeLink ? styles.navLink : `${styles.navLink} ${styles.activeLink}`}
            onClick={() => setActiveLink(false)}>Закладки</Link>
        </div>
        <Route exact path="/">
          <div>
            {arrayData && arrayData.map((item, index) => <Item {...item} index={index} />)}
            {arrayData.length > 0 ? <button className={styles.moreBtn} onClick={() => downloadMoreVideo()}>Загрузить еще...</button> : null}
          </div>
        </Route>
        <Route exact path="/bookmarks">
          {arrayData && arrayData.map((item, index) => {
            if (item.bookmark === true) {
              return <Item {...item} index={index} />
            } else {
              return null
            }
          })}
        </Route>


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
  getArrayDataMore
}
export default connect(mapStateToprops, mapDispatchToProps)(App);