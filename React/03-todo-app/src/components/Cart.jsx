import { useState } from "react"
import Counter from "./Counter"

const Cart = () => {

    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 100, quantity: 1 },
        { id: 2, name: 'Product 2', price: 200, quantity: 2 },
        { id: 3, name: 'Product 3', price: 300, quantity: 3 },
        { id: 4, name: 'Product 4', price: 400, quantity: 4 },
        { id: 5, name: 'Product 5', price: 500, quantity: 5 },
    ])

    const handleQuantityChange = (productId, newQuantity) => {
        console.log(`Product ID: ${productId}, New Quantity: ${newQuantity}`);
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === productId ? { ...product, quantity: newQuantity } : product
            )
        );
    }

    return (
        <div>
            {
                products.map((product, index) => (
                    <li key={product.id} style={{ marginBottom: '1rem' }}>
                        <span style={{ marginRight: '1rem' }}>{product.name} - ${product.price}</span>
                        <Counter productId={product.id} quantity={product.quantity} onUpdate={handleQuantityChange} />
                    </li>
                ))
            }
        </div>
    )
}

export default Cart
