const initalState = {

}
export const dataReducer = (state = initalState, action) => {
    switch (action.type) {
        case '':
            return {
                ...state
            }
        default: return state
    }
}