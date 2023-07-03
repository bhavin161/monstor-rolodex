import React from "react";
import './search.css'

export const Search = ({placeholder,handle})=>{
    return <div ><input className="search-design" type='search' placeholder={placeholder} onChange={handle}    /></div>
}