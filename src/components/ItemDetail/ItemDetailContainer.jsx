// import Item from './Item';
// import "./ItemListContainer.css"
import {useState, useEffect} from "react";
// import productos from '../../data/data';
import {getSingleItem} from '../../Services/mockService';
import ItemDetail from './ItemDetail';
import {useParams} from "react-router-dom";




function ItemDetailContainer() {
  const [producto, setProduct] = useState([]);

  const {id} = useParams();


  async function getItemsAsync() {
    let respuesta = await getSingleItem(id);
    setProduct(respuesta);  
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return <ItemDetail producto={producto} />;
}
export default ItemDetailContainer;