import AvatarComponent from '@/components/avatarComponent'
import ThemePicker from '@/components/themePicker'
import { Spinner } from '@nextui-org/react'
import React, { Suspense } from 'react'

export default function hubNav({data}: {data: EUserStatus}) {
  return (
    <div className='w-full h-full flex flex-col items-center justify-around'>
        <Suspense fallback={<Spinner size='lg' labelColor="warning" label="Loading..." color="warning" />}>
            <AvatarComponent userStatus={data} />
        </Suspense>
        <div id="app-nav" className='relative border-none rounded-lg h-full w-full max-h-[15%] max-w-28 min-h-12 min-w-12 bg-bold drop-shadow-sm shadow-sm'></div>
        <div id="bookmarks" className='relative border-none rounded-lg h-full w-full max-h-[50%] max-w-28 min-h-12 min-w-12 bg-bold drop-shadow-sm shadow-sm'></div>
        <ThemePicker/>
    </div>
  )
}
