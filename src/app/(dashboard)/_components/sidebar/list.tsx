"use client"
import { OrganizationList, useOrganizationList } from "@clerk/nextjs"
import Item from "./items";
import Hint from "@/components/hint";
export const List = ()=>{
    const {userMemberships} = useOrganizationList({
      userMemberships : {
        infinite : true, 
      },
    });
    if(userMemberships.data?.length === 0 ){
        return null
    }

    
    
    return (
        <ul>
           {userMemberships.data?.map((mem)=>(

<Item
            key = {mem.organization.id}
            id = {mem.organization.id}
            name = {mem.organization.name}
            imageUrl = {mem.organization.imageUrl}
            />

           
           ))}
        </ul>
    )
}