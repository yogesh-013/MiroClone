"use client"
import { Plus } from "lucide-react"
import { CreateOrganization } from "@clerk/nextjs"
import Hint from "@/components/hint"
 import { Dialog ,  DialogContent  , 
    DialogTrigger , DialogTitle } from "@/components/ui/dialog"

 export const NewButton = ()=>{
    return (
        <Dialog>
            <DialogTrigger asChild>
<div className="aspect-square">
<Hint
label = "Create Organization"
side = "right"
align = "start" 
sideOffset={18}

>
<button className="bg-white/25 h-full w-full rounded-md
flex items-center justify-center opacity-60 
hover:opacity-100 transition">
    <Plus className="text-white"/>
</button>
</Hint>

</div>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>
                    Create Organization : 
                </DialogTitle>
                <CreateOrganization routing="hash"/>
            </DialogContent>
        </Dialog>
    )
 }