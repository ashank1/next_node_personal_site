'use server'
import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export default async function admin() {
    let session = cookies().get('session')
    let user = await getSessionInfo(session?.value)
    if (user.admin == false) {
        redirect('/')
    }
    return (
        <main className='w-full h-full flex flex-col 
        items-center justify-start pt-2'>
          <div className='flex flex-col 
          items-center justify-center gap-2
          w-11/12 h-11/12 overflow-y-auto'>
          <div className='bg-cover 
          border-2 border-bold p-4 rounded-3xl
          w-full h-full items-center
          flex flex-col'>
            <h2>User Statistics</h2>
            <div className='flex flex-row gap-4'>
              <div className='flex flex-col items-center p-4 border-2 border-bold rounded-3xl'>
                <h2>Active Session</h2>
                <h1>0</h1>
                <p>Based on active sessions</p>
              </div>
              <div className='flex flex-col items-center p-4 border-2 border-bold rounded-3xl'>
                <h2>Users Registered</h2>
                <h1>0</h1>
                <p>Based on total users count</p>
              </div>
            </div>
          </div>
          <div className='bg-cover 
          border-2 border-bold p-4 rounded-3xl
          w-full h-full'>
            <h2>Query Statistics</h2>
            <div className='flex flex-col items-center p-4 border-2 border-bold rounded-3xl'>
              <h2>Validation Queries</h2>
              <h1>0</h1>
              <p>Total of todays validations</p>
            </div>
            <div className='flex flex-col items-center p-4 border-2 border-bold rounded-3xl'>
               <h2>Active Users</h2>
               <h1>0</h1>
               <p>Based on active sessions</p>
            </div>
            <div className='flex flex-col items-center p-4 border-2 border-bold rounded-3xl'>
               <h2>Login queries</h2>
               <h1>0</h1>
               <p>Total of todays logins</p>
             </div>
             <div className='flex flex-col items-center p-4 border-2 border-bold rounded-3xl'>
               <h2>Logout queries</h2>
               <h1>0</h1>
               <p>Total of log outs</p>
            </div>
          </div>
          </div>
        </main>
    )
}

export async function getSessionInfo(session: any) {
    let res = await fetch(`http://localhost:3002/validate/${session}`)
    if (!res.ok){
      redirect('/login')
    }
    const data = await res.json()
    if (res.status == 404) {
      redirect('/login')
    } else {
      return data
    }
  }