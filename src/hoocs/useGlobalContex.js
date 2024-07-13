import { useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'


export const useGlobalContex = () => {
    const contex = useContext(GlobalContext)
    if (!contex) {
        throw new error(
            "useGlobalContex() faqat GlobalContexProvider() ichida ishlat"
        )
    }

    return contex
}