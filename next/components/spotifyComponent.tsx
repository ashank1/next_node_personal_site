import React from 'react'
import { Popover, PopoverTrigger, PopoverContent, Button, Spinner } from '@nextui-org/react';

export default function spotifyComponent() {
  return (
    <div className='
    flex justify-center 
    fixed right-0 bottom-28 z-1 
    h-12 w-[62px] 
    bg-emerald-600 rounded-l-2xl p-1 
    shadow-neon-sm shadow-emerald-700'>
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
  )
}
