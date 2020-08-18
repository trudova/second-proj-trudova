import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading from './Loading'
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
       // const value=this.context;
        return (
            <div>
                hello from FeaturedRooms 
                <Loading/>
            </div>
        )
    }
}
//context API
//create Loading component
// import loading to the feauter Rooms