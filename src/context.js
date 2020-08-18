import React, { Component } from 'react'
import items from './data'
const RoomContext =React.createContext();
//provider and concumer 
class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true
    }
    // getData 

//add the methods to access data
    componentDidMount(){
 let rooms =this.formatData(items);
 let featureRooms =rooms.filter(room=> room.feature===true);
 this.setState({
    rooms,
    featureRooms,
    sortedRooms:rooms,
    loading:false
 })
    }
formatData(items){
    let  tempItems =items.map(item =>{
        let id = item.sys.id
        let images =item.fields.images.map(image=> image.fields.file.url
        );
        let room = {...item.fields,images, id};
        return room;
    });
    return tempItems;
}

    render() {
        return (
            <div>
                <RoomContext.Provider value={{...this.state}}>
                    {this.props.children}
                </RoomContext.Provider>
            </div>
        )
    }
}
const RoomConsumer =RoomContext.Consumer;
export {RoomProvider,RoomConsumer,RoomContext};