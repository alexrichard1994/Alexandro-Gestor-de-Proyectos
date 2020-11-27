

function abrirPanel(agregar){
    const paneles = document.querySelectorAll(".panel")
    paneles.forEach(panel=>panel.classList.remove("activa"));

    const opciones = document.querySelectorAll(".opcion")
    opciones.forEach(opcion=>opcion.classList.remove("activo"));

    document.getElementById(agregar).classList.add("activa")
}


function abrirPanel(listar){
    const paneles = document.querySelectorAll(".panel")
    paneles.forEach(panel=>panel.classList.remove("activa"));

    const opciones = document.querySelectorAll(".opcion")
    opciones.forEach(opcion=>opcion.classList.remove("activo"));

    document.getElementById(listar).classList.add("activa")
}
