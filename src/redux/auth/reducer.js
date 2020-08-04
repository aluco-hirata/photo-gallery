import { SIGN_IN, SIGN_OUT } from "./actions"

const initialState = {
    isSignedIn: false,
}


export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_IN:
            return {
                ...state,
                ...action.payload
            }
        
        case SIGN_OUT:
            return {
                ...action.payload
            }

        default:
            return state
    }
}

