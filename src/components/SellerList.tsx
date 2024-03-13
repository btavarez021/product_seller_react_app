import React, { SyntheticEvent, useEffect, useState } from "react";
import { getAllSellerAPI, postSellerAPI } from "../services/SellerAPIService";
import { SellerModel } from '../models/SellerModel';
import DeleteSeller from "./DeleteSeller";



export function SellerList(){
    const [allSellers, setAllSellers] = useState<SellerModel[]>([]);
    
    useEffect(() => {
        getAllSellerAPI()
            .then(response => response.json())
            .then(json => {
                setAllSellers(json);
                // console.log(json);
                // console.log(allProducts);
            });
     }, []);

     useEffect(() => {
        const fetchProducts = () => {
            getAllSellerAPI()
                .then(response => response.json())
                .then(data => setAllSellers(data))
                .catch(error => console.error("Error fetching products:", error));
        };
    
        fetchProducts(); // Initial fetch
        const intervalId = setInterval(fetchProducts, 5000); // Fetch products every 5 seconds
    
        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, []);



    return (<>
    <h1>Seller List:</h1>
             {allSellers.length > 0 ? (
                 <ul>
                     {allSellers.map((seller, index) => (
                         <li key={index}>
                            <div className='seller-info'> 
                             <span className='seller-property'>Seller Id:</span><span className='product-value'>{seller.sellerId}</span><br></br>
                             <span className='seller-property'>Seller Name:</span><span className='product-value'>{seller.sellerName}</span>
                             </div>
                             {/* <DeleteSeller onDelete={()=>handleDeleteSeller(seller.sellerId)}/> */}

                         </li>
                     ))}
                 </ul>
             ) : (
                 <span id="loading-text">Loading...</span>
             )}
        </>
     ); 

        }
    

