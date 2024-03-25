import React, { Suspense } from 'react'
import DashboardContent from './dashContent'
import AvatarComponent from '@/components/avatarComponent';
import TabsComponent from '../../components/tabsComponent'
import { Popover, PopoverTrigger, PopoverContent, Button } from '@nextui-org/react';
import SpotifyComponent from '@/components/spotifyComponent';

export default async function dashboard() {
    
    let tabData: EtabData =  [
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
          {
            id: 3,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 4,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 5,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 6,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 7,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 8,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 9,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 10,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 11,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 12,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 13,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 14,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 15,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 16,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 17,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          },
          {
            id: 18,
            image: "https://yt3.googleusercontent.com/ytc/AIdro_nu36wcGaG05pWAgqZtGdOMAXEZqupZnz__M0v0=s176-c-k-c0x00ffffff-no-rj",
            link: "https://www.youtube.com/@ThePrimeTimeagen/videos"
          }
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
    <div id='dashboard-page' className="relative h-dvh w-dvw max-[1218px]:pr-6">
      <div id='dashboard-container'className={`z-0 grid grid-cols-6 gap-1
        w-full h-full
        p-4`}>
        <div id='dashboard-left'
        className='col-span-1
        flex justify-center 
        bg-black rounded-3xl pt-4'>
        <Suspense>
            <AvatarComponent userStatus={userStatus} />
        </Suspense>
        </div>
        <div id='dashboard-body' 
        className='col-span-5
        bg-black rounded-3xl
        h-full w-full
        '>
          <DashboardContent data={tabData}/>
        </div>
        
      </div>
      <SpotifyComponent />
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
