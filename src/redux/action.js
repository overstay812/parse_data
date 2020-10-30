
export const getArrayData = arrayData => {
    return {
        type: 'GET_ARRAY_DATA',
        payload: {
          arrayData
        }
    }
}   

export const addbookmark = index => {
  return {
      type: 'ADD_BOOKMARK',
      payload: {
        index
      }
  }
} 


export const setVideoActive = () => {
  return {
      type: 'IS_VIDEO_ACTIVE',
  }
} 

export const getCurrentVideoId = currentVideoId => {
  return {
      type: 'GET_CURRENT_VIDEO_ID',
      payload: {
        currentVideoId
      }
  }
} 