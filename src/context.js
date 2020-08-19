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
    };
    // getData 

//add the methods to access data
    componentDidMount(){
 let rooms =this.formatData(items);
 let featureRooms =rooms.filter(room=> room.featured === true);
 this.setState({
    rooms,
    featureRooms,
    sortedRooms:rooms,
    loading:false
 });
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
getRoom =(slug) =>{
    let tempRooms =[...this.state.rooms]
    const room =tempRooms.find((room)=>room.slug===slug);
    return room;
} //filtr the room 
    render() {
        return (
     <RoomContext.Provider value={{...this.state, getRoom: this.getRoom}}>
                    {this.props.children}
     </RoomContext.Provider>
        );
    }
}
const RoomConsumer =RoomContext.Consumer;
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value=><Component{...props}context={value}/>}
        </RoomConsumer>
    }
}//higher order component 

export {RoomProvider,RoomConsumer,RoomContext};