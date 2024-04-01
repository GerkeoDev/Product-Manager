import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import ProductForm from "../components/ProductForm"
import DeleteButton from "../components/DeleteButton"

export default () => {
    const {id} = useParams()
    const [data, setData] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [deleted, setDeleted] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setData({
                    title: res.data.title,
                    price: res.data.price,
                    description: res.data.description
                })
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [id])
    const updateProduct = product => {
        axios.put(`http://localhost:8000/api/product/${id}`, product)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    if(deleted){
        return <Navigate to="/"/>
    }
    return <div>
        <h1>Update a Product</h1>
        {loaded && (
            <>
                <ProductForm
                    onSubmitProp={updateProduct}
                    initialData={data}
                />
                <br/>
                <DeleteButton productId={id} successCallBack={()=> setDeleted(true)}/>
            </>
        )}
    </div>
}