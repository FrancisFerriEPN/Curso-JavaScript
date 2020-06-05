import React, { Fragment, useState} from 'react';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import Mensaje from './componentes/Mensaje'
import Resultado from './componentes/Resultado'

function App() {
   // Definir un state
   const [cantidad, guardar_cantidad] = useState(0);
   const [plazo, guardar_plazo] = useState("");
   const [total,guardar_total] = useState(0);

   let componete;
  if(total === 0){
    componete = <Mensaje />
  } else {
    componete = <Resultado 
                  total = {total}
                  plazo = {plazo}
                  cantidad = {cantidad}
                />
  }

  return (
    <Fragment>
        <Header
          titulo = "Cotizador de Prestamos"
          descripccion = "Utiliza el formulario y obten una cotizacion"
        />
        <div className = "container">
          <Formulario
            cantidad = {cantidad}
            guardar_cantidad = {guardar_cantidad}
            plazo = {plazo}
            guardar_plazo = {guardar_plazo}
            total = {total}
            guardar_total = {guardar_total}
          />
          <div className="mensajes">
            {componete}
          </div>
        </div>
    </Fragment>
  );
}

export default App;
