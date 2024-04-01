import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default () => {
    const {id} = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setData({
                title: res.data.title,
                price: res.data.price,
                description: res.data.description
            }))
            .catch(err => console.log(err))
    }, [id])
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title: data.title,
            price: data.price,
            description: data.description
        })
            .then(res => console.log(res))
    }
    return <div>
        <h1>Update a Product</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <p>
                <label>Title</label><br/>
                <input 
                    type="text" 
                    name="title"
                    value={data.title}
                    onChange={(e) => setData({
                        ...data,
                        title: e.target.value
                    })}
                />
            </p>
            <p>
                <label>Price</label><br/>
                <input 
                    type="text" 
                    name="price"
                    value={data.price}
                    onChange={(e) => setData({
                        ...data,
                        price: e.target.value
                    })}
                />
            </p>
            <p>
                <label>Description</label><br/>
                <input 
                    type="text" 
                    name="description"
                    value={data.description}
                    onChange={(e) => setData({
                        ...data,
                        description: e.target.value
                    })}
                />
            </p>
            <input type="submit"></input>
        </form>
    </div>
}