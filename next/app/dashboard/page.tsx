'use client'
import React, { Suspense } from 'react'
import TabsComponent from './../../components/tabsComponent'
import EditTabsComponent from './../../components/editTabsComponent'
import AvatarComponent from '@/components/avatarComponent';
import { useState } from 'react';
import { Popover, PopoverTrigger, PopoverContent, Button } from '@nextui-org/react';

export default async function dashboard() {
    let data = [
        {
          tabId: 1,
          tabLabel: "Gaming",
          tabContent: 
          [{
            id: 1,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 2,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          ]
        },
        {
          tabId: 2,
          tabLabel: "Music",
          tabContent: 
          [{
            id: 1,
            image: "url",
            link: "link"
          },
          {
            id: 2,
            image: "url",
            link: "link"
          },
          ]
        },
        {
          tabId: 3,
          tabLabel: "Videos",
          tabContent: 
          [{
            id: 1,
            image: "url",
            link: "link"
          },
          {
            id: 2,
            image: "url",
            link: "link"
          },
          ]
        },
        {
            tabId: 4,
            tabLabel: "Stuffs",
            tabContent: 
            [{
              id: 1,
              image: "url",
              link: "link"
            },
            {
              id: 2,
              image: "url",
              link: "link"
            },
            ]
          }
      ];
      let userStatus = await getData();
      
      

  return (
    <div className="relative h-full w-full">
    <div className={`z-0 grid grid-cols-6 gap-1
        w-lvw h-lvh
        p-4`}>
        <div className='col-span-1
        flex justify-center 
        bg-black rounded-3xl pt-4'>
        <Suspense>
            <AvatarComponent userStatus={userStatus} />
        </Suspense>
        </div>
        <div className='col-span-5 
        bg-black rounded-3xl
        '>
        <Suspense>
            <TabsComponent data={data} />
        </Suspense>
        </div>
        
    </div>
    <div className='flex justify-center absolute right-4 bottom-28 z-1 h-12 w-[62px] bg-emerald-600 rounded-l-2xl p-1 shadow-neon-sm shadow-emerald-700'>
    <Popover placement="left-start">
        <PopoverTrigger>
            <Button><img src="https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png"/></Button>
        </PopoverTrigger>
        <PopoverContent>
            <div className="w-[660px] h-65">
                <iframe className="border-radius:12px" 
                src="https://open.spotify.com/embed/playlist/2iJebbThuEZlgBKZqndfTc?utm_source=generator" 
                width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"></iframe>
            </div>
        </PopoverContent>
    </Popover>
    </div>
    </div>
  )
}
//
export async function getData() {
    
    //const uId = "123"
    let res = await fetch('http://5.135.163.229:3002/userstatus/', {next: {revalidate: 60}})
    const data = await res.json()
    return data[0]
}
