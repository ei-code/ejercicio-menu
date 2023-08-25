//Menu Bottega

    const comentarios = [
        "¡Deliciosa elección!",
        "Excelente elección!",
        "Genial decisión ;)",
        "Una opción fantástica!"
    ];

    const indiceAleatorio = Math.floor(Math.random() * comentarios.length);
    const comentarioAleatorio = comentarios[indiceAleatorio];

    function calcularPrecioDesayuno() {
        const breckfastElement = document.getElementById("breckfast");
        const breckfastPrecio = parseFloat(breckfastElement.options[breckfastElement.selectedIndex].getAttribute("precio"));    
        document.getElementById("precioBreckfast").textContent = `${comentarioAleatorio} ---Precio Total: ${breckfastPrecio.toFixed(2)} euros`;
    }       

    function calcularPrecio() {
        const opcionElement = document.getElementById("opcion");
        const precioOpcion = parseFloat(opcionElement.options[opcionElement.selectedIndex].getAttribute("precio"));

        const platoElement = document.getElementById("plato");
        const platoPrecio = parseFloat(platoElement.options[platoElement.selectedIndex].getAttribute("precio"));

        const platosElement = document.getElementById("platos");
        const platosPrecio = parseFloat(platosElement.options[platosElement.selectedIndex].getAttribute("precio"));

        const complementoElement = document.getElementById("complemento");
        const complementoPrecio = parseFloat(complementoElement.options[complementoElement.selectedIndex].getAttribute("precio"));

        const precioTotal = precioOpcion + platoPrecio + platosPrecio + complementoPrecio;

        document.getElementById("precioTotal").textContent = `${comentarioAleatorio} ---Precio Total: ${precioTotal.toFixed(2)} euros`;
    }
    

    