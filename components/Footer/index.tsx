import React from 'react'
import Link from 'next/link'
import { CogIcon, ChartBarIcon, SwitchHorizontalIcon, ViewGridIcon, ChatAltIcon } from '@heroicons/react/solid'

const Footer:React.FC = () => {
    return(
        <nav className='flex border border-black w-[500px] h-[75px] bottom-0 bg-[#353333]'> 
            <div className='flex flex-grow justify-around items-center'>
                <Link href='/wallet'>
                    <a>
                        <ChartBarIcon className='h-[40px] text-gray-500 hover:text-white'/>
                    </a>
                </Link>
                <Link href='/swap'>
                    <a>
                        <SwitchHorizontalIcon className='h-[40px] text-gray-500 hover:text-white'/>
                    </a>
                </Link>
                <Link href='/extensions'>
                    <a>
                        <ViewGridIcon className='h-[40px] text-gray-500 hover:text-white'/>
                    </a>
                </Link>
                <Link href='/p2p'>
                    <a>
                        <ChatAltIcon className='h-[40px] text-gray-500 hover:text-white'/>
                    </a>
                </Link>
                <Link href='/settings'>
                    <a>
                        <CogIcon  className='h-[40px] text-gray-500 hover:text-white'/>
                    </a>
                </Link>
            </div>  
        </nav>
    )
}

export default Footer