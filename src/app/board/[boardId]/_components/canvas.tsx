"use client"
import { CanvasState 
    , CanvasMode , 
    LayerType , 
    Color , 
    Point , 
    Camera
 } from "../../../../../types/canvas"
import { Info } from "./info"
import { Participants } from "./participants"
import { ToolBar } from "./toolbar"
import { useCanRedo , 
         useCanUndo , 
         useHistory
 } from "../../../../../liveblocks.config"
import { useState } from "react"
interface CanvasProps {
    boardId : string
}
export const Canvas = ({
    boardId 
} : CanvasProps)=>{
const [canvasState , setCanvasState] = useState<CanvasState>({
    mode : CanvasMode.None
})
  const history = useHistory() 
  const canUndo = useCanUndo() 
  const canRedo = useCanRedo()
    return (
      <main className="h-full w-full relative bg-neutral-100 touch-none">
      
      <Info boardId={boardId}/>
      <Participants/>
      <ToolBar
     canvasState={canvasState} 
     setCanvasState={setCanvasState}
     undo={history.undo}
     redo = {history.redo}
     canRedo = {canRedo}
     canUndo = {canUndo}
      />
      </main>
    )
}