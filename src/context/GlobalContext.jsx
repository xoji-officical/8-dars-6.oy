
import { createContext, useReducer } from "react"

export const GlobalContext = createContext();

const changeState = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'LOG_IN':
            return {...state, user: payload};
        case 'LOG_OUT':
            return {...state, user: null};
        case 'IS_AUTH_READY':
            return {...state, isAuthReady: true};
        default:
            return state ;
    }
    
}

function GlobalContextProviderr( {children} ) {
    const [state, dispatch] = useReducer(changeState, {
        user: null,
        isAuthReady: false,
        products: [],
        totalProducts: 0,
        totalPrice: 0,
    })


    return <GlobalContext.Provider value={{...state, dispatch}}>{children}</GlobalContext.Provider>
}

export default GlobalContextProviderr