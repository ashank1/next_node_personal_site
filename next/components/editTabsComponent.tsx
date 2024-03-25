"use client"
import React from 'react'
import {Tabs, Tab, Card, Image } from "@nextui-org/react";

export default function tabsComponent({data}: {data: EtabData}) {
  return (
    <Tabs items={data} className='bg-pink-500 rounded-xl w-[97%]'>
    {(tab) => (
    <Tab key={tab.tabId} title={tab.tabLabel} className='py-0 bg-green-500 flex justify-center flex-wrap h-full  '>
    <div id="tab-content" className={`flex flex-wrap gap-12
    justify-center
    m-14 p-12 bg-blue-500
      `}>
        {tab.tabContent.map(function(data){
        return (
        <div id={`card`+ data.id}  key={data.id} 
          className='rounded-3xl
          h-40 w-40
          max-[1850px]:h-36 max-[1850px]:w-36
          max-[1610px]:h-32 max-[1610px]:w-32
          max-[1492px]:h-28 max-[1492px]:w-28
          xl:h-26 xl:w-26
          '>
          <a href={data.link} target='_blank' className='relative grid'>
            <img src={data.image} className='rounded-3xl z-1 col-start-1 row-start-1' />
            <span className='
            block z-0 col-start-1 row-start-1
            border-1 rounded-3xl h-42 w-42
            max-[1850px]:h-36 max-[1850px]:w-36
            max-[1610px]:h-32 max-[1610px]:w-32
            max-[1492px]:h-28 max-[1492px]:w-28
            shadow-neon-lg shadow-lime-500 
            animate-pulse'/>
          </a>
        </div>
        )
      })}
      </div>
    </Tab>
    )}
    </Tabs>
  );
}