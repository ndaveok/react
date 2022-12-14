import React from "react";
import Item from "./Item";

function ItemList ({products}) {
  return(
    <div className="item-list">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            imgurl={product.imgurl}
            title={product.title}
            price={product.price}
            category={product.category}
            color="darkgreen"
          />
        );
      })}
    </div>
    )
}

export default ItemList;