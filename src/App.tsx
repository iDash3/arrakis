import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const faqData = [
    {
      question: "¿Quiénes pueden participar?",
      answer:
        "Cualquiera con ganas de inventar, aprender y crear. No importa tu nivel, solo importa tu curiosidad.",
    },
    {
      question: "¿Tiene algún costo?",
      answer:
        "No. Queremos que todos tengan la oportunidad de explorar nuevas ideas sin barreras.",
    },
    {
      question: "¿Dónde se llevará a cabo?",
      answer:
        "El evento será en Tecnológico de Monterrey, Campus Monterrey. Proporcionaremos todos los detalles específicos a los participantes registrados.",
    },
    {
      question: "¿Qué puedo construir?",
      answer:
        "Lo que tu imaginación dicte: prototipos de robótica, proyectos de IA, herramientas web, algo que sacuda el polvo de lo convencional.",
    },
    {
      question: "¿Necesito un equipo?",
      answer:
        "Puedes venir solo o con equipo. Si vienes solo, tendremos una sesión de networking para formar equipos al inicio del evento.",
    },
    {
      question: "¿Qué debo traer?",
      answer:
        "Tu laptop, cargador, una mente abierta y muchas ganas de crear. Nosotros nos encargamos de la comida, bebidas y snacks durante todo el evento.",
    },
    {
      question: "¿Habrá premios?",
      answer: "Sí. Premios en efectivo a los ganadores.",
    },
  ];

  return (
    <div className="w-full h-full text-gray-900 font-sans relative">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Orbitron&display=swap');
          .font-heading { font-family: 'Orbitron', sans-serif; }
          .font-body { font-family: 'Orbitron', sans-serif; }

          /* Background animation - subtle shifting sand pattern */
          body {
            overflow-x: hidden;
          }

          .animated-bg {
            background: url('sand-texture.png');
            background-size: 120% auto;
            background-repeat: repeat-x;
            background-position: center;
            animation: moveSand 30s infinite linear;
          }

          @keyframes moveSand {
            0% { 
              background-position: 0% center;
            }
            100% { 
              background-position: 100% center;
            }
          }
        `}
      </style>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 w-full bg-transparent backdrop-blur-[5px] flex justify-between items-center px-8 py-6 font-body z-10">
        <div className="font-bold text-3xl font-heading select-none text-white/100">
          Arrakis
        </div>
        <nav className="flex space-x-12 text-xl text-white/100">
          <a href="#sobre" className="hover:underline">
            Sobre
          </a>
          <a href="#rutas" className="hover:underline">
            Rutas Principales
          </a>
          <a href="#faq" className="hover:underline">
            FAQ
          </a>
          <a href="#patrocinadores" className="hover:underline">
            Patrocinadores
          </a>
          <a href="#registro" className="hover:underline font-bold">
            Registro
          </a>
        </nav>
      </header>

      {/* Hero Section with its own background */}
      <section
        id="inicio"
        className="animated-bg w-full h-screen flex flex-col justify-center items-center relative overflow-hidden"
      >
        <img
          src="girlnobg.png"
          alt="Joven inspiradora"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            showFirstImage ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src="boynobg.png"
          alt="Joven inspirador"
          className={`absolute inset-0 w-full h-full object-cover object-center-[60%] transition-opacity duration-1000 ${
            showFirstImage ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="font-heading text-8xl md:text-9xl font-bold text-white drop-shadow-md select-none">
            Arrakis
          </h1>
          <p className="font-body text-3xl md:text-4xl text-white mt-4 drop-shadow-md select-none">
            Hackathon
          </p>
        </div>
      </section>

      {/* Main content wrapper with gradient background */}
      <div className="w-full bg-gradient-to-b from-[#e9d5b7] via-[#f0e2cc] to-[#f7efe3]">
        {/* Sobre Section */}
        <section
          id="sobre"
          className="w-full max-w-5xl mx-auto py-20 px-4 font-body"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
            ¿De qué se trata?
          </h2>
          <p className="text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Arrakis es un hackathon de 48 horas que conecta el talento mexicano
            con Silicon Valley. Reunimos a estudiantes y profesionales
            apasionados por la tecnología para construir soluciones innovadoras
            que resuelvan desafíos reales. Una oportunidad única para crear
            conexiones, aprender de mentores de clase mundial y dar el siguiente
            paso en tu carrera tecnológica.
          </p>
        </section>

        {/* Rutas Principales Section */}
        <section id="rutas" className="w-full py-20 px-0 font-body">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Rutas Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            {/* Robótica */}
            <div className="relative group cursor-pointer overflow-hidden">
              <img
                src="robotics-placeholder.png"
                alt="Robótica"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl font-bold">
                  Robótica e IoT
                </span>
              </div>
            </div>

            {/* IA */}
            <div className="relative group cursor-pointer overflow-hidden">
              <img
                src="ai-placeholder.png"
                alt="Inteligencia Artificial"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl font-bold">
                  IA y Machine Learning
                </span>
              </div>
            </div>
          </div>
          <p className="text-center text-lg mt-8 text-gray-700 max-w-3xl mx-auto">
            Dos caminos, infinitas posibilidades. Elige tu ruta y trabaja con
            las últimas tecnologías junto a mentores especializados de Silicon
            Valley.
          </p>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="w-full max-w-5xl mx-auto py-20 px-4 font-body"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8">
            FAQ
          </h2>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <button
                  className="w-full text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="font-semibold text-lg">{item.question}</h3>
                  <span className="text-xl">
                    {openFAQ === index ? "-" : "+"}
                  </span>
                </button>
                {openFAQ === index && (
                  <p className="mt-2 text-base text-gray-700">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Sponsors Section */}
        <section
          id="patrocinadores"
          className="w-full max-w-5xl mx-auto py-20 px-4 text-center font-body"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            Patrocinadores
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Respaldado por empresas líderes en tecnología que están construyendo
            el puente entre México y Silicon Valley. Nuestros patrocinadores no
            solo aportan recursos, sino también mentoría y oportunidades reales.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            <img
              src="sponsor-logo1.png"
              alt="Patrocinador 1"
              className="w-40 object-contain"
            />
            <img
              src="sponsor-logo2.png"
              alt="Patrocinador 2"
              className="w-40 object-contain"
            />
            <img
              src="sponsor-logo3.png"
              alt="Patrocinador 3"
              className="w-40 object-contain"
            />
          </div>
        </section>

        {/* Registro Section */}
        <section
          id="registro"
          className="w-full max-w-5xl mx-auto py-20 px-4 text-center font-body"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            Regístrate
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Da el primer paso hacia una experiencia que podría cambiar tu
            carrera. Plazas limitadas para asegurar la mejor experiencia y
            atención personalizada.
          </p>
          <a
            href="#registro-form"
            className="inline-block bg-[#d87c2a] text-white font-semibold py-3 px-6 rounded hover:bg-[#b7651c] transition-colors"
          >
            Asegura tu lugar
          </a>
        </section>
      </div>

      <footer className="w-full py-6 text-center bg-[#e7dbc6] border-t border-gray-300 font-body">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Arrakis. Construyendo puentes entre
          el talento mexicano y Silicon Valley.
        </p>
      </footer>
    </div>
  );
}

export default App;
