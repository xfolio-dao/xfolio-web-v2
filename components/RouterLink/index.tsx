import { NextPage } from 'next'
import React from 'react'
import { Link } from 'react-chrome-extension-router'
import { CogIcon, ChartBarIcon, SwitchHorizontalIcon, ViewGridIcon, ChatAltIcon } from '@heroicons/react/solid'

//const TokenDropdown:React.FC<{token:TokenListEntry,setToken: Dispatch<SetStateAction<TokenListEntry>>}> = ({ token,setToken }) => {

const RouterLink:React.FC<{component:NextPage,iconName:string,componentName:string,selectedComponent:string}> = ({ component,iconName,componentName,selectedComponent }) => {
    
    return(
        <Link component={component} props={{ componentName }} className={`h-[40px] ${ selectedComponent === componentName ? 'text-white' : 'text-gray-500' } hover:text-white`}>
            {
                (iconName === 'CogIcon') ? <CogIcon/>
                    : (iconName === 'ChartBarIcon') ? <ChartBarIcon/>
                        : (iconName === 'SwitchHorizontalIcon') ? <SwitchHorizontalIcon/>
                            : (iconName === 'ViewGridIcon') ? <ViewGridIcon/>
                                : (iconName === 'ChatAltIcon') ? <ChatAltIcon/>
                                    : <CogIcon/>
            }
        </Link>
    )
}

export default RouterLink