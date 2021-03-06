import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}
//wraping up RoomContainer in to room consumer
export default withRoomConsumer(RoomContainer);
//rebuilt with higth order component fron  context

// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import {RoomConsumer} from '../context'
// import Loading from './Loading'
// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//               (value)=>{
//                   const {loading, sortedRooms,rooms}=value;
//                   if(loading){
//                       return<Loading/>
//                   }
//                 return(
//                     <div>
//             hello from rooms conteiner
//             <RoomFilter rooms={rooms}/>
//             <RoomList rooms={sortedRooms}/>
//         </div>
//                 )
//               }  
//             }
//         </RoomConsumer>
        
//     )
// }
