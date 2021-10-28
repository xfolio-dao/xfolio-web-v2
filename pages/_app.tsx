import '../styles/globals.css'
import { ReactElement } from 'react'
import { AppProps } from 'next/app'
import Link from 'next/link'
import Header from '../components/Header'

const App = ({ Component, pageProps }: AppProps):ReactElement =>{
    return(
        <div>
            <Header/>    
            <Component {...pageProps} />
            <nav className='border-b p-6 bottom-0'> 
                <div className='flex mt-4'>
                    <Link href='/'>
                        <a className='mr-4 text-black'>
                            Wallet
                        </a>
                    </Link>
                    <Link href='/swap'>
                        <a className='mr-4 text-black'>
                            Swap
                        </a>
                    </Link>
                </div>  
            </nav>
        </div>
    ) 
}

export default App