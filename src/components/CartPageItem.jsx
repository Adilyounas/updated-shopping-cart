import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const CartPageItem = ({imgSrc,name,id,price,quantity,handlerAdd,handlerMinus,handlerDelete}) => {
  return (
    <div className="CartPageItem">
      <img src={imgSrc} alt="item" />

      <div className="productDetails">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>

      <div className="productbtn">
        <button  onClick={()=> handlerMinus(id)}>-</button>
        <p>{quantity}</p>
        <button onClick={()=> handlerAdd(id)}>+</button>
      </div>

      <div className="productImg">
        <AiOutlineDelete onClick={()=> handlerDelete(id)} />
      </div>
    </div>
  );
};

export default CartPageItem;
