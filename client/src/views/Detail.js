import axios from "axios"
import { useEffect, useState } from "react"
import { useParams , Link, Navigate} from "react-router-dom"

export default () => {
    const [product, setProduct] = useState({})
    const [deleted, setDeleted] = useState(false)
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(product => setProduct(product.data))
            .catch(err => console.log(err))
    }, [id])
    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res)
                setDeleted(true)
            })
            .catch(err => console.log(err))
    }
    if(deleted){
        return <Navigate to={"/"}/>
    }
    return <div>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <Link to={`/${id}/edit`}>Edit</Link>
        <br/><br/>
        <button onClick={deleteProduct}>Delete Product</button>
    </div>
}
//ELIMINAR TAMBIEN DESDE ACA Y REDIRIGIR A LA PAGINA PRINCIPAL