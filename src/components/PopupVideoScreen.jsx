import React from "react";
import { connect } from "react-redux";
import { setVideoActive } from "../redux/action";
import styles from "./PopupVideoScreen.module.css";

const PopupVideoScreen = ({ setVideoActive, videoId }) => {
  return (
    <div className={styles.container} onClick={() => setVideoActive()}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        className={styles.iframe}
        frameborder="0"
        allowfullscreen="allowfullscreen"
      ></iframe>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    videoId: state.dataReducer.currentVideoId
  }
}
const mapDispatchToProps = {
  setVideoActive,
};
export default connect(mapStateToProps, mapDispatchToProps)(PopupVideoScreen);
