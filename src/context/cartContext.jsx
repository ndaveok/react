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
    setCart([]);
  }

  function removeItem(itemIdR){
    setCart(cart.filter(product =>product.id !== itemIdR));
}


  function priceInCart() {
    let total = 0;
    cart.forEach((product) => (total = total + (product.price * product.count)));
    return total;
  }


  return (
    <cartContext.Provider
      value={{ addToCart, cart, itemsInCart, priceInCart, clear,removeItem }}>  
      {children}
    </cartContext.Provider>
  );
}