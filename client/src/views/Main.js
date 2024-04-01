import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from "axios";

export default () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)
    const removeFromDom = id => {
        setProducts(products.filter(product => product._id !== id))
    }
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products`)
            .then(products => {
                setProducts(products.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])
    return <div>
        <ProductForm />
        {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
    </div>
}