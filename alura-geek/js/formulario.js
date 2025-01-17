import { crearProducto } from "./api";
import { mostrarProductos } from "./productos";

// Manejo del form y sus conexiones 

const formulario = document.querySelector('.form');
const nombreInput = document.querySelector('#nombre');
const precioInput = document.querySelector('#precio');
const imagenInput = document.querySelector('#imagen');

formulario.addEventListener('submit', (e) => { e.preventDefault();  
    const nuevoProducto = {
        nombre: nombreInput.value,
        precio: precioInput.value,
        imagen: imagenInput.value,
    };

    crearProducto(nuevoProducto).then (() => {
        formulario.reset();
        mostrarProductos();
    })
    .catch ((error) => console.error("Error al crear nuevo producto: ", error));
});
