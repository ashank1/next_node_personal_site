'use client'
import { Spinner, Card, Accordion, AccordionItem, Listbox, ListboxItem,  } from '@nextui-org/react'
import Link from 'next/link';
import React, { Suspense, useState } from 'react'

export default function hubNav({userStatus, steamLink, userNavLink}: {userStatus: any, steamLink: string, userNavLink: any}) {
  const [admin, setAdmin] = useState(true)
  
    let bgStatusColor  = "bg-slate-700"; let brStatusColor = "br-slate-700";
    if (userStatus[0].steam.status == "Currently Online") {
        bgStatusColor =  "bg-indigo-700"; brStatusColor = "border-indigo-700";
    } else if (userStatus[0].steam.status == "Currently In-Game") {
        bgStatusColor = "bg-lime-700"; brStatusColor = "border-lime-700";
    } else if (userStatus[0].steam.status == "Currently Offline") {
        bgStatusColor = "bg-slate-700"; brStatusColor = "border-slate-700";
    }
  return (
    <div className='w-full h-full flex flex-col items-center justify-evenly'>
        <div className='h-full w-full max-h-28 max-w-28 rounded-3xl'>
        <a target="_blank" href={steamLink} >
        <Card className='rounded-3xl h-full w-full'>
            <img src={userStatus[0].steam.avatar} 
                className={`absolute h-full w-full border-4 ${brStatusColor} rounded-3xl`} />
        </Card>
        </a>
        </div>
        {admin ? 
        <div id="app-nav" 
        className='rounded-lg 
        w-full 
        max-h-[20%] max-w-32 
        min-h-12 min-w-12 
        bg-cover overflow-y-auto border-2 border-bold'>
          <Listbox aria-label='List of links'>
            <ListboxItem key="" textValue='Link to page' aria-label='Link to page'>
              <Link href="/admin/users">User Management</Link>
            </ListboxItem>
            <ListboxItem key="" textValue='Link to page' aria-label='Link to page'>
              <Link href="/admin/page">Page Editor</Link>
              </ListboxItem>
            <ListboxItem key="" textValue='Link to page' aria-label='Link to page'>
              <Link href="/projects">Project List</Link>
              </ListboxItem>
          </Listbox>
        </div>: null
        }
        <div id="bookmarks" 
        className='rounded-2xl 
         w-full 
        max-h-[70%] max-w-32 
        min-h-12 min-w-12 
        bg-cover overflow-y-auto border-2 border-bold'>
          <Accordion isCompact selectionMode='single' variant="shadow" className=''>
            {userNavLink.map(function(ac: any){
              return (
                <AccordionItem textValue='List of links' aria-label='List of links'  key={ac.tabId} title={ac.tabLabel}>
                  <Listbox variant="faded" >
                  {ac.tabContent.map(function(cont: any){
                    return (
                        <ListboxItem textValue='Link to page' aria-label='Link to page' showDivider key={cont.id} className='border-2 border-acent hover:border-bold'>
                          <a href={cont.link}>{cont.label}</a>
                        </ListboxItem>
                    )
                  })}
                  </Listbox>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
    </div>
  )
}
