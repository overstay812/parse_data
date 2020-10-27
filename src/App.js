import React, { useState } from 'react'
import styles from './App.module.css'
import searchIcon from './assets/img/magnifying-glass.svg'
import Item from './redux/components/Item'
import youtubeApi from './api/youtube'


function App() {
const [inputValue, setInputValue] = useState('home')
const [videosMetaInfo, setVideosMetaInfo] = useState([])
const [selectedVideoId, setSelectedVideoId] = useState(null)

  const onSearch = async keyword => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
  })
  setVideosMetaInfo(response.data.items)
  setSelectedVideoId(response.data.items[0].id.videoId)
}
// console.log(videosMetaInfo);


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
          <button className={styles.searchBtn} onClick={()=>onSearch(inputValue)}>Найти</button>
        </div>
        <div className={styles.navigation}>
          <a href="#" className={`${styles.navLink} ${styles.activeLink}`} >Результаты поиска</a>
          <a href="#" className={styles.navLink}>Закладки</a>
        </div>
        {videosMetaInfo && videosMetaInfo.map(item=> <Item {...item}/>)}
      </div>
    </div>
  );
}

export default App;