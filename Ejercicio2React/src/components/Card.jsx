import React from 'react';
import './Card.css';

export default function Card({name, price, description, imgs, stock, newCollection}){
    var imageProduct ="assets/images/"+imgs.imgProduct;
    if(stock<45){
        imageProduct = "assets/images/"+imgs.imgSoldOut
    }

    const showNewCollection = () =>{
        return(
            newCollection && 
            <span className='new'>
            <img className= "star" src={"./assets/images/"+imgs.imgStar} alt="" />
            New 
            </span>
        )
    }

    return (
        <article className="card">
            <section className='card-container-img'>
                {showNewCollection()}
                <img className="img-product" src={ imageProduct } alt={name} />
            </section>
            <section>
                <h2>{name}</h2>
                <h2>
                    {price}€
                    {price<200 && <span style={{marginLeft:"10px"}}>30% off</span>}
                </h2>
                <h2>{description}</h2>
            </section>
        </article>
      )

}




