import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/firestore";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import Loader from "../Loaders/Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  const [isLoading, setIsLoading] = useState(true)

  const { idItem } = useParams();
  console.log(useParams());

  async function getItemsAsync() {
    let respuesta = await getSingleItem(idItem);
    setProduct(respuesta);
    setIsLoading ( false); 
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  if ( isLoading )
    return ( <Loader/>)

  return <ItemDetail product={product} />;
}
export default ItemDetailContainer;