"use client"
import { EmptySearch } from "./empty-search"
import { EmptyFavourites } from "./empty-favorite"
import { EmptyBoard } from "./empty-board"
interface BoardListProps{
     orgId : string , 
     query : {
        search? : string , 
        favorite? : string
     }
}
const BoardList = (
    {
        orgId , 
        query 
    }:
    BoardListProps
)=>{
    const  data = [] 
    if(!data.length && query.search){
        return <EmptySearch/>
    }
    if(!data.length && query.favorite){
        return <EmptyFavourites/>
    }
    if(!data.length){
        return <EmptyBoard/>
    }
   return (
    <div>
        {JSON.stringify(query.search)}
        {JSON.stringify(query.favorite)}
    </div>
   )
}
export default BoardList