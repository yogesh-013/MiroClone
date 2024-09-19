"use client"
import { useMutation } from "convex/react";
import { useApiMutation } from "../../../../hooks/use-api-mutation";
import { api } from "../../../../convex/_generated/api";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useOrganization } from "@clerk/nextjs";
export function EmptyBoard() {
  const {mutate , pending } = useApiMutation(api.boardss.create)
  const {organization} = useOrganization()
  const onClick = ()=>{
    if(!organization) return null

    mutate({
      orgId : organization.id , 
      title : "Untitled" , 

    }).then((id)=>{
      toast.success("Board Created Successfully")
      //TODO : redirect to board/id
    })
    .catch((error)=>{
      toast.error("Something went wrong")
    })
  }
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="Empty" height={140} width={140} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p className="text-muted-foreground text-sm mt-2">
       Start by creating a board for your organization 
      </p>
      <div className="mt-6">
        <Button  size="lg"
        onClick={onClick}
        disabled = {pending}>
            Create board
        </Button>
      </div>
    </div>
  );
}