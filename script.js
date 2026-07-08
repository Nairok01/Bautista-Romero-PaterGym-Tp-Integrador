const datosClases = {
    funcional: {
        titulo: "Funcional",
        nivel: "🟠 Medio",
        tipo: "Fuerza",
        desc: "Trabaja todo el cuerpo con movimientos funcionales y patrones naturales. Ayuda a prevenir lesiones y es apta para cualquier persona.",
        subdesc: "Todo público, desde personas sin experiencia hasta deportistas.",
        bg: "img/funcional.jpg" // Corregido formato
    },
    judo: {
        titulo: "Judo",
        nivel: "🟠 Medio",
        tipo: "Artes Marciales",
        desc: "Aprende técnicas de derribo, control y defensa personal. Desarrolla disciplina, equilibrio, fuerza mental y coordinación física de manera integral.",
        subdesc: "Ideal para jóvenes y adultos que buscan superación y enfoque.",
        bg: "img/judo.png" // Corregido formato
    },
    boxing: {
        titulo: "Boxing",
        nivel: "🔴 Alto",
        tipo: "Cardio / HIIT",
        desc: "Combina los mejores golpes del boxeo con entrenamiento de alta intensidad a intervalos (HIIT). Quema calorías al máximo y descarga tensiones al ritmo de la música.",
        subdesc: "Clases dinámicas de alta exigencia cardiovascular.",
        bg: "img/boxing.jpeg" // Corregido formato
    },
    fuerza: {
        titulo: "Fuerza",
        nivel: "🔴 Alto",
        tipo: "Musculación",
        desc: "Entrenamiento enfocado en la sobrecarga progresiva y la hipertrofia muscular. Domina la técnica de ejercicios compuestos para ganar fuerza real y potenciar tu rendimiento.",
        subdesc: "Recomendado para quienes quieren llevar su composición corporal al siguiente nivel.",
        bg: "img/fuerza.jpg" // Corregido formato
    },
    yoga: {
        titulo: "Yoga",
        nivel: "🟢 Bajo",
        tipo: "Mente-cuerpo",
        desc: "Conecta tu respiración, mente y cuerpo a través de posturas físicas y estiramientos. Ideal para mejorar la flexibilidad, corregir la postura y reducir el estrés diario.",
        subdesc: "Una clase guiada ideal para encontrar bienestar y equilibrio total.",
        bg: "img/yoga.jpg" // Corregido formato
    },
    zumba: {
        titulo: "Zumba",
        nivel: "🟢 Bajo",
        tipo: "Baile",
        desc: "Ejercítate divirtiéndote al ritmo de música latina e internacional. Una disciplina excelente para mejorar la coordinación, quemar calorías y liberar endorfinas.",
        subdesc: "Diversión y movimiento asegurado sin necesidad de experiencia previa.",
        bg: "img/zumba.png" // Corregido formato
    }
};

function cambiarClase(clave, elemento) {
    const info = datosClases[clave];
    if(!info) return;
    document.getElementById('clase-title').innerText = info.titulo;
    document.getElementById('clase-tag-nivel').innerText = info.nivel;
    document.getElementById('clase-tag-tipo').innerText = info.tipo;
    document.getElementById('clase-desc').innerText = info.desc;
    document.getElementById('clase-subdesc').innerText = info.subdesc;
    document.getElementById('clase-main-display').style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.85)), url('${info.bg}')`;

    const items = document.querySelectorAll('.clase-sidebar-item');
    items.forEach(item => item.classList.remove('active'));
    
    if(elemento) {
        elemento.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Buscamos el elemento de la lista que corresponde a Funcional.
    // Usamos el atributo 'onclick' que seguro tenés en tu HTML para identificarlo.
    const botonFuncional = document.querySelector('[onclick*="funcional"]');
    
    // 2. Si lo encuentra, lo activa al instante. Si no, usa la primera tarjeta que pille.
    if (botonFuncional) {
        cambiarClase('funcional', botonFuncional);
    } else {
        const primerItemCualquiera = document.querySelector('.clase-sidebar-item');
        cambiarClase('funcional', primerItemCualquiera);
    }
});

