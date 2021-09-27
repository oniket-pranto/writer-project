import './Writer.css'
import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';

const Writer = () => {

const [writers, setWriter] =useState([]);
const [book,setBook]=useState([])
// data load from json file
useEffect( ()=>{
    
    fetch('./writer.json')
    .then(res=>res.json())
    .then(data=>setWriter(data))
},[])

const handleAddToCart = (writer) =>{
    console.log(56)
    const newBook =[...book,writer]
    
}
    return (
        <div className='container'>
           <div className="writer-container">
           
            
            {
                // loop through by map
                // key added for react-wanted
                writers.map(writer=><Card writer={writer} key={writer.unique}
                    handleAddToCart={handleAddToCart}
                    ></Card>)
               
            }
           
           </div>

           
           <div className="cart-container">
           <h4>Total Added:{book.length} </h4>
           <h3>Total Cost:  <span>$ 158</span> </h3>
           </div>
        </div>
    );
};


export default Writer;