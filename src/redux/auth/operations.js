
import { auth } from '../../firebase/config'
import { signInAction, signOutAction } from './actions'



export const signIn = (email, password) => {
    return async (dispatch) => {
        if (email === "" || password === "") {
            alert("必須項目が未入力です")
            return false
        }

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch(signInAction())
            })
            .catch((err) => {
                alert(err)
            })
    }
}


export const signOut = () => {
    return async (dispatch) => {
        auth.signOut()
            .then(() => {
                dispatch(signOutAction())
            })
            .catch((err) => {
                alert(err)
            })
    }
}


export const checkAuth = () => {
    return async dispatch => {
        return auth.onAuthStateChanged(user => {
            if(user){
                dispatch(signInAction())
            }else{
                return null
            }
        })
    }
}