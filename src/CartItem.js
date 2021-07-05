import React from 'react';
import './CartItem.css'

function CartItem({ id, name, price, qty, updateQty }) {

    const addOne = () => updateQty(id, qty + 1)
    const minusOne = () => updateQty(id, qty - 1)
    const total = qty * price;
    return (
        <div className='CartItem'>
            <div> {name} </div >
            <div> {price} </div >
            <div>
                <button onClick={addOne}>+</button>
                {qty}
                <button onClick={minusOne} disabled={qty <= 1}>-</button>
            </div >
            <div>Total: {total.toFixed(2)}</div>
        </div>
    )

}

export default CartItem;