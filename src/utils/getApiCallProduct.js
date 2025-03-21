

async function fetchProductList() {
    try {
      const product = await fetch("https://fakestoreapi.com/products/");
      const productList = await product.json();
      return productList;
     
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  export default fetchProductList;