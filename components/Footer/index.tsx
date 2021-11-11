import React, { useEffect, useState } from 'react'
import { getComponentStack } from 'react-chrome-extension-router'
import { CogIcon, ChartBarIcon, SwitchHorizontalIcon, ViewGridIcon, ChatAltIcon } from '@heroicons/react/solid'
import Wallet from '../../pages/wallet'
import Swap from '../../pages/swap'
import Chat from '../../pages/chat'
import Extensions from '../../pages/extensions'
import Settings from '../../pages/settings'
import { Link } from 'react-chrome-extension-router'
// import RouterLink from '../RouterLink'

const Footer:React.FC = () => {
    const [currentComponentName,setCurrentComponentName] = useState('')
    const components = getComponentStack()
    
    useEffect(() => {
        console.log(components)
        if (components && components.length) {
            const lastComponent = components.slice(-1)[0]
            console.log(lastComponent.props.name)
            setCurrentComponentName(lastComponent.props.name)
        }
    },[components])

    // useEffect(() => {
    //     console.log(currentComponentName)
    // },[currentComponentName])

    return(
        <nav className='flex border border-black w-[500px] h-[75px] bottom-0 bg-[#353333]'> 
            <div className='flex flex-grow justify-around items-center'>
                {/* <Link component={Wallet} props={{ name: 'wallet' }}> 
                    <ChartBarIcon className='h-[40px] text-gray-500  hover:text-white'/>
                </Link> */}
                <Link component={Wallet} props={{ name: 'wallet' }}> 
                    <ChartBarIcon className={`h-[40px] ${ currentComponentName === 'wallet' ? 'text-white' : 'text-gray-500' }  hover:text-white`}/>
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
                {/* <RouterLink component={Wallet} iconName={'ChartBarIcon'} componentName={'wallet'} selectedComponent={currentComponentName}/>
                <RouterLink component={Swap} iconName={'SwitchHorizontalIcon'} componentName={'swap'} selectedComponent={currentComponentName}/>
                <RouterLink component={Extensions} iconName={'ViewGridIcon'} componentName={'extensions'} selectedComponent={currentComponentName}/>
                <RouterLink component={Chat} iconName={'ChatAltIcon'} componentName={'chat'} selectedComponent={currentComponentName}/>
                <RouterLink component={Settings} iconName={'CogIcon'} componentName={'settings'} selectedComponent={currentComponentName}/> */}
            </div>  
        </nav>
    )
}

export default Footer