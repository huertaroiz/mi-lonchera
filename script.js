const estrellas = [
    { nombre: "Sushi de Pan PB&J", nivel: "Ensamblaje", pasos: "Técnica: Quita las orillas al pan de caja y aplánalo con un rodillo. Unta crema de cacahuate y mermelada. Enrolla apretado y corta en rodajas de 2cm." },
    { nombre: "Rollitos de Jamón y Panela", nivel: "Ensamblaje", pasos: "Técnica: Corta bastones de queso panela. Envuelve cada bastón con una rebanada de jamón de pavo. Sujeta con un palillo sin punta si es necesario." },
    { nombre: "Sándwich de figuras", nivel: "Ensamblaje", pasos: "Técnica: Prepara un sándwich normal de jamón y queso. Usa cortadores de galleta (estrellas, dinosaurios) para sacar solo la figura central." },
    { nombre: "Botana Pepperoni y Queso", nivel: "Ensamblaje", pasos: "Técnica: Corta queso manchego en cubos. Sirve junto a rebanadas de pepperoni sueltas para que el niño los coma por separado." },
    { nombre: "Queso Panela y Orégano", nivel: "Ensamblaje", pasos: "Técnica: Corta cubitos de queso panela, agrega una gota de aceite de oliva y espolvorea orégano seco. Mezcla bien." },
    { nombre: "Tostaditas de Frijol Frías", nivel: "Ensamblaje", pasos: "Técnica: Usa totopos de maíz. Unta frijol refrito frío y pon una pizca de queso rallado encima de cada uno." },
    { nombre: "Rollitos de Pan y Cacao", nivel: "Ensamblaje", pasos: "Técnica: Aplana el pan de caja sin orillas. Unta crema de cacao (tipo Nutella), enrolla y corta en círculos." },
    { nombre: "Brochetas Jamón y Piña", nivel: "Ensamblaje", pasos: "Técnica: En palillos para brocheta, alterna cubos de jamón de pavo y cubos de piña natural (estilo hawaiano)." },
    { nombre: "Canapé de Frijol y Pavo", nivel: "Ensamblaje", pasos: "Técnica: Usa una sola tapa de pan integral. Unta frijol, pon una rebanada de pavo doblada y corta en 4 cuadritos." },
    { nombre: "Carpaccio de Panela", nivel: "Ensamblaje", pasos: "Técnica: Rebana el queso panela muy delgado. Acomoda con gotas de limón, aceite de oliva y una pizca de sal." },
    { nombre: "Wrap de Lechuga y Pavo", nivel: "Ensamblaje", pasos: "Técnica: Usa una hoja de lechuga orejona. Pon pavo y queso crema en el centro, enrolla y sujeta con un palillo." },
    { nombre: "Salchichas Octopus", nivel: "Ensamblaje", pasos: "Técnica: Corta la mitad inferior de una salchicha en 4 o 6 tiras largas (tentáculos). La parte superior queda entera como cabeza." },
    { nombre: "Cubos Pavo y Manzana", nivel: "Ensamblaje", pasos: "Técnica: Mezcla cubos de pechuga de pavo con gajos de manzana verde. El ácido de la manzana evita que el pavo se oxide." },
    { nombre: "Sándwich Desarmado", nivel: "Ensamblaje", pasos: "Técnica: Pon triángulos de pan tostado, rollitos de jamón y cubos de queso por separado en la lunchera." },
    { nombre: "Queso Crema y Cherry", nivel: "Ensamblaje", pasos: "Técnica: Unta queso crema en galletas saladas y coloca medio tomatito cherry encima con el corte hacia abajo." },
    { nombre: "Rollitos Pavo y Aceituna", nivel: "Ensamblaje", pasos: "Técnica: Toma una aceituna sin hueso. Envuélvela con media rebanada de jamón de pavo formando un capullo." },
    { nombre: "Edamames con Sal", nivel: "Ensamblaje", pasos: "Técnica: Sirve los frijoles de soya al vapor con un toque de sal de grano. Se comen fríos abriendo la vaina." },
    { nombre: "Pan con Hummus", nivel: "Ensamblaje", pasos: "Técnica: Corta pan pita en triángulos. Sirve un contenedor pequeño con hummus para que el niño remoje el pan." },
    { nombre: "Sándwich Crema y Mermelada", nivel: "Ensamblaje", pasos: "Técnica: El clásico dulce. Usa pan blanco o integral, quita orillas y corta en 4 triángulos perfectos." },
    { nombre: "Brocheta Pavo y Uva", nivel: "Ensamblaje", pasos: "Técnica: Intercala en un palillo uvas verdes enteras y cubos de pechuga de pavo. Sabor agridulce." },
    { nombre: "Hotcakes Salados Rellenos", nivel: "Rápido", pasos: "Receta: Mezcla harina de hotcake, huevo y leche. En el sartén, agrega jamón y queso al centro de la mezcla y cubre con más masa." },
    { nombre: "Sincronizada Clásica", nivel: "Rápido", pasos: "Receta: Tortillas de harina con jamón y queso. Calienta en comal hasta fundir y corta en 4 triángulos." },
    { nombre: "Burrito de Frijol y Queso", nivel: "Rápido", pasos: "Receta: Tortilla de harina, frijoles refritos y queso. Enrolla cerrando las puntas para que no se salga el relleno." },
    { nombre: "Quesadilla de Maíz", nivel: "Rápido", pasos: "Receta: Tortilla de maíz con queso asadero. Calienta hasta que esté doradita y el queso fundido." },
    { nombre: "Molletitos Express", nivel: "Rápido", pasos: "Receta: Pan con frijol y queso. Calienta en sartén tapado a fuego bajo por 3 min para fundir el queso." },
    { nombre: "Burrito Huevo con Jamón", nivel: "Rápido", pasos: "Receta: Huevo revuelto con jamón picado envuelto en una tortilla de harina caliente." },
    { nombre: "Grilled Cheese", nivel: "Rápido", pasos: "Receta: Pan con mantequilla por fuera y queso manchego en medio. Dora en sartén hasta que esté crujiente." },
    { nombre: "Quesadilla-Pizza", nivel: "Rápido", pasos: "Receta: Tortilla de harina, queso y pepperoni. Dobla a la mitad y calienta como sincronizada." },
    { nombre: "Burrito de Pollo", nivel: "Rápido", pasos: "Receta: Pollo deshebrado con queso en tortilla de harina caliente. Enrolla apretado." },
    { nombre: "Taquitos Jamón fundido", nivel: "Rápido", pasos: "Receta: Jamón y queso sobre tortilla de maíz. Enrolla y tuesta en el comal." },
    { nombre: "Mini Tacos Huevo y Frijol", nivel: "Rápido", pasos: "Receta: Tortillas taqueras con base de frijol y huevo revuelto encima. Dobla a la mitad." },
    { nombre: "Burrito de Salchicha", nivel: "Rápido", pasos: "Receta: Salchicha picada y dorada con queso en tortilla de harina." },
    { nombre: "Quesadilla de Nopales", nivel: "Rápido", pasos: "Receta: Nopalitos cocidos y queso en tortilla de maíz. Calienta en comal." },
    { nombre: "Sincronizada de Pollo", nivel: "Rápido", pasos: "Receta: Pollo deshebrado y queso entre dos tortillas de harina. Dora por ambos lados." },
    { nombre: "Molletitos de Pavo", nivel: "Rápido", pasos: "Receta: Pan integral, frijoles y pavo picado. Cubre con queso y calienta en sartén tapado." },
    { nombre: "Tacos de Panela Asado", nivel: "Rápido", pasos: "Receta: Dora una rebanada de queso panela directo al comal. Pásala a una tortilla de maíz caliente." },
    { nombre: "Pizzita de Tortilla de Maíz", nivel: "Rápido", pasos: "Receta: Tuesta una tortilla, ponle salsa de tomate, queso y pepperoni. Tapa el sartén para fundir." },
    { nombre: "Sándwich Frijol y Queso", nivel: "Rápido", pasos: "Receta: Unta frijoles, pon queso y tuesta el sándwich en sartén con mantequilla." },
    { nombre: "Burrito de Pepperoni", nivel: "Rápido", pasos: "Receta: Queso manchego y pepperoni en tortilla de harina. Calienta hasta que funda." },
    { nombre: "Tostada de Huevo duro", nivel: "Rápido", pasos: "Receta: Huevo estrellado bien cocido sobre una tostada con base de frijol." },
    { nombre: "Crepas Avena y Zanahoria", nivel: "Elaborado", pasos: "Receta: Licua 1/2 tza avena, 1 huevo, chorrito de leche y zanahoria rallada. Haz crepas y rellena de pavo." },
    { nombre: "Mini Pancakes de Espinaca", nivel: "Elaborado", pasos: "Receta: Licua avena, huevo, medio plátano y espinacas. Haz hotcakes pequeñitos (verdes)." },
    { nombre: "Waffle Plátano y Huevo", nivel: "Elaborado", pasos: "Receta: Machaca plátano cocido con huevo. Pon en wafflera y a media cocción añade queso al centro." },
    { nombre: "Huevos de Dinosaurio", nivel: "Elaborado", pasos: "Receta: Hierve huevos, agrieta la cáscara y déjalos en agua con colorante 10 min. Al pelar tienen diseño." },
    { nombre: "Sándwich Pan de Zanahoria", nivel: "Elaborado", pasos: "Receta: Mezcla zanahoria rallada, huevo y 1 cda avena. Haz dos tortitas cuadradas en sartén y úsalas como pan." },
    { nombre: "Pan Francés de Avena", nivel: "Elaborado", pasos: "Receta: Remoja pan en mezcla de huevo, leche y avena molida. Dora en sartén con mantequilla." },
    { nombre: "Nuggets Pollo y Avena", nivel: "Elaborado", pasos: "Receta: Cubos de pollo pasados por huevo y avena molida con sal. Dora en sartén o Airfryer." },
    { nombre: "Mini Pizzas de Avena", nivel: "Elaborado", pasos: "Receta: Masa de avena molida, agua y sal. Haz discos en sartén, pon salsa, queso y pepperoni; tapa." },
    { nombre: "Muffins de Huevo y Jamón", nivel: "Elaborado", pasos: "Receta: Bate huevos con jamón y queso. Hornea en moldes para mantecadas a 180°C por 15 min." },
    { nombre: "Mini Hamburguesas Carne", nivel: "Elaborado", pasos: "Receta: Carne molida con avena y sal. Forma círculos mini y cocina al sartén. Sirve en pan pequeño." },
    { nombre: "Waffles de Plátano", nivel: "Elaborado", pasos: "Receta: Licua 1 plátano, 1 huevo y 1/2 tza avena. Pon en wafflera. Sirve con miel aparte." },
    { nombre: "Coditos con Albóndigas", nivel: "Elaborado", pasos: "Receta: Albóndigas tamaño canica en salsa de tomate. Mezcla con pasta de coditos cocida." },
    { nombre: "Omelet Nopal y Queso", nivel: "Elaborado", pasos: "Receta: Pica nopales y ásalos. Mézclalos con huevo batido y queso en el sartén." },
    { nombre: "Milanesita de Pollo", nivel: "Elaborado", pasos: "Receta: Empaniza pollo con avena molida y ajonjolí. Corta en tiras largas para comer fácil." },
    { nombre: "Deditos de Queso Caseros", nivel: "Elaborado", pasos: "Receta: Tiras de queso manchego pasadas por huevo y avena (2 veces). Congela 10 min y dora." },
    { nombre: "Muffins Avena Salados", nivel: "Elaborado", pasos: "Receta: Avena cocida, queso rallado y espinaca picada. Hornea en moldes hasta que doren." },
    { nombre: "Tortitas de Papa y Queso", nivel: "Elaborado", pasos: "Receta: Papa cocida machacada con queso y un poco de harina. Forma tortitas y dora." },
    { nombre: "Mini Quiche de Jamón", nivel: "Elaborado", pasos: "Receta: Aplana pan de caja en molde de muffin. Rellena con huevo, leche y jamón. Hornea." },
    { nombre: "Albóndigas de Pollo", nivel: "Elaborado", pasos: "Receta: Pollo molido con zanahoria rallada fina. Haz bolitas y hornea o cuece en caldo suave." },
    { nombre: "Tortitas Avena y Espinaca", nivel: "Elaborado", pasos: "Receta: Mezcla avena, huevo y espinaca picada. Haz tortitas suaves en el sartén." }
];

