import React from 'react'

//function Header({titulo}) { // Se puede alicar destructuring

// Forma 3
const  Header = ({titulo}) => (
    <h1>{titulo}</h1>
);

// Forma 2
/* const  Header = ({titulo}) => {
    const total = 1 + 2;
    return ( 
        <h1>{total}</h1>
    );
};
 */
// Forma 1
/*
const  Header = ({titulo}) => {
    return ( 
        <Fragment>
            <h1>{titulo}</h1>
        </Fragment>
     );
}
*/

export default Header