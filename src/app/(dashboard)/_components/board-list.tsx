"use client"
import { EmptySearch } from "./empty-search"
import { EmptyFavourites } from "./empty-favorite"
import { EmptyBoard } from "./empty-board"
import { useQuery } from "convex/react"
import BoardCard from "./board_card/board-card"
import { api } from "../../../../convex/_generated/api"
import NewBoardButton from "./new-board-button"
import { DEFAULT_MAX_VERSION } from "tls"
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
    const  data = useQuery(api.boards.get , {
        orgId , 
        ...query
    }) 
    let flag = false; 
    const store = data?.map((board)=>{
      if(board.isFavourite){
         flag = true 
      }
    }
           
    )
    
    if(!data?.length && query.search){
        return <EmptySearch/>
    }
    if(!data?.length && query.favorite){
        return <EmptyFavourites/>
    }
    if(!data?.length){
        return <EmptyBoard/>
    }
    if(!flag && query.favorite){
      return <EmptyFavourites/>
  }
    if(query.favorite){
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton
        orgId = {orgId}
        disabled = {false}/>
         {data?.map((board) => (
          board.isFavourite?(
            <BoardCard
             key={board._id}
             id={board._id}
             title={board.title}
             imageUrl={board.imageUrl}
             authorId={board.authorId}
             authorName={board.authorName}
             createdAt={board._creationTime}
             orgId={board.orgId}
             isFavorite={board.isFavourite}
           />
          ) : (null)
           
         ))}
       </div>
      )
    }
    console.log(data);
    
   return (
    <div>
    <h2 className="text-3xl">
      {query.favorite ? "Favourite Boards" : "Team boards"}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
     <NewBoardButton
     orgId = {orgId}
     disabled = {false}/>
      {data?.map((board) => (
        <BoardCard
          key={board._id}
          id={board._id}
          title={board.title}
          imageUrl={board.imageUrl}
          authorId={board.authorId}
          authorName={board.authorName}
          createdAt={board._creationTime}
          orgId={board.orgId}
          isFavorite={board.isFavourite}
        />
      ))}
    </div>
  </div>
   )
}
export default BoardList