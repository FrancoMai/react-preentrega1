import { useState } from "react";

const [search, setsearch] = useState('')
const searcher = (e) =>{
    setsearch(e.target.value)
    return (
        results()
    )
} 

const results = !search ? products : products.filter((data => data.name.toLowerCase().includes(search.toLocaleLowerCase())))