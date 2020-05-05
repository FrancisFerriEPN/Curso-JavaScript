function Constructor_sitios(){
    this.crear_elemmento = (texto, tipo) => {
        let html;
        if (tipo === "input"){
            html = new InputHTML(texto);
        } else if(tipo === 'img'){
            html = new ImagenHTML(texto);
        } else if (tipo === "h1"){
            html = new HeadingHTML(texto);
        } else if (tipo === "p"){
            html = new ParrafoHTML(texto);
        }
        html.tipo = tipo;
        html.mostrar = function(){
            const elemento = document.createElement(this.tipo);
            if(this.tipo === "input"){
                
                //<<<
                // Esta funcion no sale por defecto
                elemento.setAttribute('placeholder', this.texto);
                //>>>
                
            }else if(this.tipo === "img"){
                elemento.setAttribute('src', this.texto);              
            }else {
                elemento.appendChild(document.createTextNode(this.texto));               
            }
            document.querySelector("#app").appendChild(elemento);
        }
        return html;
    }
}

const InputHTML = function (texto) {
    this.texto = texto;
}
const ImagenHTML = function (texto) {
    this.texto = texto;
}
const HeadingHTML = function (texto) {
    this.texto = texto;
}
const ParrafoHTML = function (texto) {
    this.texto = texto;
}

const sitio_web = new Constructor_sitios();

// almacenar los elementos
const elemetos_web = [];
elemetos_web.push(sitio_web.crear_elemmento('bienvenidos', 'h1'));
elemetos_web.push(sitio_web.crear_elemmento('bienvenidos a mi nuevo sitio web', 'p'));
elemetos_web.push(sitio_web.crear_elemmento('logo.svg', 'img'));
elemetos_web.push(sitio_web.crear_elemmento('Conoce mas sobre nosotros', 'h1'));
elemetos_web.push(sitio_web.crear_elemmento('Contacto', 'input'));
elemetos_web.push(sitio_web.crear_elemmento('Contactanos en el formulario', 'h1'));


console.log(elemetos_web);
elemetos_web.forEach(elemento => {
    elemento.mostrar();
})