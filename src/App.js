import React, { useState } from 'react'
import styles from './App.module.css'
import searchIcon from './assets/img/magnifying-glass.svg'
import youtubeApi from './api/youtube'
import Item from './components/Item'
// import Axios from 'axios'


function App() {
  const [inputValue, setInputValue] = useState('home')
  const [videosMetaInfo, setVideosMetaInfo] = useState([])
  const [selectedVideoId, setSelectedVideoId] = useState(null)

  let onSearch = async keyword => {
    let response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    }
    )
    await function () {
     return response.data.items.map(item => item.bookmark = false)
    }()

    console.log(response.data.items);
    setVideosMetaInfo(response.data.items)
    setSelectedVideoId(response.data.items[0].id.videoId)
  }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
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
          <a href="#" className={`${styles.navLink} ${styles.activeLink}`} >Результаты поиска</a>
          <a href="#" className={styles.navLink}>Закладки</a>
        </div>

        {videosMetaInfo && videosMetaInfo.map(item => <Item {...item} />)}
      </div>
    </div>
  );
}

export default App;