'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { AiFillSetting } from "react-icons/ai";
import { Spinner, Tabs, Tab, Button} from "@nextui-org/react";

import LinkTabsComponent from './components/linkTabsComponent'
import EditLinkTabsComponent from './components/editLinkTabsComponent'
import HubSettings from './components/settings';

export default function content({tabData, userLink, userNavLink}: {tabData: EtabData, userLink: any, userNavLink: any}) {
  const router = useRouter();
  const [editTabs, setEditTabs] = React.useState(false)
  const changeTabState = () => {
    setEditTabs(!editTabs)
    router.refresh()
  }
  return (
    <div className='flex flex-col w-full h-full z-3 overflow-hidden'>
    <Tabs fullWidth variant='light'
    className=''
      classNames={{
        tab: "w-full bg-cover border-2 border-bold rounded-2xl text-center",
        base: "w-full",
        panel: "w-full h-full p-1 mb-1 min-h-96",
        tabList: "bg-cover text-text rounded-2xl",
      }}>
      <Tab key="YTDeck" title="LinkDeck" className='py-0 flex flex-wrap flex-col overflow-hidden'>
      <div id="tabs-content" 
      className='relative border-2 border-bold 
      rounded-2xl flex flex-grow flex-wrap 
      w-full h-full z-3 
      justify-around align-middle'>
      <button className='mt-1 ml-2 z-10 bg-bold items-end rounded-lg h-6 w-6' onClick={changeTabState}><AiFillSetting className='h-6 w-6'/></button>
          <Suspense fallback={<Spinner className="z-10"label="Loading..." color="warning" />}>
            {editTabs ? <EditLinkTabsComponent data={tabData}/>: <LinkTabsComponent data={tabData}/>}
          </Suspense> 
      </div>
      </Tab>
      <Tab key="settings" title="Settings" className='py-0 flex flex-wrap flex-col overflow-hidden' >
        <div id="tabs-settings" 
        className='relative border-2 border-bold 
        rounded-2xl flex flex-grow flex-wrap 
        w-full h-full z-3 
        justify-around align-middle'>
          <HubSettings userLink={userLink} userNavLink={userNavLink}/>
        </div>
      </Tab>
    </Tabs>
    
    </div>
  )
}

/*
preserved code snippet for a cut feature
<Tab key="notepad" title="Notepad" className='py-0 flex flex-wrap' isDisabled>
        <div id="notepad-content" 
        className='relative border-2 border-bold 
        rounded-2xl flex flex-grow 
        w-full h-full flex-row z-3 
        gap-4 justify-around align-middle'>
          <NotesEditor />
        </div>
      </Tab>*/
