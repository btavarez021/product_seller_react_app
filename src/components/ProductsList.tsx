import React, { useEffect, useState } from "react";
import { Products } from "../models/Products"; 
import { getAllSellerAPI } from "../services/SellerAPIService";
import { getAllProductsAPI } from "../services/productAPIService";
import DeleteProduct from "./DeleteProduct"


const apiBaseUrl : string = "http://localhost:9001/"


export function ProductsList(){
    const [allProducts, setAllProducts] = useState<Products[]>([]);
    
    useEffect(() => {
        getAllProductsAPI()
            .then(response => response.json())
            .then(json => {
                setAllProducts(json);
                // console.log(json);
                // console.log(allProducts);
            });
     }, []);

     useEffect(() => {
        const fetchProducts = () => {
            getAllProductsAPI()
                .then(response => response.json())
                .then(data => setAllProducts(data))
                .catch(error => console.error("Error fetching products:", error));
        };
    
        fetchProducts(); // Initial fetch
        const intervalId = setInterval(fetchProducts, 5000); // Fetch products every 5 seconds
    
        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, []);


     useEffect(() => {
        const deletedProductIds = JSON.parse(localStorage.getItem('deletedProductIds') || '[]');
        const filteredProducts = allProducts.filter(product => !deletedProductIds.includes(product.productId));
        if(filteredProducts.length !== allProducts.length){
            setAllProducts(filteredProducts);
            }
        }, [allProducts]);


        const handleDeleteProduct = async (productId: string| undefined) => {
            if(typeof productId !== 'undefined'){
                try{
                    await fetch(`${apiBaseUrl}products\\${productId}`,{
                        method:'DELETE',
                        headers: {
                            'Content-Type':'application/json',},});
                    
                    setAllProducts(prevProduct => prevProduct.filter(product => product.productId !== String(productId)));
                    const deletedProductIds = JSON.parse(localStorage.getItem('deletedProductIds') || '[]');
                    localStorage.setItem('deletedProductIds', JSON.stringify([...deletedProductIds, productId]));
                } catch(error){
                    console.log("Error deleteing product:", error); 
                }
        }else{
            console.log("Invalid productId: ", productId);
        }
        }; 


    return (<>


    <h1>Product List:</h1>
             {allProducts.length > 0 ? (
                 <ul>
                     {allProducts.map((product, index) => (
                         <li key={index}>
                        <div className='seller-info'> 
                            <span className='product-property'>Product ID:</span><span className='product-value'>{product.productId}</span><br></br>
                             <span className='product-property'>Product Name:</span><span className='product-value'>{product.productName}</span><br></br>
                             <span className='product-property'>Product Price:</span><span className='product-value'>{product.price}</span><br></br>
                             <span className='product-property'>Seller Id:</span><span className='product-value'>{product.sellerId}</span><br></br>
                             <span className='product-property'>Seller Name:</span><span className='product-value'>{product.sellerName}</span><br></br><br></br>
                             </div>
                             <DeleteProduct onDelete={()=>handleDeleteProduct(product.productId)}/>
                             
                         </li>


                     ))}
                 </ul>
             ) : (
                <span id="loading-text">Loading...</span>
             )}
        </>
     ); 
}
