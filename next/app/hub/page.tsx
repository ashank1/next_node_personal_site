
'use server'
import React, { Suspense, useEffect, useState } from 'react'
import HubContent from './hubContent'
import SpotifyComponent from '@/components/spotifyComponent';
import HubNav from './hubNav';

export default async function hub() {
  let userID = 123;
  let tabData: EtabData = await getTabContent(userID);
  let userStatus: any = await getStatusData(userID);
  let userLink: any = await getUserLinks(userID)
  let userNavLink: any = await getNavContent(userID)
  let spotifyLink = ""; let steamLink = "";
  userLink.forEach((link: any) => {
    if(link.site == "spotify") {
      spotifyLink = link.link
    }else if(link.site == "steam") {
      steamLink = link.link
    }
  })
  return (
    <div id='hub-page' className="relative h-[100vh] w-[100vw] bg-background">
      <div id='hub-container'className={`z-0 flex flex-row gap-1
        w-full h-full
        p-4`}>
        <div id='hub-left'
        className='h-full w-[10%] min-w-28
        bg-cover border-2 border-bold/75 rounded-3xl pt-4
        bg-opacity-10 backdrop-filter backdrop-blur-lg
        drop-shadow-2xl shadow-2xl
        '>
          <HubNav userStatus={userStatus} steamLink={steamLink} userNavLink={userNavLink}/>
        </div>
        <div id='hub-body' 
        className='h-full w-[90%]
        min-w-[555px] border-2 border-bold/75
        bg-cover rounded-3xl
        bg-opacity-10 backdrop-filter backdrop-blur-lg
        drop-shadow-2xl shadow-2xl
        '>
          <HubContent tabData={tabData} userLink={userLink} userNavLink={userNavLink}/>
        </div>
      </div>
      <SpotifyComponent spotifyLink={spotifyLink}/>
    </div>
  )
}
//

export async function getStatusData(userID: number) {
  let res = await fetch(`http://5.135.163.229:3002/userstatus/${userID}`, {next: {revalidate: 10}})
  const data = await res.json()
  return data
}
//
export async function getTabContent(userID: number) {
  let res = await fetch(`http://5.135.163.229:3002/tabs/${userID}`, {next: {revalidate: 10}})
  let data = await res.json()
  let tabdata = await Promise.all(data.map(async (item: any) =>{
    let itemID = item._id.toString().trim()
    let links = await fetch(`http://5.135.163.229:3002/linkMarks/${userID}&${itemID}`, {next: {revalidate: 10}})
    let linksData = await links.json()
    let linkContent = linksData.map((link: any) => {
      return {
        id: link._id,
        image: link.image,
        link: link.link
      }
    })
    return{
      uId: userID,
      tabId: item._id,
      tabIndex: item.tabIndex,
      tabLabel: item.tabLabel,
      tabContent: linkContent
    }
  }))
  return tabdata
}
export async function getNavContent(userID: number) {
  let res = await fetch(`http://localhost:3002/bookTabs/${userID}`, {next: {revalidate: 10}})
  let data = await res.json()
  let tabdata = await Promise.all(data.map(async (item: any) =>{
    let itemID = item._id.toString().trim()
    let links = await fetch(`http://localhost:3002/bookMarks/${userID}&${itemID}`, {next: {revalidate: 10}})
    let linksData = await links.json()
    let linkContent = linksData.map((link: any) => {
      return {
        id: link._id,
        label: link.label,
        link: link.link
      }
    })
    return{
      uId: userID,
      tabId: item._id,
      tabIndex: item.tabIndex,
      tabLabel: item.tabLabel,
      tabContent: linkContent
    }
  }))
  return tabdata
}

export async function getUserLinks(userId: number) {
  let res = await fetch(`http://localhost:3002/links/${userId}`, {next: {revalidate: 10}})
  const data = await res.json()
  return data
}
