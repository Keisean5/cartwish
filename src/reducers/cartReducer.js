const cartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedCart = [...cart];
      //Finding if the Product is Already in the Cart
      const productIndex = updatedCart.findIndex(
        (item) => item.product._id === product._id
      );
      const { product, quantity } = action.payload;

      //Adding or Updating the Cart
      //if the product does not exist in the cart, add a new object into the array with the product and quantity
      if (productIndex === -1) {
        updatedCart.push({ product: product, quantity: quantity });
      } else {
        //if the product does exist in the cart, increase the quantity
        updatedCart[productIndex].quantity += quantity;
      }

      return updatedCart;

    case "GET_CART":
      return action.payload.products;

    case "REVERT_CART":
      return action.payload.cart;

    case "REMOVE_FROM_CART":
      const oldCart = [...cart];
      const newCart = oldCart.filter(
        (item) => item.product._id !== action.payload.id
      );
      return newCart;
  }
};

export default cartReducer;