const postres = [
    { nombre: "Buñuelos Papel Arroz", pasos: "Postre: Corta papel arroz en triángulos. Barniza con miel y canela. Airfryer 3 min a 180°C hasta que inflen." },
    { nombre: "Pastel Plátano/Huevo", pasos: "Postre: Machaca 1 plátano, 1 huevo y chispas. Pon en taza y mete al microondas 1.5 min." },
    { nombre: "Gelatina Yogurt/Fresa", pasos: "Postre: Licua yogurt, fresas y grenetina. Vierte en moldes y refrigera hasta que cuaje." },
    { nombre: "Gomitas Fruta Natural", pasos: "Postre: Jugo natural caliente con 3 sobres de grenetina. Vierte en moldes de silicona y enfría." },
    { nombre: "Muffins Plátano/Cacao", pasos: "Postre: Mezcla plátano, 1 huevo y 1 cda cacao. Hornea en moldes pequeños por 10 min." },
    { nombre: "Galletas Avena/Plátano", pasos: "Postre: 1 tza avena con 2 plátanos y chispas. Haz bolitas y hornea 12 min." },
    { nombre: "Waffle Plátano Dulce", pasos: "Postre: Machaca plátano con masa de hotcake. Pon en wafflera hasta caramelizar." },
    { nombre: "Mini Brownie Avena", pasos: "Postre: 2 cdas avena molida, 1 cacao, 1 miel y leche. Microondas 1 min." },
    { nombre: "Pudín de Chía y Leche", pasos: "Postre: 2 cdas chía en 1/2 tza leche. Reposa toda la noche. Sirve con fruta." },
    { nombre: "Manzana Asada Canela", pasos: "Postre: Gajos de manzana con canela y agua. Microondas 1 min hasta ablandar." },
    { nombre: "Trufa de Cacahuate", pasos: "Postre: Avena molida, crema de cacahuate y miel. Haz bolitas pequeñas." },
    { nombre: "Galleta de Sartén", pasos: "Postre: Avena, plátano y coco. Aplasta en sartén y dora por ambos lados." },
    { nombre: "Sushi de Plátano", pasos: "Postre: Unta crema de cacahuate a un plátano, pon granola y corta en rodajas." },
    { nombre: "Dip Yogurt y Cacao", pasos: "Postre: Yogurt griego con cacao y miel. Usa como dip para gajos de fruta." },
    { nombre: "Queso Panela/Mermelada", pasos: "Postre: Cubo de queso panela frío con una gota de mermelada encima." },
    { nombre: "Fresas con Yogurt", pasos: "Postre: Quita el centro a las fresas y rellena con yogurt griego frío." },
    { nombre: "Rollitos Pan Canela", pasos: "Postre: Aplana pan, unta queso crema, canela y azúcar. Enrolla y tuesta." },
    { nombre: "Bites Plátano Choco", pasos: "Postre: Rodajas de plátano con una gota de chocolate derretido encima." },
    { nombre: "Nachos de Manzana", pasos: "Postre: Gajos de manzana bañados con miel, avena y coco." },
    { nombre: "Brocheta Fruta/Choco", pasos: "Postre: Fruta en palillo con hilos de chocolate amargo derretido." },
    { nombre: "Manzana con Cacahuate", pasos: "Postre: Gajos de manzana con dip de crema de cacahuate natural." },
    { nombre: "Fresas con Chocolate", pasos: "Postre: Sumerge media fresa en chocolate derretido y deja secar." },
    { nombre: "Yogurt con Miel", pasos: "Postre: Yogurt natural con un chorrito de miel de abeja pura." },
    { nombre: "Uvas con Queso", pasos: "Postre: Mezcla uvas verdes con cubitos pequeños de queso panela." },
    { nombre: "Yogurt con Avena", pasos: "Postre: Yogurt con avena tostada crujiente en sartén." },
    { nombre: "Chocolate Amargo", pasos: "Postre: Dos cuadritos de chocolate amargo junto a una nuez pecana." },
    { nombre: "Sandía con Chía", pasos: "Postre: Cubos de sandía con semillas de chía espolvoreadas." },
    { nombre: "Melón con Yogurt", pasos: "Postre: Bolitas de melón con una cucharada de yogurt griego arriba." },
    { nombre: "Pera con Miel", pasos: "Postre: Gajos de pera con un hilo de miel de agave." },
    { nombre: "Mix Nuez y Arándano", pasos: "Postre: Puñito de nuez troceada y arándanos deshidratados." },
    { nombre: "Mango con Yogurt", pasos: "Postre: Cubos de mango dulce con yogurt natural frío." },
    { nombre: "Manzana con Canela", pasos: "Postre: Gajos de manzana fresca con canela molida." },
    { nombre: "Piña con Coco", pasos: "Postre: Triángulos de piña con coco rallado seco sin azúcar." },
    { nombre: "Plátano con Yogurt", pasos: "Postre: Rodajas de plátano con una gota de yogurt en cada una." },
    { nombre: "Mix Fruta Temporada", pasos: "Postre: Fruta fresca del mercado picada en bocados pequeños." }
];

