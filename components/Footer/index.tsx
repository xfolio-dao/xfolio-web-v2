import React, { useEffect } from 'react'
import { Link, getComponentStack } from 'react-chrome-extension-router'
import { CogIcon, ChartBarIcon, SwitchHorizontalIcon, ViewGridIcon, ChatAltIcon } from '@heroicons/react/solid'
import Wallet from '../../pages/wallet'
import Swap from '../../pages/swap'
import Chat from '../../pages/chat'
import Extensions from '../../pages/extensions'
import Settings from '../../pages/settings'

const Footer:React.FC = () => {
    const components = getComponentStack()

    useEffect(() => {
        console.log(components)
    },[components])

    return(
        <nav className='flex border border-black w-[500px] h-[75px] bottom-0 bg-[#353333]'> 
            <div className='flex flex-grow justify-around items-center'>
                <Link component={Wallet} props={{ name: 'wallet' }}> 
                    <ChartBarIcon className='h-[40px] text-gray-500 hover:text-white'/>
                </Link>
                <Link component={Swap} props={{ name: 'swap' }}>
                    <SwitchHorizontalIcon className='h-[40px] text-gray-500 hover:text-white'/>
                </Link>
                <Link component={Extensions} props={{ name: 'extensions' }}>
                    <ViewGridIcon className='h-[40px] text-gray-500 hover:text-white'/>
                </Link>
                <Link component={Chat} props={{ name: 'chat' }}>
                    <ChatAltIcon className='h-[40px] text-gray-500 hover:text-white'/>
                </Link>
                <Link component={Settings} props={{ name: 'settings' }}>
                    <CogIcon  className='h-[40px] text-gray-500 hover:text-white'/>
                </Link>
            </div>  
        </nav>
    )
}

export default Footer