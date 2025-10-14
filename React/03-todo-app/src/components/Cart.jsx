import { useState } from "react";
import Counter from "./Counter"

const Cart = () => {

    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", price: 100, qty: 1 },
        { id: 2, name: "Product 2", price: 200, qty: 2 },
        { id: 3, name: "Product 3", price: 300, qty: 3 },
        { id: 4, name: "Product 4", price: 400, qty: 4 },
        { id: 5, name: "Product 5", price: 500, qty: 5 },
    ]);

    const handleQuantityChange = (id, quantity) => {
        const updatedProducts = products.map(product => {
            if (product.id === id)
                return { ...product, qty: quantity };
            return product;
        })

        setProducts(updatedProducts);
        console.log(updatedProducts);
    }

    return (
        <ul>
            {products.map(product => (
                <li key={product.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    {product.name} - Rs.{product.price} <Counter qty={product.qty} id={product.id} handleQuantityChange={handleQuantityChange} />
                </li>
            ))}
        </ul>
    )
}

export default Cart
