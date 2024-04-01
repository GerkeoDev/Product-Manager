import { Link } from "react-router-dom"
import DeleteButton from "./DeleteButton"

export default props => {
    const {removeFromDom} = props
    return <div>
        <h1>All Products:</h1>
        {props.products.map((product, index) => {
            return <div key={index}>
                <Link to={`/${product._id}`}>{product.title}</Link>
                |
                {/* <button onClick={(e) => deleteProduct(product._id)}>Delete</button> */}
                <Link to={`/${product._id}/edit`}>Edit</Link>
                |
                <DeleteButton productId={product._id} successCallBack={()=> removeFromDom(product._id)}/>
            </div>
        })}
    </div>
}