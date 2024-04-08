'use client'
import React, { Suspense, useState } from 'react'
import LinkTabsComponent from './components/linkTabsComponent'
import EditLinkTabsComponent from './components/editLinkTabsComponent'
import { Spinner, Tabs, Tab, Select, Listbox, ListboxItem, Textarea } from "@nextui-org/react";
import NotesEditor from './components/notesEditor';

export default function content({data}: {data: EtabData}) {
  const [editTabs, setEditTabs] = React.useState(false)
  
  const changeTabState = () => {
    setEditTabs(!editTabs)
  }

  
  return (
    <div className='flex flex-col w-full h-full z-3 overflow-hidden'>
    <Tabs fullWidth variant='light'
    className=''
      classNames={{
        tab: "w-full bg-cover border-2 border-bold rounded-2xl text-center",
        base: "w-full",
        panel: "w-full h-full p-1 mb-1 min-h-96"
      }}>
      <Tab key="YTDeck" title="LinkDeck" className='py-0 flex flex-wrap flex-col overflow-hidden'>
      <div id="tabs-content" className='relative border-2 border-bold rounded-2xl flex flex-grow flex-wrap w-full h-full z-3 justify-around align-middle'>
        <button className='z-10 absolute top-1 right-1 bg-bold rounded-lg max-h-8 max-w-8 ' onClick={changeTabState}><img src="https://www.svgrepo.com/show/44530/cogwheel.svg"/></button>
          <Suspense fallback={<Spinner className="z-10"label="Loading..." color="warning" />}>
            {editTabs ? <EditLinkTabsComponent data={data}/>: <LinkTabsComponent data={data}/>}
          </Suspense>
      </div>
      </Tab>
      <Tab key="notepad" title="Notepad" className='py-0 flex flex-wrap'>
        <div id="notepad-content" className='relative border-2 border-bold rounded-2xl flex flex-grow w-full h-full flex-row z-3 transition ease-in-out delay-[.5s] gap-4 justify-around align-middle'>
          <NotesEditor />
        </div>
      </Tab>
    </Tabs>
    </div>
  )
}
