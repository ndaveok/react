import productos from "../data/data";   

function getItems (idCategoria) {
    return new Promise ( (resolve) => {

      if (idCategoria === undefined) {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      } else {
        setTimeout(() => {
          let itemRequerido = productos.filter((item) => item.categoria === idCategoria);
          resolve(itemRequerido);
        }, 2000);
      }
    });
}

export function getSingleItem (paramId) {
  return new Promise ( (resolve, ) => {
    let itemRequerido = productos.find( (item) => item.id === parseInt (paramId) )

    setTimeout (() => {
      resolve ( itemRequerido);
    },  2000);
  });
}

export default getItems;