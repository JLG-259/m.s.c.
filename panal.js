const popups = [
    { title: "Combustible", text: "102 Octanos Diesel Uba Keroseno Paraffin Gas Butane and Propane" },
    { title: "Inteligencia militar", text: "Los accesorios militares son componentes esenciales utilizados por las fuerzas armadas para optimizar la efectividad, comodidad y seguridad del personal militar en diversas situaciones operativas. Estos accesorios abarcan una amplia gama de elementos, que van desde equipos de protección personal hasta dispositivos de navegación y comunicación." },
    { title: "Accesorios militares", text: "Los accesorios militares son componentes esenciales utilizados por las fuerzas armadas para optimizar la efectividad, comodidad y seguridad del personal militar en diversas situaciones operativas. Estos accesorios abarcan una amplia gama de elementos, que van desde equipos de protección personal hasta dispositivos de navegación y comunicación." },
    { title: "Dotación militar", text: "La provisión de equipamiento, suministros y recursos necesarios para las operaciones militares es un servicio esencial que puede ser proporcionado por entidades como agencias gubernamentales, empresas privadas u organizaciones internacionales. Esta función es crucial para asegurar la adecuada dotación militar y el éxito de las misiones." },
    { title: "Instalación", text: "Para cada instalación, es fundamental realizar un estudio de seguridad. Esto se debe a que cada ubicación puede presentar características únicas, niveles de riesgo distintos y requisitos de seguridad específicos. Un estudio de seguridad personalizado permite identificar y abordar adecuadamente las necesidades de seguridad de cada instalación en particular." },
    { title: "Video inteligente", text: "La tecnología de video abarca una variedad extensa de herramientas y dispositivos que tienen como propósito procesar, almacenar y mostrar imágenes. Esta tecnología es fundamental en áreas como la vigilancia, el reconocimiento, la toma de decisiones y la recopilación de inteligencia." },
];

let currentIndex = 0;

function showText(index) {
    currentIndex = index;
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');
    
    popupTitle.textContent = popups[index].title;
    popupText.textContent = popups[index].text;
    popup.classList.remove('hidden');
}

function hideText() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}

function nextText() {
    if (currentIndex < popups.length - 1) {
        showText(currentIndex + 1);
    }
}

function prevText() {
    if (currentIndex > 0) {
        showText(currentIndex - 1);
    }
}
