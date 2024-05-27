'use server'
import React from 'react'
import HubContent from './hubContent'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import SpotifyComponent from '@/components/spotifyComponent';
import HubNav from './hubNav';


export default async function hub() {
  let session = cookies().get('session')
  let user = await getSessionInfo(session?.value)
  let tabData: EtabData = await getTabContent(user.uId);
  let userStatus: any = await getStatusData(user.uId);
  let userLink: any = await getUserLinks(user.uId)
  let userNavLink: any = await getNavContent(user.uId)
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
      <div id='hub-container'className={`z-0 flex flex-row gap-1 w-full h-full p-4`}>
        <div id='hub-left' className='h-full w-[10%] min-w-28
        bg-cover border-2 border-bold/75 rounded-3xl pt-4
        bg-opacity-10 backdrop-filter backdrop-blur-lg
        drop-shadow-2xl shadow-2xl
        '>
          <HubNav userStatus={userStatus} steamLink={steamLink} userNavLink={userNavLink} admin={user.admin}/>
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

// potentially add ', {next: {revalidate: 10}}' to all fetch requests
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
//
export async function getStatusData(userID: number) {
  let res = await fetch(`http://5.135.163.229:3002/userstatus/${userID}`)
  const data = await res.json()
  return data
}

export async function getTabContent(userID: number) {
  let res = await fetch(`http://5.135.163.229:3002/tabs/${userID}`)
  let data = await res.json()
  let tabdata = await Promise.all(data.map(async (item: any) =>{
    let itemID = item._id.toString().trim()
    let links = await fetch(`http://5.135.163.229:3002/linkMarks/${userID}&${itemID}`)
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
  let res = await fetch(`http://localhost:3002/bookTabs/${userID}`)
  let data = await res.json()
  let tabdata = await Promise.all(data.map(async (item: any) =>{
    let itemID = item._id.toString().trim()
    let links = await fetch(`http://localhost:3002/bookMarks/${userID}&${itemID}`)
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
  let res = await fetch(`http://localhost:3002/links/${userId}`)
  const data = await res.json()
  return data
}
