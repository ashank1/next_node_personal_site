'use client'
import React, { Suspense, useState } from 'react'
import { Button, Input, Listbox, ListboxItem, Textarea } from "@nextui-org/react";


export default function notesEditor() {
    const [selectKey, setSelectKey] = React.useState(0)
    const [nameValue, setNameValue] = React.useState("");
    const [descValue, setDescValue] = React.useState("");
    const [contentValue, setContentValue] = React.useState("");
    const items = [
      {id: 1, desciption: "desc", name: "First", content: "content"
    },{id: 2, desciption: "desc", name: "Second", content: "content"
    },{id: 3, desciption: "desc", name: "Third", content: "content"
    },{id: 4, desciption: "desc", name: "Fourth", content: "content"
    },{id: 5, desciption: "desc", name: "Fifth", content: "content"
    },{id: 6, desciption: "desc", name: "Sixth", content: "content"
    },{id: 7, desciption: "desc", name: "Seventh", content: "content"
    },{id: 8, desciption: "desc", name: "Eighth", content: "content"
    },{id: 9, desciption: "desc", name: "Ninth", content: "content"
    },{id: 10,desciption: "desc", name: "Tenth", content: "content"
    },{id: 11,desciption: "desc", name: "Eleventh", content: "content"
    },{id: 12,desciption: "desc", name: "Twelfth", content: "content"
    },{id: 13,desciption: "desc", name: "Thirteenth", content: "content"
    },{id: 14,desciption: "desc", name: "Fourteenth", content: "content"
    },{id: 15,desciption: "desc", name: "Fifteenth", content: "content"
    },{id: 16,desciption: "desc", name: "Sixteenth", content: "content"
    },{id: 17,desciption: "desc", name: "Seventeenth", content: "content"
    },{id: 18,desciption: "desc", name: "Eighteenth", content: "content"
    },{id: 19,desciption: "desc", name: "Nineteenth", content: "content"
    },{id: 20,desciption: "desc", name: "Twentieth", content: "content"
    },{id: 21,desciption: "desc", name: "Twenty-First", content: "content"
    },{id: 22,desciption: "desc", name: "Twenty-Second", content: "content"
    },{id: 23,desciption: "desc", name: "Twenty-Third", content: "content"
    },{id: 24,desciption: "desc", name: "Twenty-Fourth", content: "content"
    },{id: 25,desciption: "desc", name: "Twenty-Fifth", content: "content"
    },{id: 26,desciption: "desc", name: "Twenty-Sixth", content: "content"
    },{id: 27,desciption: "desc", name: "Twenty-Seventh", content: "content"
    },{id: 28,desciption: "desc", name: "Twenty-Eighth", content: "content"
    },{id: 29,desciption: "desc", name: "Twenty-Ninth", content: "content"
    },{id: 30,desciption: "desc", name: "Thirtieth", content: "content"
    },{id: 31,desciption: "desc", name: "Thirty-First", content: "content"
    },{id: 32,desciption: "desc", name: "Thirty-Second", content: "content"
    },{id: 33,desciption: "desc", name: "Thirty-Third", content: "content"
    },{id: 34,desciption: "desc", name: "Thirty-Fourth", content: "content"
    },{id: 35,desciption: "desc", name: "Thirty-Fifth", content: "content"
    },{id: 36,desciption: "desc", name: "Thirty-Sixth", content: "content"
    },{id: 37,desciption: "desc", name: "Thirty-Seventh", content: "content"
    },{id: 38,desciption: "desc", name: "Thirty-Eighth", content: "content"
    },{id: 39,desciption: "desc", name: "Thirty-Ninth", content: "content"
    },{id: 40,desciption: "desc", name: "Fortieth", content: "content"
    }
    ];


    return (
    <div className='w-full h-full flex flex-row'>
        <div id="notes-left" className='w-1/6 h-full'>
        <label className='absolute right-2 top-2 bg-bold'>{selectKey}</label>
        <Listbox className='w-full h-full rounded-l-xl bg-cover p-2'
            onAction={(key) => setSelectKey(Number(key))}
            classNames={{
              list: "overflow-y-auto gap-2"
              }}>
            {items.map((item, index) => (
              <ListboxItem key={index} description={item.desciption} className="h-[256px] bg-acent rounded-l-xl">
                Name: {item.name}
              </ListboxItem>
              ))}
          </Listbox>
          </div>
          <div id="notes-right" className='h-full w-5/6 p-2 flex flex-col bg-acent gap-2 rounded-r-xl'>
            <div className='flex flex-wrap flex-row gap-1 content-center justify-center'>
                <label className=''>Name:</label>
            <Input
                type="text"
                defaultValue={items[selectKey].name}
                onBlur={(e) => {setNameValue(e.target.value)}}
                onValueChange={setNameValue}
                className="max-w-[20%]"
                classNames={{
                    input: "bg-cover rounded-lg",
                    label: ""
                }}
                />
                <label className=''>Description:</label>
            <Input
                type="text"
                defaultValue={items[selectKey].desciption}
                onValueChange={setDescValue}
                className="max-w-[40%]"
                classNames={{
                    input: "bg-cover rounded-lg",
                    label: ""
                }}
                ></Input>
            <Button 
            className='bg-bold rounded-3xl pl-2 pr-2'
            onPress={(e) => {
                items[selectKey].name = nameValue
                items[selectKey].desciption = descValue
                items[selectKey].content = contentValue
            }}
            >Save</Button>
            </div>
          <Textarea placeholder='first' defaultValue={items[selectKey].content}
          onValueChange={setContentValue} disableAutosize
          className='flex resize-none bg-cover justify-center w-full h-full rounded-r-xl'
          classNames={{
            base: "rounded-tr-xl",
            inputWrapper: "h-full",
            input: "h-full rounded-br-xl bg-cover",
          }}
          />
          </div>
    </div>
  )
}
