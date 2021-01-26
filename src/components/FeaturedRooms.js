import React from 'react';
import { RoomContext } from '../context';
import {Link} from 'react-router-dom';
import Title from './Title';
import Room from './Room';

 class FeaturedRooms extends React.Component{
    static contextType=RoomContext;
 
    

    render(){
        let { loading,featuredRooms:rooms}=this.context;
        console.log(rooms);

        rooms=rooms.map(room=>{
            return<Room key={room.id} room={room}/>
        })

        return(
             <section className='featured-rooms'>
                 <Title title='Featured Rooms'/>
                 <div className='featured-rooms-center'>
                     {rooms}
                 </div>
             </section>
        );
    }
}

export default FeaturedRooms;