import React from 'react';
import './Card.css'
//card design
const Card = (props) => {
    const {name,yearsActive,writerImage,signatreImage,bookPrice,book} =props.writer;
    console.log(props.writer.bookPrice)
    return (
        <div className="card">

        <div>
        <img width='100%' src={writerImage} alt="" />
            <h3>{name}</h3>
            <p>{yearsActive}</p>
            <h5>books : "{book}"</h5>
            <h5>$ {bookPrice}</h5>
           
         <img width='100px' src={signatreImage} alt="" />
         <br />
         <button  className='button2'
         onClick={ () => props.handleAddToCart(props.bookPrice)}
         
         ><span>add to cart</span></button>
         </div>
        
       
            

        </div>
    );
};

export default Card;