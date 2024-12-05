document.addEventListener("DOMContentLoaded", function() {
    // Array de rutas de las imágenes para la galería
    const images = [
        'img/botas.jpg',
        'img/img_66108c530cc8b_1712360531.jpg',
        'img/img_66108d00a41c7_1712360704.jpg'
    ];

    const galleryContainer = document.getElementById('image-gallery');

    // Crear y agregar las imágenes al grid
    images.forEach(imageSrc => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4', 'mb-4');  // Crea una columna en el grid
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.classList.add('img-fluid', 'rounded');
        imgElement.alt = "Galería de imágenes";

        colDiv.appendChild(imgElement);
        galleryContainer.appendChild(colDiv);
    });
});
