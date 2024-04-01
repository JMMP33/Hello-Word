const helloWorld = document.getElementById('hello-world');


function moveText() {
    const containerWidth = document.body.clientWidth;
    const containerHeight = document.body.clientHeight;

    const randomX = Math.floor(Math.random() * (containerWidth - 100)); // 100 es el ancho aproximado del texto
    const randomY = Math.floor(Math.random() * (containerHeight - 50)); // 50 es la altura aproximada del texto

    helloWorld.style.left = `${randomX}px`;
    helloWorld.style.top = `${randomY}px`;

    setTimeout(moveText, 2000);
}

moveText();
