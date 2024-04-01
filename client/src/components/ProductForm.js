import React, {useState} from 'react'
export default props => {
    const {initialData, onSubmitProp} = props
    const [product, setProduct] = useState(initialData)
    const handleChange = (e) => {
        const {name, value} = e.target
        setProduct({
            ...product,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitProp(product)
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label>Title </label><br/>
            <input type="text" name='title' value={product.title} onChange={(e) => handleChange(e)}/>
        </div><br/>
        <div>
            <label>Price </label><br/>
            <input type="number" name='price' value={product.price} onChange={(e) => handleChange(e)}/>
        </div><br/>
        <div>
            <label>Description </label><br/>
            <input type="text" name='description' value={product.description} onChange={(e) => handleChange(e)}/>
        </div><br/>
        <input type='submit' value={"Submit"}/>
    </form>
}