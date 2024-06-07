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
    <div className='h-screen w-screen flex flex-auto items-center justify-center'>
        <div className='h-full w-full 
        max-w-[70%] max-h-[70%] 
        flex flex-col 
        items-center justify-center
        bg-cover rounded-3xl border-2 border-acent'>
          <div className='h-full w-full 
          max-w-[75%] max-h-[75%] p-4 
          flex flex-col gap-4 overflow-x-auto
          rounded-3xl border-2 border-acent'>
            <h1>login</h1>
            <Input type="text" label="username" onChange={(e) => {setUsername(e.target.value)}}/>
            <Input type="password" label="password" onChange={(e) => {setPassword(e.target.value)}}/>
            <Button onClick={() => {handleSubmit()}}> Login </Button>
            <div className='flex justify-center items-center'>
              <p>Registration is made upon reqest of service host, new password has to be requested or will be provided when needed</p>
            </div>
          </div>
        </div>
    </div>
  )
}

/*
<div className='flex flex-auto items-center justify-center'>
        
        <div className=' flex flex-col content-center gap-4'>
            
        </div>
      </div>


*/