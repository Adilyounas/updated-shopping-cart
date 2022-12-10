import React from 'react'

const CartCard = ({ img,name,price,id,handler }) => {
    return (
        <div className="cart">
            <img src={img} alt="item" />
            <div>
                <h3>{name}</h3>
                <p>${price}</p>
            </div>
            <button onClick={()=> handler({ img,name,price,id,quantity:1 }) }>Add to Cart</button>

        </div>
    )
}

export default CartCard