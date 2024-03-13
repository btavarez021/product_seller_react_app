import React, { SyntheticEvent, useState } from "react";
import { getAllSellerAPI, postSellerAPI } from "../services/SellerAPIService";
import { SellerModel } from '../models/SellerModel';

export function SellerSubmit(){
    const [sellerId, setSellerId] = useState<string>("")
    const [sellerName, setSellerName] = useState<string>("")

    function sellerIdHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement
        setSellerId(textBox.value);
        console.log(textBox.value)
    }
   
    function sellerNameHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement
        setSellerName(textBox.value);
        console.log(textBox.value)
    }


    function buttonClickHandler(){
        
        // const [productName, price, sellerName] = 
        // userInput.split(",");


        const sellerData = {
            sellerId:parseInt(sellerId,10), 
            sellerName: sellerName
        }
        
   
        postSellerAPI(sellerData).then(response => {
                if (response.ok) {
                    console.log("Seller created successfully");
                    setSellerId("");
                    setSellerName("");

                } else {
                    console.log("Failed to create seller: " + response.statusText);
                }
            }).catch(error => {
                console.error("Error:", error);
            });} 
        
    
    
        return(<>
    
            <h1>Submit a New Seller</h1>
            <div className="input-container">
                <label>Seller Name: </label>
                <input type="text" onChange={sellerNameHandler} value={sellerName}></input>
            </div>
                <button onClick={buttonClickHandler}>Submit</button>
            </>
            );
}