import React from 'react'
import { Card, CardFooter } from '@nextui-org/react'

export default function avatarComponent({userStatus}: {userStatus: any}) {
    let bgStatusColor  = "bg-slate-700"; let brStatusColor = "br-slate-700";
    if (userStatus.steam.status == "Currently Online") {
        bgStatusColor =  "bg-indigo-700"; brStatusColor = "border-indigo-700";
    } else if (userStatus.steam.status == "Currently In-Game") {
        bgStatusColor = "bg-lime-700"; brStatusColor = "border-lime-700";
    } else if (userStatus.steam.status == "Currently Offline") {
        bgStatusColor = "bg-slate-700"; brStatusColor = "border-slate-700";
    }
    
  return (
  <a target="_blank" href="https://www.steamcommunity.com" >
    <Card className='rounded-3xl h-full w-full'>
            <img src={userStatus.steam.avatar} 
                className={`absolute h-full w-full border-4 ${brStatusColor} rounded-3xl`} />
        </Card>
        </a>
  )
}
