import "./ItemDetail.css"

function itemDetail ({producto}) {
    return (
      <div className="card-detail">
      <div className="card-detail_img">
        <img src={producto.img} alt={producto.titulo} />
      </div>
      <div className="card-detail_detail">
        <h2>{producto.titulo}</h2>
        <p> Descripcion acorde al producto que se esta mostrando en la card</p>
        <p> Stock: {producto.stock}</p>
        <h4 className="priceTag">$ {producto.precio}</h4>
      </div>
    </div>
    )
}

export default itemDetail;