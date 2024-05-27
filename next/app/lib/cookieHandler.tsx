'use server'
import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { delay } from 'lodash'

export const sessionCookieCreate = async (cookieData: any) => {
    var date = new Date();
    // Add five days to current date
    date.setDate(date.getDate() + 10);
    cookies().set({
        name: 'session',
        value: cookieData,
        path: '/',
        sameSite: true,
        expires: date
    })
    //cannot redirect from client side login page
    delay(redirect('/hub'), 1000)
}

export const seesionCoolieUpdate = async (cookieData: any) => {

}

export const sessionCookieDelete = async () => {
    let cookieData = cookies().get('session')
    fetch('http://localhost:3002/logout/', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({sessionID: cookieData?.value})
    })
    cookies().delete('session')
    //cannot redirect from client side settings page
    
}
