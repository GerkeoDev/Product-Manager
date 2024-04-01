import axios from "axios"

export default props => {
    const {productId, successCallBack} = props
    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => successCallBack())
            .catch(err => console.log(err))
    }
    return <button onClick={deleteProduct}>Delete</button>
}