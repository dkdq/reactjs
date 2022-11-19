import React, { useState, useEffect } from 'react';
import "./App.css";
import SearchBar from './components/SearchBar/SearchBar';

// const products = [
//     'tooth paste',
//     'tooth brush',
//     'mouth wash',
//     'dental floss'
// ]

const App = () => {
    const [productState, setProductState] = useState([]);

    const hasProducts = productState.length > 0;

    // useEffect(() => {
    //     setTimeout(() => {
    //         setProductState([
    //             'tooth paste',
    //             'tooth brush',
    //             'mouth wash',
    //             'dental floss'
    //         ])
    //     }, 1000)
    // },[])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((productArray) => {
                const newProductState = productArray.map((product) => {
                    return product.title
                })
                setProductState(newProductState)
            })
    },[])

    return (
        <>
            {hasProducts ? <SearchBar products={productState} /> : 'Loading..'}
            {/* {hasProducts ? <SearchBar products={products} /> : 'Loading..'} */}
        </>
    )
}

export default App;