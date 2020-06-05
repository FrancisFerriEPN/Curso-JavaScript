import React, {Fragment, useState} from 'react';
import {calcular_total} from "../helpers";


const Formulario = (props) => {

    const {cantidad, guardar_cantidad, plazo, guardar_plazo, guardar_total, guardar_cargando} = props;
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

        // Eliminar error previo
        guardar_error(false);
        
        // Habilitar el spinner
        guardar_cargando(true);
        setTimeout(() => {
            // Realizar la cotizacion
            const total = calcular_total(cantidad, plazo);
            
            // Una vez calcuilado guiardar total
            guardar_total(total);

            // Desabilitar el spinner
            guardar_cargando(false);
        },3000);
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