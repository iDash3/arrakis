import { useEffect, useState } from "react";
import "./App.css";
import Sandstorm from "./Sandstorm";
import { motion } from "framer-motion";

const translations = {
  es: {
    header: {
      title: "Arrakis",
      links: {
        registro: "Registro",
        sponsors: "Sponsors",
        faq: "FAQ",
      },
    },
    hero: {
      title: "Arrakis",
      subtitle: "Hackathon",
      date: "¡Nuevas fechas próximamente!",
    },
    call: {
      title: "Un llamado a los mejores",
      content:
        "Ingenieros. Desarrolladores. Diseñadores. Físicos. Creadores. Si tienes la pasión por construir el futuro, este es tu momento. México tiene un talento extraordinario - demostrémoslo al mundo.",
    },
    about: {
      title: "¿De qué trata?",
      content:
        "Un hackathon de 48 horas patrocinado por empresas de Silicon Valley. Contamos con dos categorías principales: Inteligencia Artificial y Robótica. Con solo 100 lugares disponibles, los participantes competirán por premios en efectivo.\n\nEn Silicon Valley, la pasión por la tecnología es altamente valorada. Diseñadores, desarrolladores, ingenieros, físicos — cada perspectiva es valiosa. Queremos traer esa cultura a México.\n\nEl evento se llevará a cabo en el Tecnológico de Monterrey, Campus Monterrey.",
    },
    categories: {
      title: "Categorías",
      ai: "Inteligencia Artificial",
      robotics: "Robótica",
      description:
        "Dos caminos, una decisión. Hardware o software, tú eliges. No lo pienses demasiado - ambas rutas tendrán retos que pondrán a prueba tu creatividad e ingenio. Lo importante es construir algo innovador.",
    },
    register: {
      title: "Regístrate",
      content:
        "100 lugares. 48 horas. Un espacio único para crear junto a los mejores ingenieros y desarrolladores de México. Conecta directamente con empresas de Silicon Valley y construye tecnología con impacto real. México tiene el talento, es hora de demostrarlo.",
      cta: "Asegura tu lugar",
    },
    sponsors: {
      title: "Sponsors",
      individual: "Sponsors Individuales",
      becomeSponsor: "Sé un Sponsor",
      sponsorText:
        "El mundo está cambiando y la tecnología es más importante que nunca. Los mexicanos tienen un talento extraordinario - juntos podemos potenciarlo. Sé parte del movimiento que está redefiniendo el futuro tech de México.",
      contact: "Contactar",
      personalMessage: "o envía un mensaje personal",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "¿Quiénes pueden participar?",
          answer:
            "¡Cualquier estudiante puede participar! Aunque buscamos especialmente desarrolladores de software, ingenieros, físicos y diseñadores, todos los roles son altamente valorados. Regístrate en el formulario. No lo pienses demasiado, habrá retos para resolver!",
        },
        {
          question: "¿Tiene algún costo?",
          answer:
            "No tiene ningún costo. Queremos que absolutamente todos participen y resuelvan problemas. México tiene mucho talento y esta es una forma de demostrarlo.",
        },
        {
          question: "¿Dónde y cuándo se llevará a cabo?",
          answer:
            "El evento será presencial en Tecnológico de Monterrey, Campus Monterrey. Se realizará el 22 y 23 de marzo, sábado y domingo.",
        },
        {
          question: "¿Qué puedo construir?",
          answer:
            "Tendremos desafíos específicos para cada categoría (IA y Robótica) que pondrán a prueba tu habilidad! Creatividad es clave, los detalles de los retos se compartirán después del registro.",
        },
        {
          question: "¿Necesito un equipo?",
          answer:
            "No es necesario, los participantes individuales son bienvenidos. Tenemos un límite de participantes, así que regístrate pronto!",
        },
        {
          question: "¿Qué debo traer?",
          answer:
            "Laptop, cargador, identificación válida (profesional o preparatoria). Estamos en proceso de conseguir patrocinadores para la comida, compartiremos más detalles próximamente.",
        },
        {
          question: "¿Habrá premios?",
          answer:
            "Sí, habrá premios en efectivo para los ganadores, decididos por los jueces.",
        },
        {
          question: "¿Puedo obtener ayuda económica?",
          answer:
            "Contáctanos y haremos lo posible por ayudarte según tu situación, aunque no podemos garantizar nada. Queremos que el dinero no sea un impedimento para participar.",
        },
        {
          question: "¿Puedo asistir como invitado?",
          answer:
            "¡Por supuesto! Si estás interesado en asistir al evento como invitado o mentor, contáctanos directamente en Twitter: @isaacbautistas. Nos encantaría contar con tu presencia.",
        },
      ],
    },
    footer: {
      text: "© [year] Arrakis. Construyendo puentes entre el talento mexicano y Silicon Valley.",
      builtBy: "Built and designed por",
    },
    team: {
      title: "Equipo Organizador",
      description:
        "Un equipo apasionado por construir puentes entre México y Silicon Valley.",
    },
  },
  en: {
    header: {
      title: "Arrakis",
      links: {
        registro: "Registration",
        sponsors: "Sponsors",
        faq: "FAQ",
      },
    },
    hero: {
      title: "Arrakis",
      subtitle: "Hackathon",
      date: "New dates published soon!",
    },
    call: {
      title: "A Call to the Finest",
      content:
        "Engineers. Developers. Designers. Physicists. Creators. If you have the passion to build the future, this is your moment. Mexico has extraordinary talent - let's show it to the world.",
    },
    about: {
      title: "What is it about?",
      content:
        "A 48-hour hackathon sponsored by Silicon Valley companies. We have two main categories: Artificial Intelligence and Robotics. With only 100 spots available, participants will compete for cash prizes.\n\nIn Silicon Valley, passion for technology is highly valued. Designers, developers, mechanical engineers, physicists - each perspective brings something unique. We want to bring that culture to Mexico.\n\nThe event will take place at Tecnológico de Monterrey, Monterrey Campus.",
    },
    categories: {
      title: "Categories",
      ai: "Artificial Intelligence",
      robotics: "Robotics",
      description:
        "Two paths, one decision. Hardware or software, you choose. Don't overthink it - both routes will have challenges that test your creativity and ingenuity. What matters is building something innovative.",
    },
    register: {
      title: "Register",
      content:
        "100 spots. 48 hours. A unique space to create alongside Mexico's finest engineers and developers. Connect directly with Silicon Valley companies and build impactful technology. Mexico has the talent, it's time to prove it.",
      cta: "Secure your spot",
    },
    sponsors: {
      title: "Sponsors",
      individual: "Individual Sponsors",
      becomeSponsor: "Become a Sponsor",
      sponsorText:
        "The world is changing and technology is more important than ever. Mexicans are incredibly talented - together we can amplify this potential. Be part of the movement that's redefining Mexico's tech future.",
      contact: "Contact",
      personalMessage: "or send a personal message",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "Who can participate?",
          answer:
            "Any student can participate! While we're especially looking for software developers, engineers, physicists, and designers, all roles are highly valued. Register through the form. Don't overthink it - there will be challenges to solve!",
        },
        {
          question: "Does it cost anything?",
          answer:
            "No, it's free. We want absolutely everyone to participate and solve problems. Mexico has a lot of talent and this is a way to show it.",
        },
        {
          question: "Where and when will it take place?",
          answer:
            "The event will be in-person at Tecnológico de Monterrey, Campus Monterrey. It will take place on March 22 and 23, Saturday and Sunday.",
        },
        {
          question: "What can I build?",
          answer:
            "It depends on the challenge you choose! We'll have specific challenges for each category (AI and Robotics) that will test your creativity. Challenge details will be shared after registration.",
        },
        {
          question: "Do I need a team?",
          answer:
            "No, individual participants are welcome. We have a participant limit, so sign up soon!",
        },
        {
          question: "What should I bring?",
          answer:
            "Please bring a valid university ID (or student ID if in high school), laptop, charger, comfortable clothes. We're in the process of getting sponsors for food, we'll let you know more details soon.",
        },
        {
          question: "Will there be prizes?",
          answer:
            "Yes, there will be cash prizes for winners, decided by the judges.",
        },
        {
          question: "Can I get financial help?",
          answer:
            "Contact us and we'll do our best to help you based on your situation, although we can't guarantee anything. We want money not to be a barrier to participating.",
        },
        {
          question: "Can I attend as a guest?",
          answer:
            "Absolutely! If you're interested in attending the event as a guest or mentor, contact us directly on Twitter: @isaacbautistas. We'd love to have you there.",
        },
      ],
    },
    footer: {
      text: "© [year] Arrakis. Building bridges between Mexican talent and Silicon Valley.",
      builtBy: "Built and designed by",
    },
    team: {
      title: "Organizing Team",
      description:
        "A team passionate about building bridges between Mexico and Silicon Valley.",
    },
  },
};

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpanish, setIsSpanish] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  const language = isSpanish ? "es" : "en";

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
            {translations[language].header.title}
          </div>
          {/* Mobile-only controls */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleLanguage}
              className="relative w-16 h-8 bg-amber-100 rounded-full p-1 shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 transition-colors duration-300 ease-in-out"
              aria-label={isSpanish ? "Switch to English" : "Switch to Spanish"}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-end pr-2 text-amber-800 font-medium text-xs"
                initial={false}
                animate={{ opacity: isSpanish ? 1 : 0 }}
              >
                EN
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center pl-2 text-amber-800 font-medium text-xs"
                initial={false}
                animate={{ opacity: isSpanish ? 0 : 1 }}
              >
                ES
              </motion.div>
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-semibold text-amber-800"
                animate={{
                  x: isSpanish ? 0 : 32,
                }}
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 30,
                }}
              >
                {isSpanish ? "ES" : "EN"}
              </motion.div>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
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
        </div>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex flex-wrap justify-center gap-4 md:gap-12 text-base md:text-xl text-white/100 items-center">
            <a href="#registro" className="hover:underline font-bold">
              {translations[language].header.links.registro}
            </a>
            <a href="#patrocinadores" className="hover:underline">
              {translations[language].header.links.sponsors}
            </a>
            <a href="#faq" className="hover:underline">
              {translations[language].header.links.faq}
            </a>
          </nav>
          {/* Desktop language toggle */}
          <button
            onClick={toggleLanguage}
            className="relative w-16 h-8 bg-amber-100 rounded-full p-1 shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 transition-colors duration-300 ease-in-out"
            aria-label={isSpanish ? "Switch to English" : "Switch to Spanish"}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-end pr-2 text-amber-800 font-medium text-xs"
              initial={false}
              animate={{ opacity: isSpanish ? 1 : 0 }}
            >
              EN
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center pl-2 text-amber-800 font-medium text-xs"
              initial={false}
              animate={{ opacity: isSpanish ? 0 : 1 }}
            >
              ES
            </motion.div>
            <motion.div
              className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-semibold text-amber-800"
              animate={{
                x: isSpanish ? 0 : 32,
              }}
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 30,
              }}
            >
              {isSpanish ? "ES" : "EN"}
            </motion.div>
          </button>
        </div>
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
              href="#registro"
              className="hover:text-[#d87c2a] transition-colors font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {translations[language].header.links.registro}
            </a>
            <a
              href="#patrocinadores"
              className="hover:text-[#d87c2a] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {translations[language].header.links.sponsors}
            </a>
            <a
              href="#faq"
              className="hover:text-[#d87c2a] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {translations[language].header.links.faq}
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
          className={`absolute bottom-0 w-full h-[95vh] object-cover md:object-contain object-bottom transition-opacity duration-1000 ${
            showFirstImage ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src="boynobg.png"
          alt="Joven inspirador"
          className={`absolute bottom-0 w-full h-[95vh] object-cover md:object-contain object-bottom transition-opacity duration-1000 ${
            showFirstImage ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-md select-none">
            {translations[language].hero.title}
          </h1>
          <p className="font-body text-2xl sm:text-3xl md:text-4xl text-white mt-2 drop-shadow-md select-none">
            {translations[language].hero.subtitle}
          </p>
          <span className="font-body text-xl sm:text-2xl md:text-3xl text-white/80 mt-6 drop-shadow-md select-none">
            <small>{translations[language].hero.date}</small>
          </span>
        </div>
      </section>

      {/* Main content wrapper with sandstorm effect */}
      <div className="flex-grow relative sandstorm-wrapper h-full">
        <Sandstorm className="absolute top-0 left-0 w-full h-full" />
        <div className="relative z-10">
          {/* Call to Action Section */}
          <section className="w-full max-w-4xl mx-auto py-12 md:py-16 px-4 font-body backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center mb-2 text-[#d87c2a]">
              {translations[language].call.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto italic">
              {translations[language].call.content}
            </p>
          </section>

          {/* Sobre Section */}
          <section
            id="sobre"
            className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4 font-body backdrop-blur-sm"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-12">
              {translations[language].about.title}
            </h2>
            {translations[language].about.content
              .split("\n\n")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-6"
                >
                  {paragraph}
                </p>
              ))}
          </section>

          {/* Categories Section (formerly Rutas Principales) */}
          <section id="rutas" className="w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12">
              {translations[language].categories.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
              {/* IA */}
              <div className="relative h-[80vh] group">
                <img
                  src="programmer2_bg.png"
                  alt={translations[language].categories.ai}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#E7DBC6] bg-opacity-10 group-hover:bg-opacity-30 flex justify-center items-center transition-all duration-300">
                  <span className="text-white text-3xl md:text-4xl font-bold opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {translations[language].categories.ai}
                  </span>
                </div>
              </div>

              {/* Robótica */}
              <div className="relative h-[80vh] group">
                <img
                  src="robotics2_bg.png"
                  alt={translations[language].categories.robotics}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#E7DBC6] bg-opacity-10 group-hover:bg-opacity-30 flex justify-center items-center transition-all duration-300">
                  <span className="text-white text-3xl md:text-4xl font-bold opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {translations[language].categories.robotics}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-center text-base md:text-lg mt-6 md:mt-8 text-gray-700 max-w-3xl mx-auto px-4">
              {translations[language].categories.description}
            </p>
          </section>

          {/* Registro Section */}
          <section
            id="registro"
            className="w-full max-w-5xl mx-auto py-20 px-4 text-center font-body backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              {translations[language].register.title}
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              {translations[language].register.content}
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
              {translations[language].register.cta}
            </a>
          </section>

          {/* Sponsors Section */}
          <section
            id="patrocinadores"
            className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4 text-center font-body backdrop-blur-sm"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-8 md:mb-12">
              {translations[language].sponsors.title}
            </h2>
            {/* Main sponsors row */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8">
              <a
                href="https://tec.mx/en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="sponsorone.png"
                  alt="Tecnológico de Monterrey"
                  className="w-32 md:w-40 object-contain"
                />
              </a>
              <a
                href="https://worldcoin.org/world-app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="worllogo.svg"
                  alt="World App"
                  className="w-32 md:w-40 object-contain"
                />
              </a>
              <a
                href="https://www.livetheresidency.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="TheResidencyLogo.svg"
                  alt="The Residency"
                  className="w-32 md:w-40 object-contain"
                />
              </a>
            </div>
            {/* Secondary sponsors row */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <a
                href="https://zepheon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="zepheonlarge.png"
                  alt="Zepheon"
                  className="w-32 md:w-40 object-contain"
                />
              </a>
              <a
                href="https://globe.engineer/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="globe.png"
                  alt="Globe"
                  className="w-24 md:w-32 object-contain"
                />
              </a>
            </div>

            {/* Individual sponsors circle */}
            <div className="mt-12">
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-8">
                {translations[language].sponsors.individual}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
                {[
                  "isaac.jpeg",
                  "sully.png",
                  "ivan.jpeg",
                  "yoran.jpeg",
                  "diego.jpeg",
                ].map((image, i) => (
                  <div key={i} className="group relative">
                    <img
                      src={image}
                      alt={`Individual Sponsor ${i + 1}`}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover 
                        border-2 border-[#d87c2a] transition-transform duration-300 
                        hover:scale-110 hover:border-4"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-300">
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">
                {translations[language].sponsors.becomeSponsor}
              </h3>
              <p className="text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                {translations[language].sponsors.sponsorText}
              </p>
              <div className="flex justify-center gap-6 flex-wrap items-center">
                <a
                  href="mailto:arrakis@isaacbs.com"
                  className="inline-block bg-[#d87c2a] text-white font-semibold py-3 px-6 rounded-lg 
                  hover:bg-[#e68a35] transform hover:scale-105 transition-all duration-300"
                >
                  {translations[language].sponsors.contact}
                </a>
                <a
                  href="https://www.linkedin.com/in/isaacbau/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d87c2a] underline font-medium"
                >
                  {translations[language].sponsors.personalMessage}
                </a>
              </div>
            </div>
          </section>

          {/* Team Section */}
          {/* <section className="w-full max-w-5xl mx-auto py-16 px-4 text-center font-body backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-12">
              {translations[language].team.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                {
                  image: "isaac.jpeg",
                  name: "Isaac Bautista",
                  role: "Director",
                  link: "https://twitter.com/isaacbautistas",
                },
                {
                  image: "sully.png",
                  name: "Sully Ledezma",
                  role: "Operations",
                  link: "https://twitter.com/sullyledezma",
                },
                {
                  image: "ivan.jpeg",
                  name: "Ivan Gonzalez",
                  role: "Technology",
                  link: "https://twitter.com/ivangzzz",
                },
                {
                  image: "yoran.jpeg",
                  name: "Yoran Betancourt",
                  role: "Design",
                  link: "https://twitter.com/yoranb",
                },
              ].map((member, i) => (
                <a
                  key={i}
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="relative mb-4 transform transition-all duration-300 group-hover:scale-105">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#d87c2a] group-hover:border-4 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-[#d87c2a] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-[#d87c2a] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </a>
              ))}
            </div>
          </section> */}

          {/* FAQ Section */}
          <section
            id="faq"
            className="w-full max-w-5xl mx-auto py-20 px-4 font-body backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8">
              {translations[language].faq.title}
            </h2>
            <div className="space-y-6">
              {translations[language].faq.items.map((item, index) => (
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
        </div>
      </div>

      <footer className="w-full py-6 text-center bg-[#ce9627] border-t border-gray-300 font-body">
        <p className="text-sm">
          <a
            href="https://www.instagram.com/arrakis_hackathon"
            className="font-bold text-base hover:text-white transition-colors inline-flex items-center justify-center gap-2 mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="inline-block"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @arrakis_hackathon
          </a>
          <br />
          {translations[language].footer.text.replace(
            "[year]",
            new Date().getFullYear().toString()
          )}
          <br />
          <span className="text-[10px] opacity-60 mt-3 inline-block">
            {translations[language].footer.builtBy}{" "}
            <a
              href="https://zepheon.com"
              className="underline hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zepheon
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
