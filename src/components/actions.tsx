"use client" 
import { api } from "../../convex/_generated/api"
import { Id } from "../../convex/_generated/dataModel"
import { useApiMutation } from "../../hooks/use-api-mutation"
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import { Link2, Pencil , Trash2} from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { DropdownMenu , 
    DropdownMenuContent , 
    DropdownMenuItem , 
    DropdownMenuTrigger
 } from "./ui/dropdown-menu"
 import {ConfirmModal} from "./confirmModel"
import { defaultConfig } from "next/dist/server/config-shared"
import UseRenameModal from "../../store/renameModal"
 interface ActionProps{
    children : React.ReactNode , 
    side ?: DropdownMenuContentProps["side"] , 
    sideOffset ?: DropdownMenuContentProps["sideOffset"] , 
    id : string  , 
    title : string
 }
 const Action = ({
    children , 
    side, 
    sideOffset , 
    id ,
    title 
 } : ActionProps)=>{
  const {onOpen} = UseRenameModal()
     const {mutate , pending} = useApiMutation(api.boardss.remove)
       const handleDelete = ()=>{
       mutate({
         id : id
       }).then((id)=>{
        toast.success("Board Deleted !")
       }).catch((error)=>{
        toast.error("Failed to Delete Board!")
       })
       }

       const handleCopyLink = ()=>{
         navigator.clipboard
      .writeText(`${window.location.origin}/boards/${id}`)
      .then(() => toast.success("Link copied!"))
      .catch(() => toast.error("Failed to copy link"));
       }

       return (
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent
            onClick={(e)=>{
               e.stopPropagation()
            }}
            side = {side}
            sideOffset={sideOffset}
            className="w-60">
<DropdownMenuItem
 className="p-3 cursor-pointer"
 onClick={handleCopyLink}>
  <Link2 className="h-4 w-4 mr-2" />
  Copy board link
</DropdownMenuItem>
<DropdownMenuItem
          className="p-3 cursor-pointer"
          onClick={() => onOpen(id, title)}
        >
          <Pencil className="h-4 w-4 mr-2" />
          Rename
        </DropdownMenuItem>
<ConfirmModal
          onConfirm={handleDelete}
          disabled={pending}
          header="Delete board?"
          description="This will delete the board and all of its content"
         
          
        >
          <Button
            className="p-3 cursor-pointer w-full justify-start font-normal"
            variant="ghost"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </ConfirmModal>
        
            </DropdownMenuContent>
         </DropdownMenu>
       )
   }
   export default Action 