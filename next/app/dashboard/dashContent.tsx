'use client'
import React, { Suspense } from 'react'
import { useState } from 'react';
import TabsComponent from '../../components/tabsComponent'
import EditTabsComponent from '../../components/editTabsComponent'
import {Tabs, Tab, Card, Image, Spinner } from "@nextui-org/react";

export default function content({data}: {data: EtabData}) {
  const [editTabs, setEditTabs] = React.useState(false)
  const changeTabState = () => {
    setEditTabs(!editTabs)
  }
  return (
    <div id="tabs" className='relative bg-blue-500 flex w-full h-full flex-col '>
      <button className='text-red-500 z-10 absolute top-0 right-0 bg-slate-100 rounded-lg max-h-8 max-w-8 ' onClick={changeTabState}><img src="https://www.svgrepo.com/show/44530/cogwheel.svg"/></button>
        <Suspense fallback={<Spinner className="z-10"label="Loading..." color="warning" />}>
          {editTabs ? <EditTabsComponent data={data}/>: <TabsComponent data={data}/>}
        </Suspense>
    </div>
  )
}
