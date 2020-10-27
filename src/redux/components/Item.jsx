import React from 'react'
import styles from './Item.module.css'


const Item = () => {
  
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}></div>
            <div className={styles.toolBar}></div>
        </div>
    )
}
export default Item