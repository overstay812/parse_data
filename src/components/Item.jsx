import React from "react";
import styles from "./Item.module.css";
import bookmark from "../assets/img/bookmark.svg";
import bookmarkRed from "../assets/img/bookmarkred.svg";

const Item = ({ snippet }) => {
  let data = snippet.publishTime;
  data = data.split("T");
  data = data[0];

  // console.log(snippet);
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <img
          src={snippet.thumbnails.high.url}
          alt="preview image"
          className={styles.previewImg}
        />
        <div className={styles.descriptWrapper}>
          <h5>{snippet.title}</h5>
          <p>{snippet.description}</p>
        </div>
      </div>
      
      <div className={styles.toolBar}>
        <button className={styles.bookmarkBtn}>
          <img src={bookmark} className={styles.bookmarkImg} alt="bookmark" />
        </button>
        <p className={styles.data}>{data}</p>
      </div>
    </div>
  );
};
export default Item;
