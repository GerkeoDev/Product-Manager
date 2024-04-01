import axios from "axios"
import { Link } from "react-router-dom"

export default props => {
    const {removeFromDom} = props
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => removeFromDom(id))
            .catch(err => console.log(err))
    }
    return <div>
        <h1>All Products:</h1>
        {props.products.map((product, index) => {
            return <div key={index}>
                <Link to={`/${product._id}`}>{product.title}</Link>
                |
                <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
            </div>
        })}
    </div>
}