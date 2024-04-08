'use client'
import React from "react";
import { useState } from "react";
import Link from "next/link";
import ThemePicker from "@/components/themePicker";
import { Spinner, Tab, Tabs, Button } from "@nextui-org/react";


export default function Home() {

  return (
    <div className="relative bg-background h-dvh w-dvw overflow-auto">
    <nav className="
          sticky top-0 
          h-24 w-full bg-bold
          grid grid-col-2 grid-rows-1">
            <div className="
            h-full w-full col-start-2 
            flex items-center justify-end
            gap-4 pr-8 font-bold text-xl">
              <Link href="" className="text-white">text</Link>
              <Link href="" className="text-white">text</Link>
              <Link href="" className="text-white">text</Link>
              <Link href="" className="text-white">text</Link>
              <Link href="" className="text-white">text</Link>
            </div>
            <ThemePicker />
          </nav>
          <main className="bg-cover h-full w-full pr-24 pl-24">
          <div id="landing" className="
          h-24 w-full 
          flex flex-row">
            <div className=""></div>
            <div className=""></div>
          </div>
          <div id="divider" className="bg-gradient-to-t from-bold from-1% to-40% h-24 w-full" />
          <div id="display" className="h-24 w-full "></div>
        </main>
    </div>
  );
}
