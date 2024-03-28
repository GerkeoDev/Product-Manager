import React, {useState} from 'react'
import axios from 'axios'
export default () => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setProduct({
            ...product,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/product', {
            title: product.title,
            price: product.price,
            description: product.description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        console.log(product)
    }
    return <form onSubmit={handleSubmit}>
        
        <h1>Product Manager</h1>
        <div>
            <label>Title </label>
            <input type="text" name='title' value={product.title} onChange={(e) => handleChange(e)}/>
        </div>
        <div>
            <label>Price </label>
            <input type="number" name='price' value={product.price} onChange={(e) => handleChange(e)}/>
        </div>
        <div>
            <label>Description </label>
            <input type="text" name='description' value={product.description} onChange={(e) => handleChange(e)}/>
        </div>
        <input type='submit' value={"Submit"}/>
    </form>
}