import { useEffect } from 'react'
import { NextPage } from 'next'
import { Router, goTo } from 'react-chrome-extension-router'
import Login from './login'
import Swap from './swap'
import Wallet from './wallet'

const Main: NextPage = () => {
    useEffect(() => {
        goTo(Login,{ name: 'login' })
    },[])

    return (
        <Router>
            <Login/>
            <Wallet/>
            <Swap/>
        </Router>
    )
}

export default Main