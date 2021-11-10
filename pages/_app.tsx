import '../styles/globals.css'
import { ReactElement } from 'react'
import { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

const App = ({ Component, pageProps }: AppProps):ReactElement => {
    return(
        <div>
            <Header/>    
            <Component {...pageProps} />
            <Footer/>
        </div>
    ) 
}

export default App