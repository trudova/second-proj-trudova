import React from 'react'
import Room from './Room'
export default function RoomList(rooms) {
    if(rooms.length ===0){
        return(
           <div className='empty-search'>
               <h3>
                  unfortunately no rooms matched to yor search parameters :-(
               </h3>
           </div> 
        )
    }
    return <section className='roomslist'>
        <div>
            
        </div>
    </section>
    
}
