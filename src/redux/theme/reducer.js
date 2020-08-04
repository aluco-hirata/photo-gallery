import { CHANGE_THEME } from './actions'

const initialState = true

export const themeReducer = (state = initialState, action) => {

    switch(action.type){
        case CHANGE_THEME:
            return !state

        default:
            return state
    }
}
