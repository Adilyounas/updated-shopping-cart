import React,{useEffect,useState} from "react";
import CartPageItem from "./CartPageItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Cart = () => {
const [save, setSave] = useState(false)
const {cart} = useSelector((state)=> state)


useEffect(()=>{
  if (!save) {
    localStorage.setItem("dataArray",JSON.stringify(cart)  )
  }

  setSave(true)
},[save,cart])


  const { cartPageArray,subTotal,shipping,tax,total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const incrementItem = (id) => {
    dispatch({
      type: "increment",
      payload: id,
    });

    dispatch({
      type:"calculates",
    })
  setSave(false)

  };

  const decrementItem = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });

    dispatch({
      type:"calculates",
    })

  setSave(false)

  };

  const deleteItem = (id) => {
    dispatch({
      type: "deleted",
      payload: id,
    });

    dispatch({
      type:"calculates",
    })

  setSave(false)

  };

  return (
    <div className="cartPage">
      <main>
        {cartPageArray.length>0?cartPageArray.map((i) => {
          return (
            <CartPageItem
              imgSrc={i.img}
              name={i.name}
              id={i.id}
              price={i.price}
              quantity={i.quantity}
              key={i.id}
              handlerAdd={incrementItem}
              handlerMinus={decrementItem}
              handlerDelete={deleteItem}
            />
          );
        }):(<h2 style={{color:"white",fontSize:"30px",letterSpacing:"2px"}}>No Item Is Added Yet</h2>)        }
      </main>

      <aside>
        <h4> SubTotal:${subTotal}</h4>
        <h4> Shipping:${shipping}</h4>
        <h4> Tax:${tax}</h4>
        <h4> Total:${total}</h4>
      </aside>
    </div>
  );
};

export default Cart;
