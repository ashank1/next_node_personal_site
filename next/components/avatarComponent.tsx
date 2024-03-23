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
    <Card isFooterBlurred radius="lg" className='relative border-none h-full w-full max-h-28 max-w-28'>
            <img src={userStatus.steam.avatar} 
                className={`absolute h-full w-full border-4 ${brStatusColor} bg-slate-100 rounded-3xl`} />
            <CardFooter className={`absolute 
                h-8 w-8 
                flex items-center justify-center 
                right-0 bottom-0 
                ${bgStatusColor}
                border-2 ${brStatusColor}
                rounded-full`
                } />
        </Card>
  )
}
