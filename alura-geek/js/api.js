//Acá se manejan las requisisciones

const API_URL = "https://my-json-server.typicode.com/zeqqeram/alura-geek-api/productos";

//Requisición GET

export async function getProductos() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) throw new Error("No se pudo obtener los productos");
        return await response.json ();
    } catch (error) {
        console.error("Error en GET: ", error);
        throw error;
    }
}

//Requisición POST

export async function crearProducto(producto) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(producto),
        });

        if (!response.ok) throw new Error("No se pudo crear el producto");
        
        return await response.json();
    } 
    catch (error) {
        console.error("Error en POST: ", error);
        throw error;
    }
}

//Requisición DELETE 

export async function eliminarProducto(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error("No se pudo eliminar el producto");
        }

        console.log(`Producto con ID ${id} eliminado`);
    } catch (error) {
        console.error("Error en DELETE:", error);
        throw error;
    }
}