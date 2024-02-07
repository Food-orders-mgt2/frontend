import React from "react";
import '../Style/CardForProduct.css'
import product from '../assets/product.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export default function CardForProduct() {
    return <>
       <div className="card-body">
              <div className="col">
              <img className='img-product' src={product}  alt="Logo" />
                <p className="mt-3">Prix: 223$</p>
              </div>
              <div className="col">
              <h5 className="card-title">Légumes </h5>
              <p className="card-text">Découvrez une explosion de saveurs avec nos légumes délicieux .</p><div>
                 <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                 <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                 <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                 </div>
              </div>
            </div>  
    </>
}