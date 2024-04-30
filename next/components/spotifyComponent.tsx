import React from 'react'
import { Popover, PopoverTrigger, PopoverContent, Button, Spinner } from '@nextui-org/react';

export default function spotifyComponent({spotifyLink}: {spotifyLink: any}) {
  let embed = (<iframe className="rounded-3xl" 
  src={spotifyLink} 
  width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
  loading="lazy"></iframe>)
  return (
    <div className='
    flex justify-center 
    fixed right-0 bottom-28 z-1 
    h-12 w-[62px] 
    rounded-l-2xl p-1 
    '>
    <Popover placement="left-start" classNames={{trigger:'bg-emerald-600 ', content: 'bg-emerald-600'}}>
        <PopoverTrigger>
            <Button><img src="https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png"/></Button>
        </PopoverTrigger>
        <PopoverContent>
        <div className="w-[660px] h-65">
                {embed}
            </div>
        </PopoverContent>
    </Popover>
    </div>
  )
}