const acompanantes = {
    carbos: ["Arroz Rojo (Prep)", "Spaghetti Mantequilla (Prep)", "Coditos con Crema (Prep)", "Ensalada de Fideo (Prep)", "Avena Cocida (Prep)", "Puré de Papa (Prep)", "Palomitas Naturales", "Galletas Ritz", "Galletas Saladitas", "Totopos de Maíz", "Pretzels", "Galletas de Arroz", "Cereal Seco", "Pan Integral solo", "Tortilla Tostada", "Pasta con Pesto", "Couscous con Verdura", "Quinoa Cocida", "Elote Desgranado", "Camote Horneado", "Habas tostadas", "Garbanzos secos", "Quinoa inflada", "Pan Pita", "Pasta de tornillo", "Tortitas de Arroz", "Cereal de hojuela", "Barrita de Granola", "Galleta de avena", "Crutones"],
    verdur: ["Pepino con Limón", "Zanahorias Baby", "Tomatitos Cherry", "Nopalitos Asados (Prep)", "Edamames con Sal", "Brócoli con Queso (Prep)", "Zanahoria Rallada (Prep)", "Jícama con Limón", "Verduras al Vapor (Prep)", "Aceitunas Verdes", "Calabacita Asada (Prep)", "Bastones de Apio", "Elotitos Baby", "Pimiento en tiras", "Chicharos al vapor"],
    frutas: ["Manzana", "Uvas", "Sandía", "Melón", "Mango", "Fresas", "Pera", "Plátano", "Piña", "Papaya", "Durazno", "Guayaba", "Kiwi", "Naranja", "Arándanos"]
};

