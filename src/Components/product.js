import '../Styles/product.css'
const Product = ({sku,nom, price, description, createdAt, updatedAt}) =>{
    return(
        <div className="product">
            <h1 className="ProductName">Products name : {nom}</h1>
            <p>product sku code : {sku}</p>
            <p>Price :  {price} $</p>
            <p>Description :  {description}</p>
            <p>Created att :{createdAt}</p>
            <p> Updated Att : {updatedAt}</p>
        </div>
    )
}
export default Product;