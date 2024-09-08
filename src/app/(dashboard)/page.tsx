"use client"
import EmptyOrg from "./_components/emptyOrg"
import BoardList from "./_components/board-list"
import { useOrganization , 
    useOrganizationList
 } from "@clerk/nextjs"
 interface DashBoardLayoutProps{
    searchParams : {
        search?: string  , 
        favorite?: string
    }
 }
 const DashBoard =  ({searchParams} : DashBoardLayoutProps)=>{
   const { organization } = useOrganization()
   
    return (
        
        <div className="flex-1 h-[calc(100%-80px)]">
            {!organization ? (<EmptyOrg/>):(<BoardList
            orgId = {organization.id}
            query = {searchParams}/>)}
        </div>
    )
 }
 export default DashBoard
 