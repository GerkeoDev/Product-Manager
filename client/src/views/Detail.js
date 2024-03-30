import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(product => setProduct(product.data))
            .catch(err => console.log(err))
    }, [id])
    return <div>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
    </div>
}