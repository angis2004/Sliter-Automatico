const images = [
    "https://webapps.gruposam.com.pe/splv-web-demo/content/img/FONDO_TICKET.jpg",
    "https://apinoad.gruposam.com.pe/hub-promociones/api/sisprom/comun/imagen/VISUALLOTTERY/SORTEO/IMAGENES/41c4c7fd-8dc1-47ca-8d8e-120733c01fbb_LISTA-DE-PARTICIPANTES-H-SORTEO.jpg",
    "https://apinoad.gruposam.com.pe/hub-promociones/api/sisprom/comun/imagen/VISUALLOTTERY/SORTEO/IMAGENES/e1e2e157-0c90-474b-87b5-c09906b7d7a7_LISTA-PARTICIPANTES-H.jpg",
    "https://apinoad.gruposam.com.pe/hub-promociones/api/sisprom/comun/imagen/VISUALLOTTERY/SORTEO/IMAGENES/8048e508-6aba-4abc-8e88-ab7674c89c0a_Pantalla-Ganadores.jpg",
    "https://apinoad.gruposam.com.pe/hub-promociones/api/sisprom/comun/imagen/VISUALLOTTERY/SORTEO/IMAGENES/9134ad37-4518-4f8b-be07-a03b8a1112cc_PANTALLA HORIZONTAL ESCENARIO PARTICIPANTE.jpg"
];

let currentIndex = 0;

function changeBackground() {
    const slider = document.querySelector('.slider');

    // Log the current image URL and currentIndex to the console
    console.log("Mostrando imagen para dispositivos grandes:", images[currentIndex]);


    slider.style.backgroundImage = `url(${images[currentIndex]})`;
    slider.style.backgroundSize = 'cover';  
    slider.style.backgroundPosition = 'center';  

    console.log("Background style aplicado:", slider.style.backgroundImage);

    currentIndex = (currentIndex + 1) % images.length; // Ciclar a la siguiente imagen
}

// Cambiar el fondo cada 10 segundos (10000 ms)
setInterval(changeBackground, 10000);

// Llamar a la función de cambio de fondo una vez para iniciar
changeBackground();
