
export default props => {
    return <div>
        <h1>All Products:</h1>
        {props.products.map((product, index) => {
            return <div key={index}>
                <a href={`http://localhost:3000/${product._id}`}>{product.title}</a>
            </div>
        })}
    </div>
}