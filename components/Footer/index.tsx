import React from 'react'
import Link from 'next/link'

// const FooterLink:React.FC = () => {
//     return(
//         <div>

//         </div>
//     )
// }

const Footer:React.FC = () => {
    return(
        <nav className='flex border border-black w-[500px] h-[75px] bottom-0 bg-[#353333]'> 
            <div className='flex flex-grow justify-around items-center'>
                {/* <Link href='/'>
                    <a className='text-white'>
                    Wallet
                    </a>
                </Link> */}
                <Link href='/'>
                    <a className='text-white'>
                        <i className='ci-bar_chart'></i>
                    </a>
                </Link>
                <Link href='/swap'>
                    <a className='text-white'>
                        <i className='ci-refresh_02'></i>
                    </a>
                </Link>
                <Link href='/apps'>
                    <a className='text-white'>
                        <i className='ci-grid_big'></i>
                    </a>
                </Link>
                <Link href='/p2p'>
                    <a className='text-white'>
                        <i className='ci-chat'></i>
                    </a>
                </Link>
                <Link href='/settings'>
                    <a className='text-white'>
                        <i className='ci-settings'></i>
                    </a>
                </Link>
            </div>  
        </nav>
    )
}

export default Footer