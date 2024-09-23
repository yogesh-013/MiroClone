"use client"
import { ReactNode } from "react"

  import { RoomProvider } from "../../liveblocks.config";
  import { ClientSideSuspense } from "@liveblocks/react";
  interface RoomProps {
    children : React.ReactNode , 
    roomId : string , 
    fallback : NonNullable<ReactNode>
  }
  export const Room = ({
    children ,
    roomId , 
    fallback
  } : RoomProps)=>{
    return (
        <RoomProvider id = {roomId} initialPresence={{}}>
           <ClientSideSuspense fallback = {
            fallback
           }>
        {()=> children}
           </ClientSideSuspense>
        </RoomProvider>
    )
  }