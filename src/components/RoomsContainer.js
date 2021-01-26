import React from 'react';
import RoomsFilter from "./RoomFilter";
import RoomList from './RoomList';
import {withRoomConsumer} from '../context';

 function RoomsContainer({context}){
     const{loading,sortedRooms,rooms}=context;
     if(loading){
         return <div>loading...</div>
     }
    return(
        <>
            
            <RoomsFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </>
    );
}
export default withRoomConsumer(RoomsContainer);