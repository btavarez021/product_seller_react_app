import React from "react";
import { SellerModel } from '../models/SellerModel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface SellerProps{
    seller:SellerModel;
    onDelete:()=>void;

}

const Seller: React.FC<SellerProps>=
({seller,onDelete})=>{

    const handleDelete=()=>
    {
        onDelete();
    };
  return(
    <div className='seller-info'> 
        <p>Seller ID:{seller.sellerId}</p>
        <p>Seller Name:{seller.sellerName}</p>
        <FontAwesomeIcon icon={faTrash}className="delete-icon" onClick={onDelete}/>
    </div>
);

}

export default Seller;