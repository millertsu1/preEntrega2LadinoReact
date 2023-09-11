const productos = [
    { nombre: "Bases de datos avanzadas", precio: 35000, id: "1", stock:10, img: "../img/Bases de datos avanzadas.webp", idCat: "1", descripcion: "Las bases de datos son sistemas organizados para almacenar, gestionar y recuperar información de manera eficiente. Permiten estructurar datos en tablas, facilitando búsquedas y consultas." },
    { nombre: "CSS Notes for Professionals", precio: 13000, id: "2", stock:10, img: "../img/CSS Notes for Professionals.webp", idCat: "1", descripcion: "CSS (Cascading Style Sheets) es un lenguaje de diseño utilizado para controlar la apariencia y presentación de páginas web. Permite definir estilos como colores, fuentes, márgenes y tamaños de elementos HTML. CSS se utiliza para dar formato y estilizar el contenido web, mejorando su aspecto y experiencia visual para los usuarios." },
    { nombre: "Eloquent JavaScript", precio: 80000, id: "3", stock:10, img: "../img/Eloquent JavaScript.webp", idCat: "1", descripcion: "Javascript, por otro lado, es un lenguaje de programación utilizado en el desarrollo web para agregar interactividad y funcionalidad dinámica a las páginas. Permite realizar acciones como validación de formularios, animaciones, cambios en el contenido de la página sin necesidad de recargarla y mucho más. " },
    { nombre: "Hellboy", precio: 3400, id: "4", stock:10, img: "../img/hellboyFinal.png", idCat: "2", descripcion: "Hellboy es un personaje de cómic creado por el escritor y artista Mike Mignola. Hizo su primera aparición en San Diego Comic-Con Comics #2 en 1993 y luego protagonizó su propia serie de cómics bajo el título Hellboy: Seed of Destruction publicado por Dark Horse Comics." },
    { nombre: "Spiderman", precio: 4000, id: "5", stock:10, img: "../img/Spiderman.png", idCat: "2", descripcion: "Spider-Man es un icónico superhéroe de Marvel Comics creado por el escritor Stan Lee y el dibujante Steve Ditko. Su primera aparición fue en Amazing Fantasy #15 en 1962. El verdadero nombre de Spider-Man es Peter Parker, un estudiante de secundaria que adquiere habilidades arácnidas después de ser picado por una araña radiactiva." },
    { nombre: "Superman", precio: 3200, id: "6", stock:10, img: "../img/superman.png", idCat: "2", descripcion: "Superman es uno de los superhéroes más icónicos y populares de DC Comics. Creado por el escritor Jerry Siegel y el dibujante Joe Shuster, Superman hizo su primera aparición en Action Comics #1 en 1938. Su nombre real es Clark Kent, y es un extraterrestre del planeta Krypton que llegó a la Tierra en una nave espacial cuando era un bebé." },
    { nombre: "Alien", precio: 78000, id: "7", stock:10, img: "../img/alien.png", idCat: "3", descripcion: "presenta una historia de terror espacial en la que la tripulación de una nave espacial comercial llamada Nostromo se encuentra con una forma de vida alienígena altamente peligrosa y mortífera en un planeta remoto." },
    { nombre: "Fast & Furious", precio: 90000, id: "8", stock:10, img: "../img/fast.png", idCat: "3", descripcion: "La serie está centrada en carreras callejeras ilegales, robos de vehículos y una red de criminales, pero a lo largo de los años ha evolucionado hacia una serie de películas de acción que incluyen secuencias de persecuciones a alta velocidad y escenas de combate." },
    { nombre: "Blade Runner", precio: 15000, id: "9", stock:10, img: "../img/blade.png", idCat: "3", descripcion: "La película es conocida por su estética visual y su influencia en la ciencia ficción cinematográfica, especialmente en lo que se refiere al género cyberpunk. Blade Runner presenta un mundo sombrío y futurista con abundantes neón y lluvia constante, que ha influido en numerosas obras posteriores." },
    { nombre: "Guns N' Roses", precio: 35000, id: "10", stock:10, img: "../img/guns.png", idCat: "4", descripcion: "Guns N' Roses es una influyente banda de rock que se formó en Los Ángeles, California, en 1985. La banda es conocida por su estilo de rock duro y su actitud rebelde, y se convirtió en una de las bandas más exitosas y emblemáticas de la década de 1980 y 1990."},
    { nombre: "Cold Play", precio: 26000, id: "11", stock:10, img: "../img/coldplay.png", idCat: "4", descripcion: "Coldplay es una banda británica de rock alternativo formada en Londres en 1996. La banda se compone de cuatro miembros principales: Chris Martin (voz principal y teclado), Jonny Buckland (guitarra líder), Guy Berryman (bajo) y Will Champion (batería y coros)." },
    { nombre: "Queen", precio: 45000, id: "12", stock:10, img: "../img/queen.png", idCat: "4", descripcion: "Queen es una legendaria banda británica de rock formada en Londres en 1970. La banda está compuesta por cuatro miembros icónicos: Freddie Mercury (vocalista y piano), Brian May (guitarra), John Deacon (bajo) y Roger Taylor (batería). Queen es ampliamente considerada como una de las bandas más influyentes y exitosas en la historia de la música rock." },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}