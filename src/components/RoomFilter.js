import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'
export default function RoomFilter() {
    //get contexr API set this up to  var 
    const context = useContext(RoomContext);
    return (
        <div>
            hello from filtr
        </div>
    )
}
