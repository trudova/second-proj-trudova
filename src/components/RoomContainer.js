import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {RoomConsumer} from '../context'
import Loading from './Loading'
export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
              (value)=>{
                  const {loading, sortedRooms,rooms}=value;
                return(
                    <div>
            hello from rooms conteiner
            <RoomFilter/>
            <RoomList/>
        </div>
                )
              }  
            }
        </RoomConsumer>
        
    )
}
