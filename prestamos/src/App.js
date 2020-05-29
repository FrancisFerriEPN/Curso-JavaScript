import React, { Fragment} from 'react';
import Header from './componentes/Header'

function App() {
  return (
    <Fragment>
        <Header
          titulo = "Cotizador de Prestamos"
          descripccion = "Utiliza el formulario y obten una cotizacion"
        />
    </Fragment>
  );
}

export default App;
