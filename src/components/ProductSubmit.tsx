import React, { SyntheticEvent, useState } from "react";
import { Products } from "../models/Products";
import { postProductAPI } from "../services/productAPIService";
import { privateDecrypt } from "crypto";

export function ProductSubmit(){
    const [productId, setProductId] = useState<string>("")
    const [productName, setProductName] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const [sellerName, setSellerName] = useState<string>("")
    const [sellerId, setSellerId] = useState<string>("")


    function productNameHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement
        const inputValue = textBox.value.trim();

        setProductName(textBox.value);
        console.log(textBox.value)
    }
    function priceHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement
        setPrice(textBox.value);
        console.log(textBox.value)
    }
    function sellerNameHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement
        setSellerName(textBox.value);
        console.log(textBox.value)
    }

    function buttonClickHandler(){
        let errorMessage = "";
        
        if(productName.trim() === ""){
            errorMessage = "Please enter a product name.";
            alert(errorMessage);
        }
        else if(isNaN(parseFloat(price.trim()))){
            errorMessage = "Price must be a valid number.";
            alert(errorMessage);
            return;
        }
        else if(sellerName.trim() === ""){
            errorMessage = "Please enter a seller name.";
            alert(errorMessage);
        }

        if(errorMessage){
            alert(errorMessage);
            return;
        }

        const productData = {
            productName:productName, 
            price: parseFloat(price),
            sellerName: sellerName,
        }
        
            postProductAPI(productData).then(response => {
                if (response.ok) {
                    console.log("Product created successfully");
                    setSellerId("");
                    setProductName("");
                    setPrice("");
                    setSellerName("");
                    setSellerId("");

                } else {
                    console.log("Failed to create product: " + response.statusText);
                    if(response.status === 400){
                        {
                            response.json().then(data =>{
                                if(data.error){
                                    errorMessage = data.error;
                                }else{
                                    errorMessage = "Failed to create product: " + response.statusText;
                                }
                                console.log(errorMessage);
                            })
                        }
                    }
                }
            }).catch(error => {
                console.error("Error:", error);
            });
                
        }

    return(<>
    <h1>Submit a New Product</h1>
    <div className="input-container">
        <label>Product Name:</label>
         <input type="text" onChange={productNameHandler} value={productName}></input>
    </div>
    <div className="input-container">
        <label>Price:</label>
        <input type="text" onChange={priceHandler} value={price}></input>
    </div>
    <div className="input-container">
        <label>Seller Name: </label>
        <input type="text" onChange={sellerNameHandler} value={sellerName}></input>
    </div>
        <button onClick={buttonClickHandler}>Submit</button>
    </>)
}