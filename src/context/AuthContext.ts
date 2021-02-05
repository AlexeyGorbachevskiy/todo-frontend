import {createContext} from 'react'

type loginType = (x: string, y: number) => void;
function noop() {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: noop as loginType,
    logout: noop,
    isAuthenticated: false
})
