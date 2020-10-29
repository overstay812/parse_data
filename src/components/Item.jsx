import React, { useEffect } from "react";
import styles from "./Item.module.css";
import bookmarkImg from "../assets/img/bookmark.svg";
import bookmarkRedImg from "../assets/img/bookmarkred.svg";
import { connect } from "react-redux";
import { addbookmark, getCurrentVideoId, setVideoActive } from "../redux/action";

const Item = ({ snippet,id, bookmark, index, addbookmark, setVideoActive, getCurrentVideoId }) => {
  let videoId = id.videoId


  let data = snippet.publishTime;
  data = data.split("T");
  data = data[0];

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <img
          src={snippet.thumbnails.high.url}
          alt="preview image"
          className={styles.previewImg}
          onClick={()=> {
          getCurrentVideoId(videoId)
            setVideoActive()
          }}
        />
        <div className={styles.descriptWrapper}>
          <h5 onClick={()=> {
            setVideoActive(videoId)
            getCurrentVideoId()
            }}>{snippet.title}</h5>
          <p>{snippet.description}</p>
        </div>
      </div>

      <div className={styles.toolBar}>
        <button
          className={styles.bookmarkBtn}
          onClick={() => addbookmark(index)}
        >
          <img src={bookmark? bookmarkRedImg: bookmarkImg} className={styles.bookmarkImg} alt="bookmark" />
        </button>
        <p className={styles.data}>{data}</p>
      </div>
    </div>
  );
};
const MapDispatchToProps = {
  addbookmark,
  setVideoActive,
  getCurrentVideoId
};
export default connect(null, MapDispatchToProps)(Item);
