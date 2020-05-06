class Formulario {
    constructor() {
        this.campos = [];
    }

    agregar_campo(tipo, texto){
        let campos = this.campos;
        let campo; 
        switch(tipo){
            case "text":
                campo = new InputText(texto);
                break;
                case "email":
                campo = new InputEmail(texto);
                break;
                case "button":
                campo = new Boton(texto);
                    
                break;
            default:

            //<<<
                throw new Error("Tipo no valido " + tipo);
            //>>>

        }
        campos.push(campo);
    }

    obtener_formulario(){
        let form = document.createElement("form"),
            campos = this.campos.length,
            campo;
            for (let i = 0; i < campos; i++) {
                campo = this.campos[i];
                form.appendChild(campo.crear_elemento());
                let br = document.createElement("br");
                form.appendChild(br);
            }
            return form;
    }
}

class Inputs{
    constructor(texto){
        this.texto = texto;
    }
}

class InputText extends Inputs{
    constructor(texto){
        super(texto);
    }
    crear_elemento(){
        const inputEmail = document.createElement("input");
        inputEmail.setAttribute("type", "text");
        inputEmail.setAttribute("placeholder",this.texto);
        return inputEmail;
    }
}
class InputEmail extends Inputs{
    constructor(texto){
        super(texto);
    }
    crear_elemento(){
        const inputText = document.createElement("input");
        inputText.setAttribute("type", "email");
        inputText.setAttribute("placeholder",this.texto);
        return inputText;
    }
}
class Boton extends Inputs{
    constructor(texto){
        super(texto);
    }
    crear_elemento(){
        const button = document.createElement("button");
        button.setAttribute("type", "submit");
        button.textContent = this.texto;
        return button;
    }
}

// Instanciar formiulario

const formulario = new Formulario();
formulario.agregar_campo("text", "Añade tu nombre");
formulario.agregar_campo("text", "Añade tu apellido");
formulario.agregar_campo("email", "Añade tu correo");
formulario.agregar_campo("button", "Enviar formulario");

// renderizar en el HTML
document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#app").appendChild(formulario.obtener_formulario());
})
console.log(formulario);
