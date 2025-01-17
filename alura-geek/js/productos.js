import { getProductos, eliminarProducto } from "./api";

//Funcion para mostrar productos

export async function mostrarProductos() {
    const galeriaContainer = document.querySelector(".galeria__container");
    galeriaContainer.innerHTML = "";

    try {
        const productos = await getProductos();

        productos.forEach((producto) => {
            const productoCard = document.createElement("div");
            productoCard.classList.add("galeria__card");
            productoCard.innerHTML = `
            <img class="card__img" src="${producto.imagen}" alt="Foto del producto">
            <h2 class="card__titulo">${producto.nombre}</h2>
            <div class="card__footer">
                <p class="card__price">$${producto.precio}</p>
                <img class="card__icon" src="./img/icon_delete.png" alt="Eliminar producto" data-id="${producto.id}">
            </div>
            `;

            const deleteIcon = productoCard.querySelector(".card__icon");
            deleteIcon.addEventListener("click", () => {
                const productoId = deleteIcon.dataset.id;
                eliminarProducto(productoId).then(() =>
                    mostrarProductos());
            });

            galeriaContainer.appendChild(productoCard);
        });
    }
    catch (error) {
        console.error("Error al mostrar los productos: ", error);
    }
}





