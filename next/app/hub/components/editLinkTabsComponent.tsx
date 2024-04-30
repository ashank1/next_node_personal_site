"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { AiFillSave, AiFillEdit, AiFillPlusCircle, AiFillDelete } from "react-icons/ai";
import {Tabs, Tab, Popover, PopoverTrigger, PopoverContent, Input, Button} from "@nextui-org/react";
//https://cdn-icons-png.flaticon.com/512/262/262038.png
export default function tabsComponent({data}: {data: EtabData}) {
  
  const router = useRouter();
  let value = {link: "", image: ""}; let tabValue = "";
  const onLinkChange = (event: any) => { value.link = event }
  const onImageChange = (event: any) => { value.image = event }
  const onTabChange = (event: any) => {tabValue = event}
  //Send Link values to edit individual link card
  const handlePress = async (loc: any, defLink: string, defImg: string) => {
    if (value.link == "") { value.link = defLink }
    if (value.image == "") { value.image = defImg }
    try {
    const response = await fetch(`http://localhost:3002/linkMark/${loc}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({link: value.link, image: value.image})
    })
    } catch (error) { console.error('Error:', error); }
    value.link = "", value.image = ""
    router.refresh()
  }
  //Sends Tab label to change the name of selected tab
  const handleTabPress = async (loc: any, defLabel: string) => {
    if (tabValue == "") {tabValue = defLabel}
    try {
        const response = await fetch(`http://localhost:3002/tabs/${loc}`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({tabLabel: tabValue})
        })
    } catch (error) { console.error('Error:', error); }
    tabValue = ""
    router.refresh()
  }

  const addLink = async(loc: any, user: any) => {
    try {
      await fetch(`http://localhost:3002/linkMarks`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({uId: user, tabId: loc, image: "image_link", link: "link_itself"})
      })
    } catch (error) { console.error('Error:', error); }
    router.refresh()
  }
  const removeLink = async (linkId: any) => {
    try {
    await fetch(`http://localhost:3002/linkMark/${linkId}`, {
        method: 'DELETE'
    })
    } catch (error) { console.error(error)}
    router.refresh()
}

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
    <Tab id="tab-content-parent" key={tab.tabIndex} 
    title={
      <div className='flex flex-row gap-6 items-center justify-center'>
      <p>{tab.tabLabel}</p>
      <Popover backdrop='blur' onClose={() => {router.refresh()}}>
      <PopoverTrigger>
        <Button isIconOnly className='max-w-6 max-h-6 bg-active items-center justify-center'>
          <AiFillEdit className='w-full h-full' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-64 h-36' >
          <div className='flex flex-col items-center justify-center'>
            <Input labelPlacement='inside' name="label"
            label='Tab Name' type='text' 
            defaultValue={tab.tabLabel}
            description='Name of the tab'
            classNames={{
              inputWrapper: "w-60"
            }}
            onChange={(event: any) => {onTabChange(event.target.value)}}
            />
            <Button isIconOnly radius='full' className='bg-active w-10 h-8'
            onPress={() => {handleTabPress(tab.tabId, tab.tabLabel)}}
            ><AiFillSave className='h-full w-full' /></Button>
          </div>
        </PopoverContent>
        </Popover>
      </div>
    } 
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
      className='' >
        <Popover classNames={{
          base: "rounded-2xl border-2 border-bold",
        }}
        backdrop='blur'
        onClose={() => {router.refresh()}}
        >
        <PopoverTrigger>
        <button className='grid h-max w-max'>
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
        </button>
        </PopoverTrigger>
        <PopoverContent className='w-96 h-56' >
          <div className='flex flex-col items-center justify-center'>
            <Input labelPlacement='inside' name="image"
            label='Image Link' type='text' 
            defaultValue={data.image}
            description='What you want the link look like'
            classNames={{
              inputWrapper: "w-80"
            }}
            onChange={(event: any) => onImageChange(event.target.value)}
            />
            <Input labelPlacement='inside' name="link"
            label='Site Link' type='text' 
            defaultValue={data.link}
            description='Where you want the link to go'
            classNames={{
              inputWrapper: "w-80"
            }}
            onChange={(event: any) => onLinkChange(event.target.value)}
            /><div className='flex flex-row gap-4'>
            <Button isIconOnly className='bg-active max-w-28 '
            onPress={() => {handlePress(data.id, data.link, data.image)}}
            ><AiFillSave className='h-full w-full' /></Button>
            <Button isIconOnly className='bg-red-500 max-w-28' 
            onClick={() => {removeLink(data.id)}} >
            <AiFillDelete className='h-full w-full'/></Button>
            </div>
          </div>
        </PopoverContent>
        </Popover>
      </div>)
      })}
      <div id='cardnew' className=''>
      <button  onClick={() => {addLink(tab.tabId, tab.uId, )}}
      className='grid h-max w-max'>
        <AiFillPlusCircle className=' 
        rounded-full z-1 col-start-1 row-start-1
        h-48 w-48
        max-[1850px]:h-44 max-[1850px]:w-44
        max-[1611px]:h-40 max-[1611px]:w-40
        max-[1492px]:h-36 max-[1492px]:w-36
        max-[1400px]:h-32 max-[1400px]:w-32
        max-[1280px]:h-24 max-[1280px]:w-24
        ' />
        <span className='
        block z-0 col-start-1 row-start-1
        border-1 rounded-full h-48 w-48
        max-[1850px]:h-44 max-[1850px]:w-44
        max-[1611px]:h-40 max-[1611px]:w-40
        max-[1492px]:h-36 max-[1492px]:w-36
        max-[1400px]:h-32 max-[1400px]:w-32
        max-[1280px]:h-24 max-[1280px]:w-24
        shadow-neon-lg shadow-active 
        animate-pulse'/>
        </button>
      </div>
    </div>
    </Tab>
    )}
    </Tabs>
  );
}