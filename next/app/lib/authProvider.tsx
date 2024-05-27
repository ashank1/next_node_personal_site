'use client'
import React, { useContext, createContext, useState } from 'react'

/*let data = {
    userID: '',
    sessionToken: '',
    setUser: () => {},
    setSession: () => {}
}*/
const AuthContext = createContext(null)

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [userID, setUser] = useState("")
    const [sessionToken, setSession] = useState("")
    return (
    <AuthContext.Provider value={{userID, setUser, sessionToken, setSession,}}>
        {children}
    </AuthContext.Provider>)
  }

export const useAuthContext = () => useContext(AuthContext)