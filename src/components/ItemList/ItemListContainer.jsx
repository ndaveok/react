import React from 'react'
import Item from './Item';
import "./ItemListContainer.css"
import {useState, useEffect} from "react";
import getItems from '../../Services/mockService';
import {useParams} from "react-router-dom";


function ItemListContainer () {

  const [ productos, setProducts ] = useState ([]);
  const {idCategoria} = useParams ();

  async function getItemsAsync() {
    let respuesta = await getItems(idCategoria);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategoria]);


  
  return (
    <div className='ItemList'>
      {productos.map((producto) => {
        return (
          <Item
            key= {producto.id}
            id= {producto.id}
            titulo= {producto.titulo}
            img={producto.img}
            categoria= {producto.categoria}
            stock= {producto.stock}
            precio= {producto.precio}
          />
        )
      })}
    </div>
  );
}

export default ItemListContainer;