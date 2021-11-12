import { useEffect, useState } from 'react'
import { getCurrent } from 'react-chrome-extension-router'


export const useCurrentComponentName = ():string => {
    const [currentComponentName,setCurrentComponentName] = useState('')
    
    useEffect(() => {
        const { component, props } = getCurrent()
        if (component) {
            setCurrentComponentName(props.name)
        }
    },[])

    return currentComponentName
}