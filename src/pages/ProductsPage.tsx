import React from "react";
import { Navbar } from "../components/Navbar";
import { ProductsList } from "../components/ProductsList";
import { ProductSubmit } from "../components/ProductSubmit";

export function ProductsPage(){
    return(
        <>
        <Navbar></Navbar>
        <ProductsList></ProductsList>
        <ProductSubmit></ProductSubmit>
        </>
    )
}