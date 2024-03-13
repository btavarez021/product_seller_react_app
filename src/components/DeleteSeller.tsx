import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons"

interface DeleteSellerProps{
    onDelete:() =>void;
}

const DeleteSeller:React.FC<DeleteSellerProps>=({onDelete}) =>
{
    
       return (
        <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={onDelete}/>
       
    );
};

export default DeleteSeller;