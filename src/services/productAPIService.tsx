import { Products } from "../models/Products";

const apiBaseUrl : string = "http://localhost:9001/"

export function getAllProductsAPI(){
    return fetch(apiBaseUrl + "products");
}

export function postProductAPI(data:Products){
    return fetch(apiBaseUrl + "products",
    { method: 'post',
    headers: {'Content-Type':'application/json'},
    mode:"cors",
    body: 
     JSON.stringify(data)
    });
};

export function deleteProductAPI(data:Products){
    return fetch(apiBaseUrl + "products",
    { method: 'DELETE',
    headers: {'Content-Type':'application/json'},
    mode:"cors",
    body: 
     JSON.stringify(data)
    });
};