import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from './Title';

const getUnique=(items,value)=>{
    return[...new Set(items.map(item=>item[value]))]
};

const RoomFilter=({rooms})=>{
    const context = useContext(RoomContext);
    console.log(context);
    const{
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,
        breakfast,pets}=context;
        //get unique types
        let types=getUnique(rooms,'type');
        //add all
        types=[...types,'all'];//console.log(types);
        //map to jsx
        types=types.map((item,index)=>{
            return <option value={item} key={index}>{item}</option>
        });

        let people=getUnique(rooms,'capacity');
        people =people.map((item,index)=>{
            return<option key={index} value={item}>{item}</option>
        });

    return(<section className="filter-container">
    <Title title="search rooms"></Title>
    <form className="filter-form">


    <div className="form-group">
        <label htmlFor="type">Room Type</label>
      <select  name="type" id="type" value={type}
              onChange={handleChange} className="form-control">
        {types}
      </select>
    </div>

    <div className="form-group">
        <label htmlFor="capacity">Guests</label>
      <select  name="capacity" id="capacity" value={capacity}
              onChange={handleChange} className="form-control">
        {people}
      </select>
    </div>

    <div className="form-group">
        <label htmlFor="price">room price ${price}</label>
        <input type="range" name="price" min={minPrice} max={maxPrice}
        id="price" value={price} onChange={handleChange} className="form-control"/>
    </div>

<div className="form-group">
    <div className="single-extra">
        <input type="checkbox" name="breakfast" id="breakfast"
        checked={breakfast} onChange={handleChange}/>
        <label htmlFor="breakfast">breakfast</label>
    </div>

    <div className="single-extra">
        <input type="checkbox" name="pets" id="pets"
        checked={pets} onChange={handleChange}/>
        <label htmlFor="pets">pets</label>
    </div>
</div>

    </form>
  </section>
  
    
       
    );
}

export default RoomFilter;