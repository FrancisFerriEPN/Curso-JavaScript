class UI {
    constructor() {
        // Instanciar la API
        this.api = new API();

        // Crear llos markers con layer group
        this.markers = new L.LayerGroup();
         // Iniciar el mapa
         this.mapa = this.inicializarMapa();
    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }
    mostrar_establecimientos(){
        this.api.obtener_datos()
            .then( datos => {
                const resultado = datos.respuesta_json.results;
                
                // Ejecutar la funcion para mostar los pines
                this.mostrar_pines(resultado);

            });
    }

    mostrar_pines(datos){
        // Limpiar los markers
        this.markers.clearLayers();

        // recorrer establecimienos
        datos.forEach(dato => {
            // Aplicamos un destructuring para extraer la informacion
            
            //<<<
            const {latitude, longitude, calle, regular, premium} = dato;
            //>>>

            // Crear Popup
            const opcones_popup = L.popup()
                .setContent(`
                <p>Calle: ${calle}</p>
                <p><b>Regular:</b> ${regular}</p>
                <p><b>Premium:</b> ${premium}</p>
                `);

            // agregar el PIN
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcones_popup);
            this.markers.addLayer(marker);
        });
        this.markers.addTo(this.mapa);
    }
}