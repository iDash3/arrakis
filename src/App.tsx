import { useEffect, useState } from "react";
import "./App.css";
import Sandstorm from "./Sandstorm";

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        "¡Cualquiera puede participar! Regístrate en el formulario. No lo pienses demasiado, ¡habrá proyectos que deberás resolver!",
    },
    {
      question: "¿Tiene algún costo?",
      answer:
        "No tiene ningún costo. Queremos que absolutamente todos participen y resuelvan problemas. México tiene mucho talento y esta es una forma de demostrarlo.",
    },
    {
      question: "¿Dónde y cuándo se llevará a cabo?",
      answer:
        "El evento será en Tecnológico de Monterrey, Campus Monterrey. Se realizará el 22 y 23 de marzo, sábado y domingo.",
    },
    {
      question: "¿Qué puedo construir?",
      answer:
        "¡Lo que quieras! Valoramos la creatividad. Para IA tendremos ciertos retos específicos, al igual que para Robótica.",
    },
    {
      question: "¿Necesito un equipo?",
      answer:
        "No es necesario, los participantes individuales son bienvenidos. Tenemos un límite de participantes, ¡así que regístrate pronto!",
    },
    {
      question: "¿Qué debo traer?",
      answer:
        "Laptop y cargador. Estamos buscando patrocinadores para la comida, compartiremos más detalles próximamente.",
    },
    {
      question: "¿Habrá premios?",
      answer:
        "Sí, habrá premios en efectivo para los ganadores, decididos por los jueces.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col text-gray-900 font-sans relative">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Orbitron&display=swap');
          .font-heading { font-family: 'Orbitron', sans-serif; }
          .font-body { font-family: 'Orbitron', sans-serif; }

          /* Original hero background animation */
          .animated-bg {
            background: url('dune.png');
            background-size: 120% 120%;
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

          /* Sandstorm effect for content sections */
          .sandstorm-wrapper {
            position: relative;
          }

          .sandstorm-layer {
            position: absolute;
            inset: 0;
            background: url('sand-texture.jpg');
            background-size: 200% 200%;
            opacity: 0;
            pointer-events: none;
          }

          .sandstorm-layer-1 {
            animation: sandstorm1 30s infinite linear,
                       opacity1 12s infinite ease-in-out;
          }

          .sandstorm-layer-2 {
            animation: sandstorm2 25s infinite linear,
                       opacity2 10s infinite ease-in-out;
          }

          .sandstorm-layer-3 {
            animation: sandstorm3 35s infinite linear,
                       opacity3 15s infinite ease-in-out;
          }

          @keyframes sandstorm1 {
            0% { background-position: 0% 0%; }
            100% { background-position: 200% 50%; }
          }

          @keyframes sandstorm2 {
            0% { background-position: 50% 50%; }
            100% { background-position: -100% -50%; }
          }

          @keyframes sandstorm3 {
            0% { background-position: -50% 0%; }
            100% { background-position: 100% 100%; }
          }

          @keyframes opacity1 {
            0%, 100% { opacity: 0.05; }
            50% { opacity: 0.1; }
          }

          @keyframes opacity2 {
            0%, 100% { opacity: 0.07; }
            50% { opacity: 0.12; }
          }

          @keyframes opacity3 {
            0%, 100% { opacity: 0.05; }
            50% { opacity: 0.15; }
          }
        `}
      </style>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 w-full bg-transparent backdrop-blur-[5px] flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 md:py-6 font-body z-10">
        <div className="w-full md:w-auto flex justify-between items-center">
          <div className="font-bold text-2xl md:text-3xl font-heading select-none text-white/100">
            Arrakis
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <nav className="hidden md:flex flex-wrap justify-center gap-4 md:gap-12 text-base md:text-xl text-white/100">
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#d4b483] z-50 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-[#4a3f35] p-2 hover:text-[#d87c2a] transition-colors"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center gap-8 text-xl text-[#4a3f35]">
            <a
              href="#faq"
              className="hover:text-[#d87c2a] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#patrocinadores"
              className="hover:text-[#d87c2a] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Patrocinadores
            </a>
            <a
              href="#registro"
              className="hover:text-[#d87c2a] transition-colors font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Registro
            </a>
          </nav>
        </div>
      </div>

      {/* Hero Section - Keep original background */}
      <section
        id="inicio"
        className="animated-bg w-full h-screen flex flex-col justify-end pb-[25vh] items-center relative overflow-hidden"
      >
        <img
          src="girlnobg.png"
          alt="Joven inspiradora"
          className={`absolute inset-0 w-full h-full object-cover md:object-contain object-center transition-opacity duration-1000 ${
            showFirstImage ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src="boynobg.png"
          alt="Joven inspirador"
          className={`absolute inset-0 w-full h-full object-cover md:object-contain object-center transition-opacity duration-1000 ${
            showFirstImage ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-md select-none">
            Arrakis
          </h1>
          <p className="font-body text-2xl sm:text-3xl md:text-4xl text-white mt-4 drop-shadow-md select-none">
            Hackathon
          </p>
          <span className="font-body text-xl sm:text-2xl md:text-3xl text-white/80 mt-4 drop-shadow-md select-none">
            <small>22-23 de Marzo</small>
          </span>
        </div>
      </section>

      {/* Main content wrapper with sandstorm effect */}
      <div className="flex-grow relative sandstorm-wrapper h-full">
        <Sandstorm className="absolute top-0 left-0 w-full h-full" />

        {/* START OF CONTENT */}
        <div className="relative z-10">
          {/* Sobre Section */}
          <section
            id="sobre"
            className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4 font-body backdrop-blur-sm"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-12">
              ¿De qué se trata?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
              Un hackathon de 48 horas patrocinado por empresas de Silicon
              Valley. Contamos con dos categorías principales: Inteligencia
              Artificial y Robótica. Con solo 100 lugares disponibles, los
              participantes competirán por premios en efectivo. El evento se
              llevará a cabo en el Tecnológico de Monterrey, Campus Monterrey.
            </p>
          </section>

          {/* Categories Section (formerly Rutas Principales) */}
          <section id="rutas" className="w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12">
              Categorías
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
              {/* IA */}
              <div className="relative h-[80vh] group">
                <img
                  src="programmer2_bg.png"
                  alt="Inteligencia Artificial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#E7DBC6] bg-opacity-10 group-hover:bg-opacity-30 flex justify-center items-center transition-all duration-300">
                  <span className="text-white text-3xl md:text-4xl font-bold opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    Inteligencia Artificial
                  </span>
                </div>
              </div>

              {/* Robótica */}
              <div className="relative h-[80vh] group">
                <img
                  src="robotics2_bg.png"
                  alt="Robótica"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#E7DBC6] bg-opacity-10 group-hover:bg-opacity-30 flex justify-center items-center transition-all duration-300">
                  <span className="text-white text-3xl md:text-4xl font-bold opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    Robótica
                  </span>
                </div>
              </div>
            </div>
            <p className="text-center text-base md:text-lg mt-6 md:mt-8 text-gray-700 max-w-3xl mx-auto px-4">
              Dos caminos, una decisión. Hardware o software, tú eliges. No lo
              pienses demasiado - ambas rutas tendrán retos que pondrán a prueba
              tu creatividad e ingenio. Lo importante es construir algo
              innovador.
            </p>
          </section>

          {/* FAQ Section */}
          <section
            id="faq"
            className="w-full max-w-5xl mx-auto py-20 px-4 font-body backdrop-blur-sm"
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
                    <p className="mt-2 text-base text-gray-700">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Sponsors Section - Adjust logo sizes */}
          <section
            id="patrocinadores"
            className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4 text-center font-body backdrop-blur-sm"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-8 md:mb-12">
              Patrocinadores
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <img
                src="sponsorone.png"
                alt="Patrocinador 1"
                className="w-32 md:w-40 object-contain"
              />
              <img
                src="worllogo.svg"
                alt="Patrocinador 2"
                className="w-32 md:w-40 object-contain"
              />
              <img
                src="TheResidencyLogo.svg"
                alt="Patrocinador 3"
                className="w-32 md:w-40 object-contain"
              />
            </div>
          </section>

          {/* Registro Section */}
          <section
            id="registro"
            className="w-full max-w-5xl mx-auto py-20 px-4 text-center font-body backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              Regístrate
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              100 lugares. 48 horas. Un espacio para crear junto a los mejores
              ingenierios y desarrolladores del país. Conecta directamente con
              empresas de Silicon Valley y construye tecnología que importe. No
              lo pienses mucho, México tiene el talento, demuéstralo.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSebLgYcggdIImgOFlYIt-hptTba6-Q1_R0DE5OBHc2E6WqEzw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#d87c2a] text-white font-semibold py-4 px-8 rounded-lg 
              shadow-[0_0_20px_rgba(216,124,42,0.5)] hover:shadow-[0_0_30px_rgba(216,124,42,0.7)] 
              hover:bg-[#e68a35] transform hover:scale-105 transition-all duration-300 
              border-2 border-[#d87c2a]/20 backdrop-blur-sm text-lg"
            >
              Asegura tu lugar
            </a>
          </section>
        </div>
      </div>

      <footer className="w-full py-6 text-center bg-[#ce9627] border-t border-gray-300 font-body">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Arrakis. Construyendo puentes entre
          el talento mexicano y Silicon Valley.
        </p>
      </footer>
    </div>
  );
}

export default App;
