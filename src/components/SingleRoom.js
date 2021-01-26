import React from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from './Hero';
import Banner from './Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from './StyledHero';

class SingleRoom extends React.Component{
    static contextType=RoomContext;
    
   // componentDidMount(){
       //const{getRoom}=this.context;
       //const room= getRoom(this.props.match.params.slug);
       //console.log(room);
   // }

    render(){
        const{getRoom}=this.context;
        const room= getRoom(this.props.match.params.slug);
        //console.log(room);
        if(!room){
               return <div className='error'>
                   <h3>no room</h3>
                   <Link to="/rooms" className="btn-primary">
                       Back To Rooms
                   </Link>
               </div>
            }
            const{name,description,capacity,size,price,extras,breakfast,pets,images}=room;
            const [mainImg,...defaultImg]=images;
       return (
           <>
           <StyledHero img={mainImg}>
               <Banner title={`${name} room`}>
                   <Link to="/rooms" className="btn-primary">
                       Back To Rooms
                   </Link>
               </Banner>
           </StyledHero>
           <section className="single-room">
               <div className="single-room-images">
                   {defaultImg.map((item,index)=>{
                       return <img src={item} key={index} alt='img'></img>
                   })}
               </div>
               <div className="single-room-info">
                   <article className="desc">
                       <h3>Details</h3>
                <p>{description}</p>
                   </article>
                   <article className="info">
                       <h3>Info</h3>
                       <h6>Price: ${price}</h6>
                       <h6>Size:{size}SQFT</h6>
                <h6>max capacity:{capacity}</h6>
                <h6>{pets?"pets allowed":"no pets allowed"}</h6>
                <h6>{breakfast && "free breakfast included"}</h6>
                   </article>
               </div>
           </section>
           <section className="room-extras">
               <h6>extras</h6>
               <ul className="extras">
                   {extras.map((item,index)=>{
                       return<li key="index" >-{item}</li>;
                   })}
               </ul>
           </section>
           </>
       )
        
    }
};

export default SingleRoom;