"use client"
import React from 'react'
import {Tabs, Tab} from "@nextui-org/react";

export default function tabsComponent({data}: {data: EtabData}) {
  return (
    <Tabs items={data}
    variant='light' fullWidth
    classNames={{
      tabList: "bg-cover text-text rounded-2xl",
      tab: "bg-cover border-2 border-acent",
    }}
    className={`rounded-xl w-[97%]
      `}>
    {(tab) => (
    <Tab id="tab-content-parent" key={tab.tabId} title={tab.tabLabel} 
    className='py-0 flex justify-items-center flex-col flex-wrap h-full'>
    <div id="tab-content-child" 
    className={`flex flex-wrap 
    h-full w-full p-12 gap-12
    content-center justify-center
    overflow-auto 
    `}>
    {tab.tabContent.map(function(data){
      return (
      <div id={`card`+ data.id}  key={data.id} 
      className=''>
        <a href={data.link} target='_blank' className='grid'>
        <img src={data.image} className=' 
        rounded-3xl z-1 col-start-1 row-start-1
        h-48 w-48 
        max-[1850px]:h-44 max-[1850px]:w-44
        max-[1611px]:h-40 max-[1611px]:w-40
        max-[1492px]:h-36 max-[1492px]:w-36
        max-[1400px]:h-32 max-[1400px]:w-32
        max-[1280px]:h-24 max-[1280px]:w-24
        ' />
        <span className='
        block z-0 col-start-1 row-start-1
        border-1 rounded-3xl h-48 w-48 
        max-[1850px]:h-44 max-[1850px]:w-44
        max-[1611px]:h-40 max-[1611px]:w-40
        max-[1492px]:h-36 max-[1492px]:w-36
        max-[1400px]:h-32 max-[1400px]:w-32
        max-[1280px]:h-24 max-[1280px]:w-24
        shadow-neon-lg shadow-active 
        animate-pulse'/>
        </a>
      </div>)
      })}
    </div>
    </Tab>
    )}
    </Tabs>
  );
}