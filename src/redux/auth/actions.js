export const SIGN_IN = "SIGN_IN"
export const SIGN_OUT = "SIGN_OUT"

export const signInAction = () => {
    return {
        type: SIGN_IN,
        payload: {
            isSignedIn: true
        }
    }
}

export const signOutAction = () => {
    return {
        type: SIGN_OUT,
        payload: {
            isSignedIn: false
        }
    }
}
