import React from 'react';
import { Rate } from 'antd';
import Header from '../components/Header';
import "./Product.css";
import { useLocation } from "react-router"
import Purchase from '../components/Purchase';

const Product = () => {

  let {state: produkte} = useLocation();  
  return (
  <>
  <div className="container">
    <Header />
  <div className="product-content">
  <div>
  <div className="product-img">
    <img src={produkte.image} alt="product" width="100%"></img>
  </div>
  <p style={{ textAlign: "center" }}></p>
  </div>
  <div className="product-details">
        <h1>{produkte.Name}</h1>
        <Rate value={produkte.rating} disabled={true}></Rate>
        <hr></hr>
        <p>
          Preis:
          <span className="price"> €{produkte.price}</span>
        </p>
        <p>
          Versandkostenfrei
        </p>
        <hr></hr>
        <h3>Über das Produkt</h3>
        <p>
          {produkte.about}
        </p>
        </div>
        <div className="purchase-details">
        <Purchase produkte={produkte}/>
             </div>
  </div>
</div>
</>
  )
}

export default Product;