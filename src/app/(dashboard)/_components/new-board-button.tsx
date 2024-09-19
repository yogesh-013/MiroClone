"use client" 
import { api } from "../../../../convex/_generated/api"
import { cn } from "@/lib/utils"
import { useApiMutation } from "../../../../hooks/use-api-mutation"
import { Plus } from "lucide-react"
import { useRouter } from "next/router"
import { toast } from "sonner"
interface NewBoardButtonProps{
    orgId : String , 
    disabled? : boolean 
}
const NewBoardButton = ({
    orgId , 
    disabled
} : NewBoardButtonProps)=>{

   const {mutate, pending} = useApiMutation(api.boardss.create)
   const handleClick = ()=>{
    mutate({
        orgId , title : "Untitled"
    }).then((id)=>{
        console.log(id)
        toast.success("Board created")
    })
    .catch((error)=>{
        toast.error(error)
    })
   }

return (
    <button
    disabled={pending}
    onClick={handleClick}
    className={cn(
      "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
      (pending) &&
        "opacity-65 hover:bg-blue-600 cursor-not-allowed"
    )}
  >
    <div />
    <Plus className="h-12 w-12 text-white stroke-1" />
    <p className="text-sm text-white font-light">New board</p>
  </button>
)
}

export default NewBoardButton