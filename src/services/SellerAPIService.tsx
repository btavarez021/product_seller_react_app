import { SellerModel } from '../models/SellerModel';

const apiBaseURL : string = "http://localhost:9001/"

export function getAllSellerAPI(){
    return fetch(apiBaseURL + "seller");
}
export function postSellerAPI(data:SellerModel){
    return fetch(apiBaseURL + "seller",
    {method:"POST",
    mode:"cors",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)});
}



