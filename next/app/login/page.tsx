'use client'
import React, { FormEvent, useContext, useEffect } from 'react'
import { sessionCookieCreate } from '../lib/cookieHandler'
import { Button, Input } from '@nextui-org/react'
export default function login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleSubmit = async() => {
        //Submit username and password
        const response = await fetch('http://localhost:3002/login/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({username: username, password: password})
        })
        // get session token
        const data = await response.json()
        //make it a cookie
        await sessionCookieCreate(data)
    }
  return (
    <div>
        login
        <form >
            <Input type="text" label="username" onChange={(e) => {setUsername(e.target.value)}}/>
            <Input type="password" label="password" onChange={(e) => {setPassword(e.target.value)}}/>
            <Button onClick={() => {handleSubmit()}}> Login </Button>
        </form>
    </div>
  )
}
