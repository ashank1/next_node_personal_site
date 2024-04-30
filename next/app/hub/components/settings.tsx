'use client'
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation';
import { AiFillCheckCircle, AiFillDelete, AiFillSave } from "react-icons/ai";
import { LuSun, LuMoon } from "react-icons/lu";
import { Card, Input, Spinner, Divider, RadioGroup, Radio, Skeleton, Button, Tooltip, Textarea} from '@nextui-org/react'
import _ from 'lodash';
import { useTheme } from 'next-themes'

//make theme cards main theme pickers, find out how to apply color-scheme on theme change 
export default function hubsettings({userLink, userNavLink}: {userLink : any, userNavLink: any}) {
    const router = useRouter();
    type LinkType = {_id: Number, site : string, link: string};
    //save spinner states controls
    const [load, setLoad] = useState(false)
    const [saved, setSaved] = useState(false)
    //Link default states
    const [steamLink, setSteamLink] = useState<LinkType>({_id: 0, site: "steam", link: "" })
    const [discordLink, setDiscordLink] = useState<LinkType>({_id: 0, site: "discord", link: "" })
    const [spotifyLink, setSpotifyLink] = useState<LinkType>({_id: 0, site: "spotify", link: "" })
    //BookMark default states
    const [linkLabel, setLinkLabel] = useState('')
    const [linkValue, setLinkValue] = useState('')
    //Theme states
    const [ mounted, setMounted ] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()
    
    //Link updating
    const handleChange = _.debounce(async (id: any, value: any) => {
        const response = await fetch(`http://localhost:3002/links/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({link: value})
            })
        if (response.ok) {
            setSaved(true)
            setLoad(false)
            router.refresh()
        } else {
        setLoad(true)
        setSaved(false)
        }
        router.refresh()
    }, 4000)
    const handleLinkUpdate = async (linkId: any, linkLabel: string, linkVal: string) => {
        try {
        await fetch(`http://localhost:3002/bookMark/${linkId}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({link: linkVal, label: linkLabel})
        })
        } catch (error) { console.error('Error:', error); }
        router.refresh()
    }
    const handleAddLink = async (uId: number, tabId: number, linkLabel: string, linkVal: string) => {
        try {
        await fetch(`http://localhost:3002/bookMark`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({uId: uId, tabId: tabId, label: linkLabel, link: linkVal})
        })
        } catch (error) { console.error('Error:', error); }
        router.refresh()
    }
    const handleRemoveLink = async (linkId: any) => {
        try {
        await fetch(`http://localhost:3002/bookMark/${linkId}`, {
            method: 'DELETE'
        })
        } catch (error) { console.error(error)}
        router.refresh()
    }
    //Link from fetch processing
    React.useEffect(() => {
    userLink.forEach((link: any) => {
        if(link.site == "steam") {
            setSteamLink(link)
        } else if(link.site == "discord") {
            setDiscordLink(link)
        } else if(link.site == "spotify") {
            setSpotifyLink(link)
        }
    })
    }, [userLink])

    React.useEffect(() => { setMounted(true) }, [])
    if (!mounted) return null;

    return (
    <div className='overflow-y-auto w-full h-full items-centre justify-start gap-12 p-12'>
        <div className='h-auto w-auto flex flex-wrap flex-row space-x-8 items-center justify-evenly'>
            <div className='h-auto w-auto flex flex-wrap flex-col gap-8 items-center'>
            <h2>Navigation Settings</h2>
            { steamLink.link != "" ? <Input defaultValue={steamLink.link} label="Steam Link" onBlur={() => {setLoad(false); setSaved(false)}} 
            onChange={(e) => {setLoad(true); handleChange(steamLink._id, e.target.value)}}
            className='max-w-64' /> : <Spinner size="sm"/>}
        
            {discordLink.link != "" ? <Input defaultValue={discordLink.link} label="Discord Link" onBlur={() => {setLoad(false); setSaved(false)}} 
            onChange={(e) => {setLoad(true); handleChange(discordLink._id, e.target.value)}}
            className='max-w-64'/> : <Spinner size="sm"/>}
        
            <Tooltip showArrow content="You can paste the embed link of your favourite spotify playlist here">
            { spotifyLink.link != "" ? <Textarea defaultValue={spotifyLink.link} label="Spotify Link" onBlur={() => {setLoad(false); setSaved(false)}} 
            onChange={(e) => {setLoad(true); handleChange(spotifyLink._id, e.target.value)}}
            className='max-w-96' classNames={{}}/> : <Spinner size="sm"/>}
            </Tooltip>
            {load ? <Spinner size="lg"/> : null}{saved ? <AiFillCheckCircle className='h-full w-full max-h-12 max-w-12'/> : null}
            </div>
            <Divider orientation="vertical" />
            <div className='h-auto w-auto flex flex-wrap flex-col gap-8 items-center'>
            <h2>Account Settings</h2>
        
            </div>
        </div>
        <Divider className='mt-24 mb-24'/>
        <div className='h-auto w-auto flex flex-wrap flex-col gap-8 items-center'>
        <h2>Theme Choice</h2>
            <div>
                <RadioGroup orientation='horizontal' className='w-full h-full'
                value={theme} onValueChange={setTheme}
                classNames={{wrapper: "gap-12"}}>
                    <Card className='w-[200px] h-[200px] p-4 items-evenly justify-evenly'>
                        <Radio value="light" className='' 
                        classNames={{
                            base: "border-2 border-transparent data-[selected=true]:border-bold"
                            }}>
                                <div className='w-[160px] h-[160px]'>
                                    <LuSun className='w-[80%] h-[80%]'/>
                                </div>
                    
                        </Radio>
                    </Card>
                    <Card className='w-[200px] h-[200px] p-4 flex items-evenly justify-evenly'>
                        <Radio value="dark" className='' 
                        classNames={{
                            base: "border-2 border-transparent data-[selected=true]:border-bold"
                            }}>
                                <div className='w-[160px] h-[160px]'>
                                <LuMoon className='w-[80%] h-[80%]'/>
                                </div>
                    </Radio>
                    </Card>
                </RadioGroup>
            </div>
        </div>
        <Divider className='mt-24 mb-24'/>
        <div className='flex flex-col gap-8 items-center'>
            <h2>Bookmarks Settings</h2>
            <div className='flex flex-col flex-wrap gap-4'>
                {userNavLink.map(function(group: any){
                    return (
                        <Card key={group.tabIndex} className='flex gap-4 p-4 items-center '>
                            <label>Group Name</label>
                            <Input label="Group Name" defaultValue={group.tabLabel} className='max-w-96'/>
                            <div className='flex items-center content-center justify-center flex-wrap gap-4'>
                             {group.tabContent.map(function(cont: any){
                                return (
                                <Card key={cont.id} className='bg-cover p-2 items-center border-2 border-acent shadow-lg '>
                                    <label>Link Properties</label>
                                <form className='flex flex-row gap-4 p-2 items-center'>
                                    <input type="hidden" value={cont.id} />
                                    <Input label="Link Label" defaultValue={cont.label} onChange={(e: any) => {setLinkLabel(e.target.value)}}/>
                                    <Input label="Linked Site" defaultValue={cont.link} onChange={(e: any) => {setLinkValue(e.target.value)}}/>
                                    <div className='flex flex-col gap-2 items-center'>
                                    <Button className='bg-active p-2 rounded-xl' onClick={() => {handleLinkUpdate(cont.id, linkLabel, linkValue)}}><AiFillSave className=''/></Button>
                                    <Button onClick={() => {handleRemoveLink(cont.id)}} className='bg-red-500 p-2 rounded-xl'><AiFillDelete className=''/></Button>
                                    </div>
                                </form>
                                </Card>
                                )
                                })}
                            </div>
                            <div className='flex flex-wrap gap-4 basis-1/3'>
                            <Card className='bg-cover p-4 items-center border-2 border-active shadow-lg '>
                            <label>New Link</label>
                            <form className='flex flex-row gap-4 p-4'>
                                <Input label="New Link Label" onChange={(e: any) => {setLinkLabel(e.target.value)}} />
                                <Input label="New Link's Site" onChange={(e: any) => {setLinkValue(e.target.value)}} />
                                <Button onClick={() => {handleAddLink(group.uId, group.tabId, linkLabel, linkValue)}} className='bg-active p-2 rounded-xl'><AiFillSave className=''/></Button>
                            </form>
                            </Card>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
