import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({ children }) {

  const [cart, setCart] = useState([]);

  function addToCart(product, count) {

    let itemAlreadyInCart = cart.findIndex(
      (itemInCart) => itemInCart.id === product.id
    );

    let newCart = [...cart];

    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart);
    } 
    
    else {

      product.count = count;
      newCart.push(product);


      setCart(newCart);
    }
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }

  function clear() {

  }

  function removeItem(idRevove) {

  }

  function priceInCart() {
    let totalP = 0;
    cart.forEach((producto) => (totalP = totalP + (producto.price * producto.cantidad)));
    return totalP;
  }

  function alreadyInCart(id){

  }



  return (
    <cartContext.Provider
      value={{ addToCart, cart, itemsInCart, priceInCart }}>  
      {children}
    </cartContext.Provider>
  );
}