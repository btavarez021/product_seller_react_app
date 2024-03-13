import React from "react";
import { Products } from "../models/Products"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface ProductProps{
    product:Products;
    onDelete:()=>void;

}

const Seller: React.FC<ProductProps>=
({product ,onDelete})=>{

    const handleDelete=()=>
    {
        onDelete();
    };
  return(
    <div className='seller-info'> 
        {/* <p>Seller ID:{product.sellerId}</p> */}
        <p>Seller Name:{product.sellerName}</p>
        <FontAwesomeIcon icon={faTrash}className="delete-icon" onClick={onDelete}/>
    </div>
);

}

export default Seller;