const diasGlobal = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
let nivelesSemana = [];

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

function generarDatosDia(nivel) {
    const estrella = obtenerRandom(estrellas.filter(e => e.nivel === nivel));
    const postre = obtenerRandom(postres);
    return {
        estrella: estrella.nombre,
        estrellaPasos: estrella.pasos,
        postre: postre.nombre,
        postrePasos: postre.pasos,
        carb: obtenerRandom(acompanantes.carbos),
        veg: obtenerRandom(acompanantes.verdur),
        fruta: obtenerRandom(acompanantes.frutas)
    };
}

function refrescarUnDia(index) {
    const nivelHoy = nivelesSemana[index];
    const d = generarDatosDia(nivelHoy);
    const card = document.querySelectorAll('.dia-card')[index];
    
    card.innerHTML = `
        <button class="btn-refresh-dia" onclick="event.stopPropagation(); refrescarUnDia(${index})">🔄</button>
        <span class="dia-nombre">${diasGlobal[index]}</span>
        <div class="item" onclick="mostrarReceta('${d.estrella}', '${d.estrellaPasos}')"><span>⭐</span> ${d.estrella}</div>
        <div class="item"><span>🥨</span> ${d.carb}</div>
        <div class="item"><span>🥦</span> ${d.veg}</div>
        <div class="item"><span>🍎</span> ${d.fruta}</div>
        <div class="item" style="color: #d81b60; font-weight:bold;" onclick="mostrarReceta('${d.postre}', '${d.postrePasos}')"><span>🍫</span> ${d.postre}</div>
    `;
}

