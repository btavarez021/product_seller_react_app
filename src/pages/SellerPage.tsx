import React from "react";
import { SellerList } from "../components/SellerList";
import { SellerSubmit } from "../components/SellerSubmit";
import { Navbar } from "../components/Navbar";

export function SellerPage(){
    return(<>
    <Navbar></Navbar>
    <SellerList></SellerList>
    <SellerSubmit></SellerSubmit>
    </>)
}