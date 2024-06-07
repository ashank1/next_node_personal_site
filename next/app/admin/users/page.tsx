'use client'
import { Accordion, AccordionItem, Button, Checkbox, Input, Snippet } from '@nextui-org/react';
import React, { useEffect } from 'react'
import { AiFillDelete, AiFillEye, AiFillEyeInvisible, AiFillSave, AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';

export default function users() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [data, setData] = React.useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3002/user/');
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  const handleUpdate = async (uId : number, id: string) => {
    let admin
    let uname = document.getElementById(`${uId}uname`) as HTMLInputElement | null;
    let email = document.getElementById(`${uId}email`) as HTMLInputElement | null;
    let pass = document.getElementById(`${uId}pass`) as HTMLInputElement | null;
    let check = document.getElementById(`${uId}admin`) as HTMLInputElement | null;
    check?.dataset.selected == undefined ? admin = false : admin = true
    //Make fetch request to update
    try{
    await fetch(`http://localhost:3002/user/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: uname!.value, password: pass!.value, email: email!.value, admin: admin})
    })} catch (error) { console.error(error)}
  }

  const addUser = async () => {
    let admin
    let uname = document.getElementById(`new-uname`) as HTMLInputElement | null;
    let email = document.getElementById(`new-email`) as HTMLInputElement | null;
    let pass = document.getElementById(`new-pass`) as HTMLInputElement | null;
    let check = document.getElementById(`new-admin`) as HTMLInputElement | null;
    check?.dataset.selected == undefined ? admin = false : admin = true
    try {
      await fetch('http://localhost:3002/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: uname!.value, password: pass!.value, email: email!.value, admin: admin})
      })
    }catch (error) { console.error(error)}
  }

  return (
    <main className='w-full h-full flex flex-col 
        items-center justify-start pt-2'> 
        <div className='flex flex-col 
          items-center justify-center gap-2
          w-11/12 h-11/12 overflow-y-auto'>
          <div className='bg-cover 
          border-2 border-bold p-4 rounded-3xl
          w-full h-full items-center
          flex flex-col'>
            <ul className='w-full flex flex-col gap-4 items-center justify-center'>
        {data.map((user : any) => (
          <Accordion selectionMode='single' variant="splitted" className='p-2 border-4 border-bold rounded-3xl flex items-start justify-between' itemClasses={{ content: "w-full " }}>
            <AccordionItem key={user.uId} aria-label={user.username} title={user.username} className='flex flex-row gap-2' >
              <div
              className='w-full flex flex-row gap-4'>
                <Snippet>{user.uId}</Snippet>
                <Input id={`${user.uId}uname`} className='' startContent={<AiOutlineUser />} defaultValue={user.username} />
                <Input id={`${user.uId}email`} className='' startContent={<AiOutlineMail />} defaultValue={user.email} />
                <Input id={`${user.uId}pass`} className='' 
                startContent={<AiOutlineLock />} 
                type={isVisible ? "text" : "password"}
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                defaultValue={user.password}/>
                <Checkbox id={`${user.uId}admin`} className='' isSelected={user.admin} aria-label='Admin'>Admin</Checkbox>
                <Button onPress={() => {handleUpdate(user.uId, user._id)}} color='success' isIconOnly><AiFillSave /></Button>
                <Button color='danger' isIconOnly><AiFillDelete /></Button>
              </div>
            </AccordionItem>
            
          </Accordion>
        ))}
        </ul>
          <div className='bg-cover 
          border-2 border-bold p-4 rounded-3xl
          w-full h-full items-center justify-center
          flex flex-col'>
              <div className='w-full flex flex-row gap-4'>
                <Input id={`new-uname`} className='' startContent={<AiOutlineUser />} />
                <Input id={`new-email`} className='' startContent={<AiOutlineMail />} />
                <Input id={`new-pass`} className='' 
                startContent={<AiOutlineLock />} 
                type={isVisible ? "text" : "password"}
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                } />
                <Checkbox id={`new-admin`} className='' aria-label='Admin'>Admin</Checkbox>
                <Button onPress={() => {addUser()}}  color='success' isIconOnly><AiFillSave /></Button>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}
/*

*/
