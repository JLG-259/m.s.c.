

gsap.registerPlugin(ScrollTrigger);

const elements = document.querySelectorAll(".zoom-box");
const textBox = document.querySelector(".text-box");
const dynamicText = document.getElementById("dynamic-text");

// Textos dinámicos para cada elemento
const texts = [
  "Las cámaras de seguridad son dispositivos electrónicos diseñados para monitorear y grabar actividades en áreas específicas, con el objetivo de garantizar la seguridad y vigilancia. En el contexto militar, estas cámaras desempeñan un papel fundamental en la protección de instalaciones, perímetros y vehículos, así como en la supervisión de operaciones tanto en entornos abiertos como cerrados. ",
  "El sistema de acceso biométrico es una tecnología que emplea características físicas o comportamentales únicas de cada persona. Gracias a esto, proporciona un nivel de seguridad superior en comparación con otros sistemas de seguridad.",
  "Los sistemas de entrada y salida automatizados operan sin necesidad de intervención manual para su apertura o cierre. Estos sistemas son empleados en diversas aplicaciones, que abarcan entornos residenciales, comerciales e industriales, y ofrecen conveniencia, seguridad y eficiencia. Su control se realiza a través de múltiples métodos, entre los cuales se incluyen controles remotos, sensores de movimiento, teclados numéricos, tarjetas de acceso, así como sistemas de reconocimiento facial o biométricos."
];

// Fijar el fondo
ScrollTrigger.create({
  trigger: ".background",
  start: "top top",
  endTrigger: elements[elements.length - 1],
  end: "top top",
  pin: true,
  pinSpacing: false,
});

// Animaciones de los elementos y el recuadro de texto
elements.forEach((element, index) => {
  const centerPosition = window.innerWidth / 2 - element.offsetWidth / 2;

  gsap.fromTo(
    element,
    { scale: 1, x: 0, opacity: 1 },
    {
      scale: 1.8,
      x: centerPosition - element.getBoundingClientRect().left,
      opacity: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 15%",
        end: "top 5%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          textBox.style.opacity = progress; // Muestra gradualmente
          dynamicText.textContent = texts[index]; // Cambia el texto dinámico
        },
        onLeave: () => {
          gsap.set(element, { display: "nne" });
          textBox.style.opacity = 1; // Oculta al completar
        },
        onEnterBack: () => {
          gsap.set(element, { display: "block", opacity: 1 });
          textBox.style.opacity = 1; // Reaparece al volver
          dynamicText.textContent = texts[index];
        },
      },
    }
  );
});
