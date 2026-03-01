// --- INVENTARIO PERSONALIZADO ---

const estrellas = [
    // NIVEL 1: ENSAMBLAJE
    { nombre: "Sushi de Pan Salado (Jamón/Queso)", nivel: "Ensamblaje", pasos: "Aplana el pan de caja, rellena, enrolla y corta en rodajas." },
    { nombre: "Rollitos de Jamón y Queso", nivel: "Ensamblaje", pasos: "Envuelve bastones de queso en rebanadas de jamón de pavo." },
    { nombre: "Sándwich de Figuras", nivel: "Ensamblaje", pasos: "Prepara el sándwich normal y usa moldes para galletas para darle forma." },
    { nombre: "Sándwich Desarmado", nivel: "Ensamblaje", pasos: "Pon cubitos de pan, queso y jamón por separado en la lunchera." },
    { nombre: "Botana de Pepperoni y Queso", nivel: "Ensamblaje", pasos: "Corta cubos de queso y acompaña con rebanadas de pepperoni." },
    { nombre: "Botana de Jamón y Queso", nivel: "Ensamblaje", pasos: "Corta cubos de queso y acompañalos con cuadritos de jamón." },

    // NIVEL 2: RÁPIDO
    { nombre: "Sincronizada", nivel: "Rápido", pasos: "Tortilla de harina con jamón y queso al comal hasta que dore." },
    { nombre: "Burrito de Frijol", nivel: "Rápido", pasos: "Calienta la tortilla de harina y rellena con frijoles refritos y queso." },
    { nombre: "Quesadilla clásica", nivel: "Rápido", pasos: "Dobla la tortilla con queso asadero y calienta hasta fundir." },
    { nombre: "Molletitos con Frijol", nivel: "Rápido", pasos: "Unta frijoles en pan mini, pon queso y calienta un poco." },
    { nombre: "Grilled Cheese en Waflera", nivel: "Rápido", pasos: "Sándwich de queso con mantequilla directo a la waflera para que quede crujiente." },
    { nombre: "TortiPizza", nivel: "Rápido", pasos: "Usa la tortilla como base, pon salsa de tomate, queso y calienta tapado." },
    { nombre: "Burrito de Huevo", nivel: "Rápido", pasos: "Huevo revuelto envuelto en tortilla de harina." },
    { nombre: "Huevo en Torta", nivel: "Rápido", pasos: "Prepara una torta de huevo plana y córtala en tiras o triángulos." },
    { nombre: "Muffins de Huevo", nivel: "Rápido", pasos: "Bate huevo con jamón y hornea en moldes de cupcake." },
    { nombre: "Flautitas", nivel: "Rápido", pasos: "Tacos dorados sencillos de pollo o queso." },

    // NIVEL 3: ELABORADO
    { nombre: "Nuggets de Pollo", nivel: "Elaborado", pasos: "Empaniza trozos de pechuga y cocina en sartén o airfryer." },
    { nombre: "Mini Hamburguesas", nivel: "Elaborado", pasos: "Prepara la carne molida y arma en pan miniatura." },
    { nombre: "Crepas de Avena Saladas", nivel: "Elaborado", pasos: "Licua avena con huevo para la masa y rellena de jamón/queso." },
    { nombre: "Hotcakes Salados Rellenos", nivel: "Elaborado", pasos: "Pon jamón y queso en el sartén y vierte la masa de hotcake encima." },
    { nombre: "Medallones de Pollo en tiras", nivel: "Elaborado", pasos: "Corta pechuga de pollo en tiras largas y cocina al gusto." },
    { nombre: "Carne de hamburguesa en tiras", nivel: "Elaborado", pasos: "Cocina la carne y córtala en tiras para que sea fácil de agarrar." },
    { nombre: "Huevos de Dinosaurio", nivel: "Elaborado", pasos: "Cuece los huevos, rompe un poco el cascarón y remoja en agua con colorante." },
    { nombre: "Tortitas de Papa con Queso", nivel: "Elaborado", pasos: "Machaca papa cocida, mezcla con queso y dora en el sartén." },
    { nombre: "Pasta con Albóndigas mini", nivel: "Elaborado", pasos: "Prepara albóndigas del tamaño de una uva y mezcla con tu pasta favorita." },
    { nombre: "Tortitas de Pollo", nivel: "Elaborado", pasos: "Pollo deshebrado mezclado con huevo y un poco de pan molido." },
    { nombre: "Tortitas de Atún", nivel: "Elaborado", pasos: "Mezcla atún con papa o huevo y dora en el sartén." },
    { nombre: "Wafles de Pollo", nivel: "Elaborado", pasos: "Usa masa de wafle y añade trocitos de pollo cocido adentro." }
];

