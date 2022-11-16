import React from "react";
import "./Item.css"
import MyButton from "../MyButton/MyButton";
import {Link} from "react-router-dom";


function Item ({ id, titulo, img, categoria, stock, precio }) {
  
  const urlDetail = `/detail/${id}`;   

    return (
      <div className="card">
        <div className="card-img">
          <img src={img} alt={titulo}/>
        </div>
        <div className="card-detail">
          <h3> {titulo}</h3>
          <p> Categoria: {categoria}</p>
          <p> Stock: {stock}</p>
          <p> $ {precio}</p>
        </div>
        <Link to= {urlDetail}>
          <MyButton> Mira mas de cerca  </MyButton>
        </Link>
      </div>
    )
}

export default Item;