import axios from "axios"
import { useEffect, useState } from "react"
import { useParams , Link, Navigate} from "react-router-dom"
import DeleteButton from "../components/DeleteButton"

export default () => {
    const [product, setProduct] = useState({})
    const [deleted, setDeleted] = useState(false)
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(product => setProduct(product.data))
            .catch(err => console.log(err))
    }, [id])
    if(deleted){
        return <Navigate to={"/"}/>
    }
    return <div>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <Link to={`/${id}/edit`}>Edit</Link>
        <br/><br/>
        <DeleteButton productId={id} successCallBack={()=> setDeleted(true)}/>
    </div>
}