function generarSemana() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    nivelesSemana = ["Ensamblaje", "Ensamblaje", "Rápido", "Rápido", "Elaborado"].sort(() => Math.random() - 0.5);

    diasGlobal.forEach((dia, index) => {
        const d = generarDatosDia(nivelesSemana[index]);
        const card = document.createElement('div');
        card.className = 'dia-card';
        card.innerHTML = `
            <button class="btn-refresh-dia" onclick="event.stopPropagation(); refrescarUnDia(${index})">🔄</button>
            <span class="dia-nombre">${dia}</span>
            <div class="item" onclick="mostrarReceta('${d.estrella}', '${d.estrellaPasos}')"><span>⭐</span> ${d.estrella}</div>
            <div class="item"><span>🥨</span> ${d.carb}</div>
            <div class="item"><span>🥦</span> ${d.veg}</div>
            <div class="item"><span>🍎</span> ${d.fruta}</div>
            <div class="item" style="color: #d81b60; font-weight:bold;" onclick="mostrarReceta('${d.postre}', '${d.postrePasos}')"><span>🍫</span> ${d.postre}</div>
        `;
        grid.appendChild(card);
    });
}

document.getElementById('btnGenerar').addEventListener('click', generarSemana);
generarSemana();


document.getElementById('btnDescargar').addEventListener('click', function() {
    // Seleccionamos el contenedor de las tarjetas
    const contenedor = document.getElementById('grid');
    
    // Usamos la librería para convertir el HTML en imagen
    html2canvas(contenedor, {
        backgroundColor: "#f8f9fa", // Color de fondo de la imagen
        scale: 2, // Mayor calidad
        logging: false,
        useCORS: true
    }).then(canvas => {
        // Creamos un link invisible para descargar la imagen
        const link = document.createElement('a');
        link.download = 'Mi_Semana_de_Lunch.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
});
