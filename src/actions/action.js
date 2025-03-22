export function setProductList(productList) {
  return {
    type: "PRODUCTLIST",
    productList,
  };
}

export function setTotalCartItem() {
  return {
    type: "TOTALCARTITEMCOUNT",
  };
}

export function setCartProduct(product) {
  return {
    type: "CARTPRODUCT",
    product,
  };
}

export function setCartOpen(isOpen) {
  return {
    type: "ISOPEN",
    isOpen,
  };
}

export function setItemCount(){
    return {
        type: "ITEMCOUNT"
    }
}