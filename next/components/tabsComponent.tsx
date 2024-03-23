"use client"
import React from 'react'
import {Tabs, Tab, Card, Image } from "@nextui-org/react";

export default function tabsComponent({data}: {data: any}) {
  return (
    <Tabs items={data} className='bg-pink-500'>
    {(tab) => (
      <Tab key={tab.tabId} title={tab.tabLabel} className={`inline-grid grid-cols-4 gap-3 bg-blue-500 m-4`}>
        {tab.tabContent.map(function(data){
          return (
          <Card key={data.id} className='relative rounded-3xl'>
            <a href={data.link} target='_blank' className='z-10'>
              <img src={data.image} className='rounded-3xl z-2 h-18 w-18'/>
            </a>
            <span className='absolute z-0 
                w-full h-full 
                border-1 rounded-3xl 
                shadow-neon-lg shadow-cyan-500 
                animate-pulse'/>
          </Card>
          )
        })}
      </Tab>
    )}
    </Tabs>
  );
}