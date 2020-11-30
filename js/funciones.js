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
                lenguaje:document.getElementById('lenguaje').value,
                monto:document.getElementById('monto').value,
          }]
          agregarProyectos(valores)
          limpiarFormulario()
}
     
    function limpiarFormulario(){
           document.getElementById("nombre").value="";
           document.getElementById("lenguaje").value="";
           document.getElementById("monto").value="";
}

//Crear en el archivo .js la función traerMensaje
//Por medio de fetch(), que se comunique al URL randomuser.me/api,
//De los datos obtenidos, insertar por medio de DOM en la tabla listarMensajes 
//el apellido, el teléfono e ingresar manualmente en la última columna la frase 
//contácteme por favor.function traerMensaje(){
function traerMensaje(){
fetch('https://randomuser.me/api')
    .then(respuesta=>respuesta.json())
    .then(datos=>listarMensajes(datos.results[0]))
}

function listarMensajes(datos){
    const tablaMensajes=document.querySelector("#listarMensajes")
   
    tablaMensajes.innerHTML+=`
    
         ${datos.name.first} ${datos.name.last}
         ${datos.cell}
         Contacteme por favor
    
    `
}