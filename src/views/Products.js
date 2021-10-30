import React, { useState, useEffect } from 'react';
import { ProductCard } from "../components/ProductCard";

export const Products = (props) => {
    const [products, setPosts] = useState([]);


    useEffect(() => {
        fetch('https://kekambas-bs.herokuapp.com/')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h1>This is the Posts Page</h1>
            {products.map(p => <ProductCard key={p.id} post={p} />)}
        </div>
    )    
}

