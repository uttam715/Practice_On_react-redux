import React, { useEffect, useState } from "react"
import { setCartProduct, setTotalCartItem } from "../actions/action";
import {useDispatch, useSelector} from "react-redux";
export default function ProductCard({product}){
    const [isAdd, setIsAdd] = useState(false);
    const cartProduct = useSelector((state)=> state.cartItem.product);
    const dispatch = useDispatch();

    useEffect(()=>{
      console.log("cart item",cartProduct);
    },[cartProduct])

    function handleAddClick(){
        setIsAdd(true);
        dispatch(setTotalCartItem());
        dispatch(setCartProduct(product));
        setTimeout(()=>setIsAdd(false), 3000);
    }
    return(
        <div className="product_card" key={product.id}>
          <figure>
            <img src={product.image} alt="item-img" />
          </figure>
          <strong className="rating">{product.rating.rate}</strong>
          <h4 className="title">{product.title}</h4>
          <h3 className="price">₹ {product.price.toLocaleString()}</h3>
          <button type="button" className="btn" onClick={handleAddClick}>{isAdd ?"Move to cart" :"Add to cart"}</button>
        </div>
    )
}