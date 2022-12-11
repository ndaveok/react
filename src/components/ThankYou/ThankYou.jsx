import React from 'react';
import { useParams } from 'react-router-dom';

function ThankYou() {
  const idOrder = useParams().idOrder; 

  return (
    <div> 
      <h1> En Hora Buena Visitante, Ya adquiriste tus nuevos Items. </h1> 
      <h3> La Id de tu  compra es : {idOrder} </h3>
    </div>

  )
}

export default ThankYou;