import React, {Fragment} from 'react'

//function Header({titulo}) { // Se puede alicar destructuring
function Header(props) {
    console.log(props);


    return(
        <Fragment>
            <h1>{props.titulo}</h1>
            <p>{1 + 1}</p> 
            <p>|1 + 1</p>
            <p>{props.descripcion}</p>
        </Fragment>
    )
}
export default Header