import { NextPage } from 'next'
// import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { Router } from 'react-chrome-extension-router'
import Login from './authorization'
import Swap from './swap'
import Wallet from './wallet'

const Main: NextPage = () => {
    return (
        <Router>
            <Login/>
            <Wallet/>
            <Swap/>
        </Router>
    )
}

export default Main