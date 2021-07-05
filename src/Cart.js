import React, { useState } from 'react';
import CartItem from './CartItem';
import './Cart.css'

function Cart({ initialItems }) {

    const [items, setItems] = useState(initialItems)

    const updateQty = (id, newQty) => {
        const newItems = items.map(a => {
            if (a.id === id) {
                return { ...a, qty: newQty }
            } else {
                return a;
            }
        });
        setItems(newItems)
    }

    const grandtotal = items.reduce((total, item) => (
        total + item.qty * item.price
    ), 0)

    return (
        <div className='Cart'>
            <h1> Shopping cart </h1>
            <div>
                {items.map(item => (
                    <CartItem key={item.id} updateQty={updateQty} {...item} />
                ))}
            </div>
            <h2>Grand total: {grandtotal.toFixed(2)}</h2>
        </div>
    )

}

export default Cart;