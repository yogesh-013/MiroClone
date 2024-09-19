"use client"

import Image from "next/image"
import { useOrganization , 
    useOrganizationList
 } from "@clerk/nextjs"
 import { cn } from "@/lib/utils"
 import Hint from "@/components/hint"
 interface ItemsProps{
    id : string , 
    name : string ,
    imageUrl : string  
 };

 const Item = ({
    id , 
    name , 
    imageUrl 
 }:ItemsProps)=>{
const {organization} = useOrganization()
const {setActive} = useOrganizationList()
const isActive = organization?.id === id 
const onClick = ()=>{
    if(!setActive){
        return null 
    }
    setActive({organization : id})
} 
    return (
        <Hint label = {name}
side = "right"
align = "start" 
sideOffset={18}>
   <Image
    
   src = {imageUrl}  
   alt = {name}
   onClick={onClick} 
   width = {300}
   height = {300}
   className={cn(" m-1 p-2 rounded-md cursor-pointer opacity-75 hover:opacity-100 transition" , 
    isActive && "opacity-100"
   )}/>
</Hint>)
 }
 export default Item