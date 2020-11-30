function abrirPanel(panelInicial){
    const paneles = document.querySelectorAll(".panel")
    paneles.forEach(panel=>panel.classList.remove("activa"));

    const opciones = document.querySelectorAll(".opcion")
    opciones.forEach(opcion=>opcion.classList.remove("activo"))

    document.getElementById(panelInicial).classList.add("activa")
}



//crear funcion que recibe como parametro el 
//obj obtenido con fetch()que almacene el 
//contenido en una variable, utilizar forEach() 
fetch('../data/bd.json')
    .then(response=>response.json())
    .then(datos=>agregarProyectos(datos))

    function agregarProyectos(datos){
        const proyectos=datos
        const tabla=document.querySelector("#listar")

        proyectos.forEach(proyecto=>{
            tabla.innerHTML+=`
                ${proyecto.nombre}
                ${proyecto.lenguage}
                ${proyecto.monto}
        `

    })
}

    function insertar(evt){
          evt.preventDefault()
          
          const valores=[{
                nombre:document.getElementById('nombre').value,
                monto:document.getElementById('monto').value,
          }]
          agregarProyectos(valores)
          limpiarFormulario()
}
     
    function limpiarFormulario(){
           document.getElementById("nombre").value="";
           document.getElementById("lenguage").value="";
           document.getElementById("monto").value="";
}
