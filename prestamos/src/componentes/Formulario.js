import React, {Fragment, useState} from 'react';

const Formulario = ({cantidad, guardar_cantidad, plazo, guardar_plazo}) => {

    // definir state
    const [error, guardar_error] = useState(false);
   // Cuando el usuario hace submit
   const calcularPrestamo = e => {
        e.preventDefault();

        // Validar
        if (cantidad === 0 || plazo === ""){
            guardar_error(true);
            return;
        }

        // ELiminar error previo
        guardar_error(false);
        // Realizar la cotizacion
   }

    return ( 
    <Fragment>
        <form onSubmit={ calcularPrestamo }>
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000" 
                        onChange = {e =>  guardar_cantidad(parseInt(e.target.value))}
                        />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select 
                        className="u-full-width"
                        onChange = {e =>  guardar_plazo(parseInt(e.target.value))}
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Calcular" 
                        className="button-primary u-full-width" 
                    />
                </div>
            </div>
    </form>
    {(error)?  <p className = "error">Todos los campos son obligatorios</p> : null}
   
</Fragment>
     );
}
 
export default Formulario;