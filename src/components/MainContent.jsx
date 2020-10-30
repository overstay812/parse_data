import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Item from './Item'
import styles from './MainContent.module.css'


const MainContent = ({arrayData}) => {
  
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

return (
    
    <div>
         <Route exact path="/">
          <div className={styles.itemsWrapper}>
            {arrayData && arrayData.map((item, index) => <Item {...item} index={index}  key={index}/>)}
            {arrayData.length > 0 ? <a className={styles.moreBtn}  onClick={() => scrollTop()}>В начало</a> : null}
          </div>
        </Route>
        <Route exact path="/bookmarks">
          {arrayData && arrayData.map((item, index) => {
            if (item.bookmark === true) {
              return <Item {...item} index={index} key={index} />
            } else {
              return null
            }
          })}
        </Route>
    </div>
)    
}

const mapStateToprops = state => {
    return {
      arrayData: state.dataReducer.arrayData,
    }
  }

export default connect(mapStateToprops)(MainContent)