const acompanantes = {
    carbos: ["Arroz Rojo Casero", "Spaghetti a la Mantequilla", "Pasta Fusilli (Pesto/Mantequilla)", "Sopa de Fideo", "Sopa de Coditos", "Avena", "Quinoa Roja", "Garbanzo", "Frijoles con Totopos", "Habas tostadas", "Galletas de Avena", "Palomitas", "Galletas Ritz", "Galletas Saladitas", "Totopos", "Pretzels", "Galletas de Arroz", "Corn Flakes", "Tostadas Rojas", "Salmas", "Granola", "Crutones", "Yogurt"],
    verdur: ["Pepino con limón y sal", "Zanahorias Baby", "Tomatitos Cherry", "Brócoli / Coliflor", "Edamames con sal", "Nopalitos / Aguacate", "Elote / Chícharo (lata)", "Algas"],
    frutas: ["Manzana", "Uvas", "Sandía / Melón / Piña", "Mango", "Fresas", "Pera", "Durazno", "Arándanos", "Mandarina", "Plátano"]
};

const postres = [
    { nombre: "Galleta Casera", pasos: "Una galleta de avena o chocolate." },
    { nombre: "Muffin mini", pasos: "Panquecito de vainilla o chocolate." },
    { nombre: "Pan con chocolate", pasos: "Mini sándwich de crema de cacao." },
    { nombre: "Gelatina", pasos: "Cubitos de gelatina de sabor." },
    { nombre: "Gomitas", pasos: "Un par de gomitas de fruta." },
    { nombre: "Obleas", pasos: "Obleas delgaditas con o sin cajeta." },
    { nombre: "Pan con crema de cacahuate y mermelada", pasos: "El clásico PB&J en miniatura." },
    { nombre: "Pan con mantequilla", pasos: "Pan tostado con un poco de mantequilla y azúcar." },
    { nombre: "Yogurt con fruta", pasos: "Contenedor pequeño de yogurt con trozos frescos." },
    { nombre: "Sushi dulce (Plátano/Cacahuate)", pasos: "Pan con crema de cacahuate enrollado con plátano." },
    { nombre: "Crepas dulces", pasos: "Masa de crepa delgada con un toque de miel o cajeta." },
    { nombre: "Hotcake mini", pasos: "Un hotcake pequeño con miel." },
    { nombre: "Buñuelos", pasos: "Trozo de buñuelo crujiente." }
];

// --- LÓGICA DE FUNCIONAMIENTO ---

const diasGlobal = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

function obtenerRandom(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function mostrarReceta(nombre, pasos) {
    document.getElementById('tituloReceta').innerText = nombre;
    document.getElementById('pasosReceta').innerText = pasos;
    document.getElementById('modalReceta').style.display = 'flex';
}

function cerrarReceta() {
    document.getElementById('modalReceta').style.display = 'none';
}

function generarSemana() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    
    let nivelesSemana = ["Ensamblaje", "Ensamblaje", "Rápido", "Rápido", "Elaborado"].sort(() => Math.random() - 0.5);
    let poolEstrellas = [...estrellas];
    let poolPostres = [...postres];

    diasGlobal.forEach((dia, index) => {
        const nivelHoy = nivelesSemana[index];
        const opcionesNivel = poolEstrellas.filter(e => e.nivel === nivelHoy);
        
        const estrellaElegida = obtenerRandom(opcionesNivel.length > 0 ? opcionesNivel : poolEstrellas);
        const postreElegido = obtenerRandom(poolPostres);

        // Quitar de la lista para no repetir
        poolEstrellas = poolEstrellas.filter(e => e.nombre !== estrellaElegida.nombre);
        poolPostres = poolPostres.filter(p => p.nombre !== postreElegido.nombre);

        const card = document.createElement('div');
        card.className = 'dia-card';
        card.innerHTML = `
            <span class="dia-nombre">${dia}</span>
            <div class="item" onclick="mostrarReceta('${estrellaElegida.nombre}', '${estrellaElegida.pasos}')"><span>⭐</span> ${estrellaElegida.nombre}</div>
            <div class="item"><span>🥨</span> ${obtenerRandom(acompanantes.carbos)}</div>
            <div class="item"><span>🥦</span> ${obtenerRandom(acompanantes.verdur)}</div>
            <div class="item"><span>🍎</span> ${obtenerRandom(acompanantes.frutas)}</div>
            <div class="item" style="color: #d81b60; font-weight:bold;" onclick="mostrarReceta('${postreElegido.nombre}', '${postreElegido.pasos}')"><span>🍫</span> ${postreElegido.nombre}</div>
        `;
        grid.appendChild(card);
    });
}

document.getElementById('btnGenerar').addEventListener('click', generarSemana);
window.onload = generarSemana;
