const initalState = {
    arrayData: [],
    arrayDataBookmark: [],
    isVideoActive: false,
    currentVideoId: '',
}
export const dataReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'GET_ARRAY_DATA':
            return {
                ...state, arrayData: action.payload.arrayData
            }
        case 'GET_ARRAY_DATA_MORE':
            return {
                ...state, arrayData: state.arrayData.concat(action.payload.arrayData)
            }

        case 'ADD_BOOKMARK':
            let currentIndex = action.payload.index
            return {
                ...state, arrayData: state.arrayData.map((item, index) => {
                    if (index === currentIndex) {
                        return { ...item, bookmark: !item.bookmark }
                    } else {
                        return item
                    }
                })
            }
        case 'IS_VIDEO_ACTIVE':
            return {
                ...state, isVideoActive: !state.isVideoActive
            }
        case 'GET_CURRENT_VIDEO_ID':
            return {
                ...state, currentVideoId: action.payload.currentVideoId
            }
        default: return state
    }
}