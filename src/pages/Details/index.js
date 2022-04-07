import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Details(props){
    const id = useParams()

    useEffect(() => {
        console.log(id)
    },[])

    return(
        <>
        </>
    )
}