import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartOpen,
  // setIncreamentCartItem,
  // setDecreamentCartItem,
} from "../actions/action";
export default function Cart() {
  const cartProduct = useSelector((state) => state.cartItem.product);
  const quantity = useSelector((state) => state.cartItem.itemCount);
  const dispatch = useDispatch();

  function handleCancel() {
    dispatch(setCartOpen(false));
  }

  // function handleDecrease(){
  //   dispatch(setDecreamentCartItem())
  // }

  return (
    <>
      <div id="cart">
        <div className="cart_content">
          <div className="cart_head">
            <h2>
              Cart <small></small>
            </h2>
            <div title="Close" className="close_btn" onClick={handleCancel}>
              <span>&times;</span>
            </div>
          </div>
          <div className="cart_body">
              <h2>Cart is empty</h2>
           
                <div className="cart_items">
                  <figure className="cart_items_img">
                    <img src="" alt="product-img" />
                  </figure>

                  <div className="cart_items_info">
                    <h4></h4>
                    <h3 className="price"></h3>
                  </div>

                  <div className="cart_items_quantity">
                    <span>
                      &#8722;
                    </span>
                    <b></b>
                    <span >
                      &#43;
                    </span>
                  </div>

                  <div title="Remove Item" className="cart_items_delete">
                    <span>&times;</span>
                  </div>
                </div>
  
          </div>

          <div className="cart_foot">
            <h3>
              <small>Total:</small>
              <b>₹ 200</b>
            </h3>

            <button type="button" className="checkout_btn">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
