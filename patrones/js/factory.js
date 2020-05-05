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
        return html;
    }
}

const HeadingHTML = function (texto) {
    this.texto = texto;
}

const sitio_web = new Constructor_sitios();

// almacenar los elementos
const elemetos_web = [];
elemetos_web.push(sitio_web.crear_elemmento('bienvenidos', 'h1'));
console.log(sitio_web);