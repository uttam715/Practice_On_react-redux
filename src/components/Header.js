import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartOpen } from "../actions/action";
export default function Header() {
  const totalCartItem = useSelector((state) => state.cartItem.count);
  const dispatch = useDispatch();

  
  function handleCartClick(){
    dispatch(setCartOpen(true));
  }
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="navbar">
            <h4>Redux Shopping Cart</h4>
            <div className="nav_menu">
              <div title="Cart" className="cart_icon cart" onClick={handleCartClick}>
                <img className="cartimag"
                  src="data:image/png;base64,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"
                  alt="bag-icon"
                />
                <span className="badge">{totalCartItem}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
