import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons"

interface DeleteProductProps{
    onDelete:() =>void;
}

const DeleteProduct:React.FC<DeleteProductProps>=({onDelete}) =>
{
    
       return (
        <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={onDelete}/>
       
    );
};

export default DeleteProduct;