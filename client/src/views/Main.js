import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from "axios";

export default () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)
    const initialData = {
        title: "",
        price: "",
        description: ""

    }
    const removeFromDom = id => {
        setProducts(products.filter(product => product._id !== id))
    }
    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(res => setProducts([...products, res.data]))
            .catch(err => console.log(err))
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
        <h1>Product Manager</h1>
        <ProductForm onSubmitProp={createProduct} initialData={initialData} />
        <hr/>
        {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
    </div>
}