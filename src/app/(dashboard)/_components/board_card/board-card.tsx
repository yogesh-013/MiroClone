"use client"
import { useApiMutation } from "../../../../../hooks/use-api-mutation"
import Link from "next/link"
import Image from "next/image"
import { Overlay } from "./overlay"
import Footer from "./footer"
import { useAuth } from "@clerk/nextjs"
import{ formatDistanceToNow} from "date-fns"
import Action from "@/components/actions"
import { toast } from "sonner"
import { MoreHorizontal } from "lucide-react"
import { api } from "../../../../../convex/_generated/api"
import { useState } from "react"
interface BoardcardProps{
    id : string, 
    title : string , 
    authorName : string , 
     authorId : string , 
     createdAt : number , 
     imageUrl : string , 
     orgId : string , 
     isFavorite : boolean 
}
 const BoardCard = ({
    id ,
    title , 
    authorName , 
     authorId , 
     createdAt , 
     imageUrl , 
     orgId , 
     isFavorite} : BoardcardProps)=>{
   const {userId}  = useAuth() ;
   const authorLabel = userId === authorId ? "You" : authorName 
   const createdAtLabel = formatDistanceToNow(createdAt , 
      {
         addSuffix : true 
      }
   )
   const {mutate : favorite , pending : isFavoriting} = useApiMutation(api.boardss.favorite)
   const {mutate : unfavorite , pending : isUnFavoriting} = useApiMutation(api.boardss.unfavorite)
   const [favoritee , setfavoritee] = useState(false)
   const toogleToFavorite = ()=>{
     if(isFavorite){
      unfavorite({
         id : id 
      }).then(()=>{
         toast.success("Unfavorited Successfully")
         setfavoritee(false)
      }).catch((error)=>{
         toast.error("Failed to unfavorite the board")
      })
     }else{
      favorite({
         id : id ,
         orgId : orgId
      }).then(()=>{
         toast.success("Favorited Successfully")
         setfavoritee(true)
      }).catch((error)=>{
         toast.error("Failed to favorite the board")
      })
     }
   }

        return(
   <Link href = {`/board/${id}`}>
    <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-center overflow-hidden">
   <div className="relative flex-1 bg-amber-50">
<Image
src={imageUrl}
alt="Untitled Image"
fill 
className="object-fit"
/>
<Overlay/>
<Action id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Action>
   </div>
   <Footer
 isFavorite={favoritee}
 title = {title} 
 authorLabel={authorLabel}
 createdAtLabel={createdAtLabel}
 onClick={toogleToFavorite}
 disabled = {false}
 />
    </div>
   </Link>
)}
export default BoardCard