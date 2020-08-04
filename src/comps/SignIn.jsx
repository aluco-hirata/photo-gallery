import React from 'react'
import { signIn, signOut, checkAuth } from '../redux/auth/operations'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'





const SignIn = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)


    const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");
    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
    }, [setEmail])
    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [setPassword])

    const handleSubmit = (email, password) => {
        dispatch(signIn(email, password))
        setEmail("")
        setPassword("")
    }

    useEffect(() => {
        if(!auth.isSignedIn){
            dispatch(checkAuth())
        }
    }, [])




    return (
        <div className="signin">

        { !auth.isSignedIn ? 
            <>
            <div className="input-field">
                {/* <label htmlFor="email">Email</label> */}
                <input type="email" id="email" placeholder="email"
                onChange={inputEmail}
                />
            </div>

            <div className="input-field">
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" id="password" placeholder="password"
                onChange={inputPassword}
                />
            </div>

            <div className="input-field">
                <button className="btn-theme"
                    onClick={() => handleSubmit(email, password)}
                >Login</button>
            </div>
            </>
        : 
            <div className="input-field">
                <button className="btn-theme"
                    onClick={() => dispatch(signOut())}
                >Logout</button>
            </div>
        }


        </div>
    )
}

export default SignIn
