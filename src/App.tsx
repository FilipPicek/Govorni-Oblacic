import React from 'react';
import { 
  Sun, 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  BookOpen, 
  MessageSquare, 
  Star,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { Cloud1, Cloud2, Cloud3, Cloud4, Cloud5, Cloud6, Cloud7, Cloud8 } from './components/CloudShapes';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState('home');
  const [mobileGrupnaOpen, setMobileGrupnaOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, []);

  const scrollToSection = (elementId: string) => {
    // Handle special pages
    if (elementId === 'posebnosti') {
      navigateToPage('posebnosti');
      return;
    }
    if (elementId === 'montessori') {
      navigateToPage('montessori');
      return;
    }
    if (elementId === 'nas-tim') {
      navigateToPage('nas-tim');
      return;
    }
    if (elementId === 'galerija') {
      navigateToPage('galerija');
      return;
    }
    if (elementId === 'logopedska-procjena') {
      navigateToPage('logopedska-procjena');
      return;
    }
    if (elementId === 'grupna-terapija') {
      navigateToPage('grupna-terapija');
      return;
    }
    if (elementId === 'savjetovanje-radionice') {
      navigateToPage('savjetovanje-radionice');
      return;
    }
    
    // Handle contact with hash
    if (elementId === 'kontakt' || elementId === 'kontakti') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const element = document.getElementById('kontakt');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById('kontakt');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsMenuOpen(false);
      return;
    }
    
    // For home page sections, ensure we're on home first
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    scrollToSection('kontakt');
  };

  const goHome = () => {
    setCurrentPage('home');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Shared Header Component
  const Header = () => (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button onClick={goHome} className="flex items-center space-x-3">
            <img 
              src="https://logopedski-centar.com/wp-content/uploads/2019/05/Ikona512x512.png" 
              alt="LOGOPEDSKI CENTAR Govorni Oblačić" 
              className="w-12 h-12 rounded-full shadow-lg"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-sky-700 tracking-wide">
                LOGOPEDSKI CENTAR
              </h1>
              <p className="text-sm text-sky-600 font-medium">Govorni Oblačić</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <div className="relative group">
              <button
                onClick={() => scrollToSection('o-nama')}
                className="text-sky-700 hover:text-sky-500 font-medium transition-colors duration-200 flex items-center"
              >
                O Nama
                <ChevronRight className="w-4 h-4 ml-1 group-hover:rotate-90 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-sky-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2 px-2">
                  <button
                    onClick={() => scrollToSection('posebnosti')}
                    className="block w-full text-left px-3 py-3 text-sky-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200 rounded-lg"
                  >
                    Naše posebnosti
                  </button>
                  <button
                    onClick={() => scrollToSection('montessori')}
                    className="block w-full text-left px-3 py-3 text-sky-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200 rounded-lg"
                  >
                    Montessori
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('nas-tim')}
              className="text-sky-700 hover:text-sky-500 font-medium transition-colors duration-200"
            >
              Naš Tim
            </button>
            <div className="relative group">
              <button
                onClick={() => scrollToSection('usluge')}
                className="text-sky-700 hover:text-sky-500 font-medium transition-colors duration-200 flex items-center"
              >
                Usluge
                <ChevronRight className="w-4 h-4 ml-1 group-hover:rotate-90 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-sky-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2 px-2">
                  <button
                    onClick={() => scrollToSection('logopedska-procjena')}
                    className="block w-full text-left px-3 py-3 text-sky-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200 rounded-lg"
                  >
                    Logopedska procjena
                  </button>
                  <button
                    onClick={() => navigateToPage('individualna-terapija')}
                    className="block w-full text-left px-3 py-3 text-sky-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200 rounded-lg"
                  >
                    Individualna terapija
                  </button>
                  {/* Grupna terapija with nested dropdown */}
                  <div className="relative group/nested">
                    <button
                      onClick={() => scrollToSection('grupna-terapija')}
                      className="flex items-center justify-between w-full text-left px-3 py-3 text-sky-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200 rounded-lg"
                    >
                      Grupna terapija
                      <ChevronRight className="w-4 h-4 group-hover/nested:rotate-90 transition-transform duration-200" />
                    </button>
                    <div className="absolute left-full top-0 ml-2 w-80 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-sky-200 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 transform translate-x-2 group-hover/nested:translate-x-0 z-50">
                      <div className="py-2 px-2">
                        <button
                          onClick={() => navigateToPage('s-govornim-oblacicem-u-skolu')}
                          className="block w-full text-left px-3 py-2 text-sky-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200 rounded-lg text-sm"
                        >
                          S Govornim Oblačićem u školu
                        </button>
                        <button
                          onClick={() => navigateToPage('superjunaci-pisu')}
                          className="block w-full text-left px-3 py-2 text-sky-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200 rounded-lg text-sm"
                        >
                          Superjunaci pišu
                        </button>
                        <button
                          onClick={() => navigateToPage('istrazujemo-ucimo-druzimo')}
                          className="block w-full text-left px-3 py-2 text-sky-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200 rounded-lg text-sm"
                        >
                          Istražujemo, učimo, družimo se u Govornom Oblačiću
                        </button>
                        <button
                          onClick={() => navigateToPage('pomozi-mi-da-ucinim-sam')}
                          className="block w-full text-left px-3 py-2 text-sky-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200 rounded-lg text-sm"
                        >
                          Pomozi mi da uči(ni)m sam!
                        </button>
                        <button
                          onClick={() => navigateToPage('put-oko-svijeta')}
                          className="block w-full text-left px-3 py-2 text-sky-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200 rounded-lg text-sm"
                        >
                          Put oko svijeta s Govornim Oblačićem
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => scrollToSection('savjetovanje-radionice')}
                    className="block w-full text-left px-3 py-3 text-sky-700 hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200 rounded-lg"
                  >
                    Savjetovanje i radionice
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('novosti')}
              className="text-sky-700 hover:text-sky-500 font-medium transition-colors duration-200"
            >
              Novosti
            </button>
            <button
              onClick={() => scrollToSection('galerija')}
              className="text-sky-700 hover:text-sky-500 font-medium transition-colors duration-200"
            >
              Galerija
            </button>
            <button
              onClick={handleContactClick}
              className="text-sky-700 hover:text-sky-500 font-medium transition-colors duration-200"
            >
              Kontakt
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-sky-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-sky-100">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('o-nama')}
              className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-2"
            >
              O Nama
            </button>
            <button
              onClick={() => scrollToSection('posebnosti')}
              className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-2 ml-4"
            >
              Naše posebnosti
            </button>
            <button
              onClick={() => scrollToSection('montessori')}
              className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-2 ml-4"
            >
              Montessori
            </button>
            <button
              onClick={() => scrollToSection('nas-tim')}
              className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-2"
            >
              Naš Tim
            </button>
            <button
              onClick={() => scrollToSection('usluge')}
              className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-2"
            >
              Usluge
            </button>
            <button
              onClick={() => scrollToSection('logopedska-procjena')}
              className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-2 ml-4"
            >
              Logopedska procjena
            </button>
            <button
              onClick={() => {
                navigateToPage('individualna-terapija');
              }}
              className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-2 ml-4"
            >
              Individualna terapija
            </button>
            <div>
              <button
                onClick={() => {
                  setMobileGrupnaOpen(!mobileGrupnaOpen);
                  scrollToSection('grupna-terapija');
                }}
                className="flex items-center justify-between w-full text-left text-sky-700 hover:text-sky-500 font-medium py-2 ml-4"
              >
                Grupna terapija
                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${mobileGrupnaOpen ? 'rotate-90' : ''}`} />
              </button>
              {mobileGrupnaOpen && (
                <div className="ml-8 mt-2 space-y-2">
                  <button
                    onClick={() => {
                      navigateToPage('s-govornim-oblacicem-u-skolu');
                    }}
                    className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-1 text-sm"
                  >
                    S Govornim Oblačićem u školu
                  </button>
                  <button
                    onClick={() => {
                      navigateToPage('superjunaci-pisu');
                    }}
                    className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-1 text-sm"
                  >
                    Superjunaci pišu
                  </button>
                  <button
                    onClick={() => {
                      navigateToPage('istrazujemo-ucimo-druzimo');
                    }}
                    className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-1 text-sm"
                  >
                    Istražujemo, učimo, družimo se u Govornom Oblačiću
                  </button>
                  <button
                    onClick={() => {
                      navigateToPage('pomozi-mi-da-ucinim-sam');
                    }}
                    className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-1 text-sm"
                  >
                    Pomozi mi da uči(ni)m sam!
                  </button>
                  <button
                    onClick={() => {
                      navigateToPage('put-oko-svijeta');
                    }}
                    className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-1 text-sm"
                  >
                    Put oko svijeta s Govornim Oblačićem
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection('savjetovanje-radionice')}
              className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-2 ml-4"
            >
              Savjetovanje i radionice
            </button>
            <button
              onClick={() => scrollToSection('novosti')}
              className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-2"
            >
              Novosti
            </button>
            <button
              onClick={() => scrollToSection('galerija')}
              className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-2"
            >
              Galerija
            </button>
            <button
              onClick={handleContactClick}
              className="block w-full text-left text-sky-700 hover:text-sky-500 font-medium py-2"
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </header>
  );

  // Page Components
  const PosebnotiPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-100 to-indigo-200">
      <Header />
      <section className="relative py-20 overflow-hidden pt-32">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-200/20 via-transparent to-indigo-300/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-sky-300/20 rounded-full blur-3xl"></div>
          
          {/* Floating clouds with different sizes and animations */}
          <Cloud1 className="absolute top-20 left-20 w-8 h-8 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud2 className="absolute bottom-20 right-20 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud3 className="absolute top-40 left-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud4 className="absolute bottom-40 right-1/4 w-14 h-14 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud1 className="absolute top-60 right-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud2 className="absolute bottom-60 left-1/4 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud3 className="absolute top-32 right-1/2 w-14 h-14 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud4 className="absolute bottom-32 left-1/2 w-16 h-16 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.7)" />
          <Cloud1 className="absolute top-10 right-10 w-6 h-6 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.6)" />
          <Cloud2 className="absolute bottom-10 left-10 w-8 h-8 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud3 className="absolute top-80 left-10 w-12 h-12 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.65)" />
          <Cloud4 className="absolute bottom-80 right-10 w-10 h-10 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud1 className="absolute top-16 left-1/2 w-14 h-14 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.7)" />
          <Cloud2 className="absolute bottom-16 right-1/2 w-9 h-9 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.65)" />
          <Cloud3 className="absolute top-72 right-1/4 w-11 h-11 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud4 className="absolute bottom-72 left-1/4 w-13 h-13 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.6)" />
          <Cloud1 className="absolute top-28 left-1/5 w-7 h-7 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Naše Posebnosti</h1>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Što nas čini jedinstvenim u pružanju logopedske podrške
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-3 rounded-full shadow-lg flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-sky-700 mb-3">• stvaranje poticajnog okruženja</h2>
                  <p className="text-sky-600 leading-relaxed text-lg">
                    Kreiramo prostor gdje se djeca osjećaju sigurno i motivirano za učenje kroz igru i kreativne aktivnosti.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-pink-400 to-rose-500 p-3 rounded-full shadow-lg flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-sky-700 mb-3">• individualizirani pristup</h2>
                  <p className="text-sky-600 leading-relaxed text-lg">
                    Svako dijete je jedinstveno, stoga prilagođavamo terapiju prema njegovim potrebama, interesima i stilu učenja.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-full shadow-lg flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-sky-700 mb-3">• evaluacija ostvarenih ciljeva/postignuća</h2>
                  <p className="text-sky-600 leading-relaxed text-lg">
                    Redovito pratimo napredak i postignuća vašeg djeteta, osiguravajući da terapija donosi vidljive rezultate.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-3 rounded-full shadow-lg flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-sky-700 mb-3">• razvijanje partnerskog odnosa s roditeljima</h2>
                  <p className="text-sky-600 leading-relaxed text-lg">
                    Usklađujemo se s roditeljima kako bismo zajedno postigli najbolje rezultate za vaše dijete.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full shadow-lg flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-sky-700 mb-3">• kontinuirano stručno usavršavanje</h2>
                  <p className="text-sky-600 leading-relaxed text-lg">
                    Naš tim se redovito usavršava kako bismo koristili najnovije i najučinkovitije metode terapije.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={goHome}
                className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                ← Povratak na početnu
              </button>
              <button
                onClick={handleContactClick}
                className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white/20"
              >
                Kontaktirajte nas
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const MontessoriPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-100 to-indigo-200">
      <Header />
      <section className="relative py-20 overflow-hidden pt-32">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-200/20 via-transparent to-indigo-300/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-sky-300/20 rounded-full blur-3xl"></div>
          
          {/* Floating clouds with different sizes and animations */}
          <Cloud1 className="absolute top-20 left-20 w-8 h-8 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud2 className="absolute bottom-20 right-20 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud3 className="absolute top-40 left-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud4 className="absolute bottom-40 right-1/4 w-14 h-14 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud1 className="absolute top-60 right-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud2 className="absolute bottom-60 left-1/4 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud3 className="absolute top-32 right-1/2 w-14 h-14 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud4 className="absolute bottom-32 left-1/2 w-16 h-16 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.7)" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Montessori Pedagogija</h1>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Znanstveni pristup razvoju djeteta kroz samostalnost i poštovanje
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200 mb-8">
            <div className="text-left space-y-6 text-lg text-sky-700 leading-relaxed">
              <p className="text-xl font-semibold text-sky-800">
                Montessori pedagogija temelji se na znanstvenom promatranju spontanog učenja djece, na poticanju vlastitog djelovanja djeteta i njegove samostalnosti te na poštovanju djetetove osobnosti.
              </p>
              
              <p>
                U središtu Montessori pedagogije je dijete. Ona na dijete gleda kao cjelovito biće te ga poštuje u njegovoj cjelovitosti <strong className="text-sky-800">(HOLISTIČKI PRISTUP)</strong>.
              </p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200 mb-8">
            <h2 className="text-3xl font-bold text-sky-700 mb-6">Znanstvena Osnova</h2>
            <div className="text-left space-y-4 text-lg text-sky-700 leading-relaxed">
              <p>
                Maria Montessori svoju je metodu oblikovala na temelju promatranja djece u različitim stadijima razvoja te u dodiru s djecom iz različitih kultura. Uočila je karakteristike koje su uobičajene za svu djecu te ih nazvala <strong className="text-sky-800">univerzalnim karakteristikama djetinjstva</strong>. One su sljedeće:
              </p>
              
              <div className="bg-sky-50 rounded-2xl p-6 border-2 border-sky-200">
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start space-x-3">
                    <span className="text-sky-600 text-2xl font-bold">•</span>
                    <span><strong className="text-sky-800">Sva djeca imaju upijajući um</strong></span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-sky-600 text-2xl font-bold">•</span>
                    <span><strong className="text-sky-800">Sva djeca prolaze kroz razdoblja posebne osjetljivosti</strong></span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-sky-600 text-2xl font-bold">•</span>
                    <span><strong className="text-sky-800">Sva djeca žele učiti</strong></span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-sky-600 text-2xl font-bold">•</span>
                    <span><strong className="text-sky-800">Sva djeca prolaze kroz nekoliko faza razvoja</strong></span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-sky-600 text-2xl font-bold">•</span>
                    <span><strong className="text-sky-800">Sva djeca žele biti neovisna</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200 mb-8">
            <h2 className="text-3xl font-bold text-sky-700 mb-6">Ključni Elementi Montessori Pedagogije</h2>
            <div className="text-left space-y-4 text-lg text-sky-700 leading-relaxed">
              <p>
                <strong className="text-sky-800">Najvažniji element Montessori pedagogije</strong> je prikladno pripremljena okolina s posebnim Montessori razvojnim didaktičkim priborom i poseban društveni okvir koji nudi Montessori odgojitelj, odnosno Montessori učitelj.
              </p>
              
              <p>
                Postavka pedagogije je da sva djeca imaju urođenu motivaciju za učenje. Učenje počinje od rođenja te se temelji procesa kako dijete uči postavljaju vrlo rano u životu. Sva djeca uče aktivno sudjelujući, pokušavajući učiniti nešto sama, osobito se koristeći rukama.
              </p>
              
              <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-2xl p-6 border-2 border-sky-300 text-center">
                <p className="text-2xl font-bold text-sky-800 italic">
                  "Pomozi mi da učinim sam!"
                </p>
                <p className="text-lg text-sky-700 mt-2">
                  Moto Montessori pedagogije
                </p>
              </div>
              
              <p>
                Odrasli moraju pomoći djetetu, ali na takav način da dijete može samostalno djelovati i raditi nešto stvarno u svijetu.
              </p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200 mb-8">
            <h2 className="text-3xl font-bold text-sky-700 mb-6">Znanstveni Izvori</h2>
            <div className="text-left space-y-4 text-lg text-sky-700 leading-relaxed">
              <div className="bg-sky-50 rounded-2xl p-6 border-2 border-sky-200">
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start space-x-3">
                    <span className="text-sky-600 text-xl">📚</span>
                    <span><strong className="text-sky-800">Britton, L. (2000).</strong> Montessori: Učenje kroz igru</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-sky-600 text-xl">📖</span>
                    <span><strong className="text-sky-800">Phillips, S. (2003).</strong> Priprema za život: Odgoj neovisnosti i odgovornosti.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-3xl p-10 shadow-2xl border-4 border-sky-300 mb-8">
            <h2 className="text-3xl font-bold text-sky-800 mb-6 text-center">Filozofski Temelj</h2>
            <div className="text-center space-y-4 text-lg text-sky-800 leading-relaxed">
              <p className="text-xl italic font-medium">
                "Nije moguće utjecati na neko ljudsko biće jednom kada je odrastao čovjek, njime se mora pozabaviti mnogo ranije. Onaj tko želi da pred sobom jednog dana vidi čovjeka, mora se prije toga pozabaviti djetetom. Razdvajati različite životne faze potpuno je besmisleno."
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={goHome}
                className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                ← Povratak na početnu
              </button>
              <button
                onClick={handleContactClick}
                className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white/20"
              >
                Kontaktirajte nas
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  if (currentPage === 'posebnosti') {
    return <PosebnotiPage />;
  }

  if (currentPage === 'montessori') {
    return <MontessoriPage />;
  }

  const NasTimPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-100 to-indigo-200">
      <Header />
      <section className="relative py-20 overflow-hidden pt-32">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-200/20 via-transparent to-indigo-300/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-sky-300/20 rounded-full blur-3xl"></div>
          
          {/* Floating clouds with different sizes and animations */}
          <Cloud1 className="absolute top-20 left-20 w-8 h-8 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud2 className="absolute bottom-20 right-20 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud3 className="absolute top-40 left-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud4 className="absolute bottom-40 right-1/4 w-14 h-14 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud1 className="absolute top-60 right-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud2 className="absolute bottom-60 left-1/4 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud3 className="absolute top-32 right-1/2 w-14 h-14 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud4 className="absolute bottom-32 left-1/2 w-16 h-16 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.7)" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Naš Tim</h1>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Upoznajte stručnjake koji čine srce našeg centra
            </p>
          </div>
          
          {/* Martina Labaš Batković */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200 mb-8">
            <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                             {/* Profile Image */}
               <div className="relative flex-shrink-0">
                 <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-sky-100 to-blue-200 p-1">
                   <div className="w-full h-full rounded-xl overflow-hidden border-2 border-sky-200/50">
                     <img 
                       src="pictureofteam/MartinaLabasBatkovicgovornioblacic.png" 
                       alt="Martina Labaš Batković" 
                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                     />
                   </div>
                 </div>
                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full shadow-lg flex items-center justify-center">
                   <div className="w-4 h-4 bg-white rounded-full"></div>
                 </div>
               </div>
              
              {/* Profile Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-sky-700 mb-2">Martina Labaš Batković, mag.logoped.</h2>
                  <p className="text-xl text-sky-600 font-semibold mb-4">Voditeljica Centra</p>
                </div>
                
                <div className="space-y-4 text-lg text-sky-700 leading-relaxed">
                  <p>
                    Martina Labaš rođena je 1989. godine u Zagrebu, gdje je završila osnovnu školu i opću gimnaziju. Diplomirala je 2013. godine na Edukacijsko-rehabilitacijskom fakultetu pod stručnim mentorstvom prof.dr.sc. Natalije Bolfan-Stošić na temu <strong className="text-sky-800">Odstupanja u glasu petogodišnjaka i šestogodišnjaka s obzirom na procjenu vokalnog ponašanja</strong> i time stekla naziv magistre logopedije.
                  </p>
                  
                  <p>
                    Tijekom fakultetskog obrazovanja svoje teoretsko i praktično znanje nadopunjuje uključujući se u volonterske aktivnosti u udruzi <strong className="text-sky-800">Ja to mogu</strong>, gdje aktivno pruža stručnu pomoć u učenju djeci s teškoćama čitanja i pisanja.
                  </p>
                  
                  <p>
                    U rujnu 2013. godine upisuje jednogodišnju edukaciju iz područja Montessori pedagogije pri Stručno-razvojnom centru Montessori dječjeg vrtića <strong className="text-sky-800">Srčeko</strong> te 2014. godine nadopunjuje svoje obrazovanje diplomom Montessori pedagoga. Iste godine zapošljava se kao stručni suradnik logoped u dječjem vrtiću <strong className="text-sky-800">Smjehuljica</strong>.
                  </p>
                  
                  <p>
                    Koautorica je <strong className="text-sky-800">Kraćeg programa za djecu s teškoćama glasovno-govorno-jezične komunikacije</strong>, koji je verificiran od strane Ministarstva znanosti i obrazovanja. Od 2013. godine provodi logopedsku terapiju i savjetovanje u privatnom logopedskom kabinetu <strong className="text-sky-800">EnTenTini</strong>, gdje od 2016. godine vodi kabinet te provodi i logopedsku procjenu.
                  </p>
                  
                  <p>
                    U suradnji s Edukacijsko-rehabilitacijskim fakultetom i Laboratorijem za psiholingvistička istraživanja i drugim sustručnjacima, u 2014./2015. godini provodi predstandardizaciju <strong className="text-sky-800">Nove Reynell razvojne jezične ljestvice (RDLS – HR)</strong>.
                  </p>
                  
                  <p>
                    U listopadu 2015. godine sudjeluje na Međunarodno certificiranom tečaju <strong className="text-sky-800">Sustava komuniciranja razmjenom slike (PECS-basic)</strong>, u siječnju 2016. godine na <strong className="text-sky-800">Floortime konferenciji</strong> te nastavlja daljnje obrazovanje o Floortime metodi.
                  </p>
                  
                  <p>
                    Tijekom 2017. godine u suradnji s <strong className="text-sky-800">HURIDOM</strong> pruža stručnu potporu u obitelji u okviru projekta <strong className="text-sky-800">Dobar start za sve: stručna potpora ugroženom djetetu rane dobi i njegovom okruženju</strong>.
                  </p>
                  
                  <p>
                    Od siječnja 2018. godine vodi <strong className="text-sky-800">Logopedski Centar Govorni Oblačić</strong>, gdje provodi logopedsku procjenu, individualnu i grupnu terapiju, savjetodavni rad i Montessori radionice. Svoje stručno znanje nastoji kontinuirano dopunjavati praćenjem stručne literature, sudjelovanjem na seminarima i radionicama te simpozijima i kongresima. Članica je <strong className="text-sky-800">Hrvatskog logopedskog društva</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ruža Petric */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200 mb-8">
            <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-sky-100 to-blue-200 p-1">
                  <div className="w-full h-full rounded-xl overflow-hidden border-2 border-sky-200/50">
                    <img 
                      src="pictureofteam/ruzapetriclogopedskicentar.png" 
                      alt="Ruža Petric" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                      style={{objectPosition: 'center 30%'}}
                    />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Profile Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-sky-700 mb-2">Ruža Petric, mag.logoped.</h2>
                </div>
                
                <div className="space-y-4 text-lg text-sky-700 leading-relaxed">
                  <p>
                    Ruža Petric rođena je 1991. godine u Splitu, gdje je završila osnovnu školu i klasičnu gimnaziju <strong className="text-sky-800">Don Frane Bulić</strong>. Diplomirala je 2016. godine na Edukacijsko – rehabilitacijskom fakultetu na temu <strong className="text-sky-800">Primjena Testa govora u buci kod djece starije vrtićke dobi</strong> i time stekla naziv magistre logopedije.
                  </p>
                  
                  <p>
                    Tijekom fakultetskog obrazovanja svoje teoretsko i praktično znanje nadopunjuje uključujući se u različite volonterske aktivnosti u udrugama i ustanovama (<strong className="text-sky-800">Udruga Slijepih Zagreb, Dječji dom Nazorova, Udruga Ja to mogu, Dječji vrtić Srednjaci, Rastimo zajedno</strong>). Volonterskim iskustvom stječe različita znanja u radu s djecom različite dobi.
                  </p>
                  
                  <p>
                    2016. godine zapošljava se u <strong className="text-sky-800">Dječjem vrtiću Sesvete</strong> kao stručni suradnik logoped te 2018. godine polaže stručni ispit za logopede u predškolskoj ustanovi.
                  </p>
                  
                  <p>
                    Od rujna 2018. godine zaposlena je u <strong className="text-sky-800">Logopedskom Centru Govorni Oblačić</strong>, gdje provodi logopedsku procjenu i terapiju djece predškolske i školske dobi. Voditeljica je radionice <strong className="text-sky-800">S Govornim Oblačićem u školu</strong>.
                  </p>
                  
                  <p>
                    U rujnu 2019. godine sudjeluje na jednodnevnoj edukaciji <strong className="text-sky-800">Ovladavanje čitanjem – od teorije do praktičnih vježbi</strong> te u prosincu 2019. godine svoje stručno obrazovanje nadopunjuje sudjelovanjem na radionici <strong className="text-sky-800">Rad s roditeljima – izazovi dvostrukih ciljeva i odnosa</strong> u organizaciji Centra <strong className="text-sky-800">Proventus</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Jelena Pervan */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200 mb-8">
            <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-sky-100 to-blue-200 p-1">
                  <div className="w-full h-full rounded-xl overflow-hidden border-2 border-sky-200/50">
                    <img 
                      src="pictureofteam/jelena.png" 
                      alt="Jelena Pervan" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Profile Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-sky-700 mb-2">Jelena Pervan, spisateljica</h2>
                </div>
                
                <div className="space-y-4 text-lg text-sky-700 leading-relaxed">
                  <p>
                    Jelena Pervan rođena je 1992. godine u Splitu gdje je završila opću gimnaziju. U Zagrebu je diplomirala novinarstvo na <strong className="text-sky-800">Fakultetu političkih znanosti</strong>.
                  </p>
                  
                  <p>
                    Od 2016. godine zaposlena je u udruzi <strong className="text-sky-800">Crveni nosovi klaunovidoktori</strong>. U srednjoj školi radost je pronašla u književnosti za djecu i od tada redovito objavljuje štivo za djecu. Uz pisanje autorskih slikovnica bavi se i provođenjem slikovnica i knjiga za djecu stranih autora.
                  </p>
                  
                  <p>
                    U knjižnicama i školama aktivno organizira književne susrete i radionice pisanja. Osnivačica je i voditeljica <strong className="text-sky-800">Hrkalove školice pisanja</strong> za djecu u nižim razredima osnovne škole.
                  </p>
                  
                  <p>
                    Jelenino uže područje interesa je rad s djecom s teškoćama u razvoju. U suradnji s <strong className="text-sky-800">Hrvatskim društvom književnika za djecu i mlade</strong> vodila je književni projekt <strong className="text-sky-800">Čarapica Pričalica</strong> za djecu s teškoćama u razvoju. Članica je <strong className="text-sky-800">Hrvatskog društva književnika za djecu i mlade</strong>.
                  </p>
                  
                  <p>
                    Od 2018. godine vanjska je suradnica <strong className="text-sky-800">Logopedskog Centra Govorni Oblačić</strong>. Koautorica je i voditeljica jedinstvene <strong className="text-sky-800">Školice kreativnog pisanja za djecu s teškoćama čitanja i pisanja – Superjunaci pišu</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={goHome}
                className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                ← Povratak na početnu
              </button>
              <button
                onClick={handleContactClick}
                className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white/20"
              >
                Kontaktirajte nas
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const GalerijaPage = () => {
    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const images = [
      'pictures-galerija/1.png',
      'pictures-galerija/2.png',
      'pictures-galerija/3.png',
      'pictures-galerija/4.png',
      'pictures-galerija/5.png',
      'pictures-galerija/6.png',
      'pictures-galerija/7.png',
      'pictures-galerija/8.png',
      'pictures-galerija/9.png',
      'pictures-galerija/10.png'
    ];

    const openLightbox = (index: number) => {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      setLightboxOpen(false);
      document.body.style.overflow = 'auto';
    };

    const changeImage = (direction: number) => {
      setCurrentImageIndex((prev) => (prev + direction + images.length) % images.length);
    };

    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (lightboxOpen) {
          if (e.key === 'Escape') {
            closeLightbox();
          } else if (e.key === 'ArrowLeft') {
            changeImage(-1);
          } else if (e.key === 'ArrowRight') {
            changeImage(1);
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen]);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-100 to-indigo-200">
        <Header />
        <section className="relative py-20 overflow-hidden pt-32">
          {/* Background decorations */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-200/20 via-transparent to-indigo-300/30"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-sky-300/20 rounded-full blur-3xl"></div>
            
            {/* Floating clouds */}
            <Cloud1 className="absolute top-20 left-20 w-8 h-8 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
            <Cloud2 className="absolute bottom-20 right-20 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
            <Cloud3 className="absolute top-40 left-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
            <Cloud4 className="absolute bottom-40 right-1/4 w-14 h-14 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Galerija</h1>
              <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
                Pogledajte naše radove, aktivnosti i uspjehe u logopedskom radu
              </p>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 border-sky-200 cursor-pointer hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2" 
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-sky-50 to-blue-100">
                    <img 
                      src={image} 
                      alt={`Galerija slika ${index + 1}`} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery Info Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200 mb-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-sky-700 mb-6">O našoj galeriji</h2>
                <p className="text-lg text-sky-700 leading-relaxed max-w-4xl mx-auto">
                  Naša galerija prikazuje različite aspekte našeg rada u Logopedskom Centru Govorni Oblačić. 
                  Od individualnih terapija do grupnih aktivnosti, Montessori pristupa i radionica - 
                  svaka slika govori priču o našoj predanosti pomaganju djeci u razvoju komunikacijskih vještina.
                </p>
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-sky-700 mb-2">Terapije</h3>
                    <p className="text-sky-600">Individualne i grupne logopedske terapije</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-sky-700 mb-2">Montessori</h3>
                    <p className="text-sky-600">Montessori pristup u logopedskom radu</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-sky-700 mb-2">Radionice</h3>
                    <p className="text-sky-600">Edukativne radionice za roditelje</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-4">Želite vidjeti više?</h2>
                <p className="text-sky-100 text-lg mb-6 max-w-2xl mx-auto">
                  Kontaktirajte nas da saznate više o našim aktivnostima i kako možemo pomoći vašem djetetu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={goHome}
                    className="inline-block bg-white text-sky-600 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    ← Povratak na početnu
                  </button>
                  <button
                    onClick={handleContactClick}
                    className="inline-block bg-sky-700 hover:bg-sky-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Kontaktirajte nas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="relative max-w-[90%] max-h-[90%]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white text-4xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 transition-all duration-300 hover:scale-110"
              >
                ×
              </button>
              <img 
                src={images[currentImageIndex]} 
                alt={`Galerija slika ${currentImageIndex + 1}`}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <button
                onClick={() => changeImage(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 transition-all duration-300 hover:scale-110"
              >
                ‹
              </button>
              <button
                onClick={() => changeImage(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 transition-all duration-300 hover:scale-110"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  if (currentPage === 'nas-tim') {
    return <NasTimPage />;
  }

  if (currentPage === 'galerija') {
    return <GalerijaPage />;
  }

  const LogopedskaProcjenaPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-100 to-indigo-200">
      <Header />
      <section className="relative py-20 overflow-hidden pt-32">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-200/20 via-transparent to-indigo-300/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-sky-300/20 rounded-full blur-3xl"></div>
          
          {/* Floating clouds */}
          <Cloud1 className="absolute top-20 left-20 w-8 h-8 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud2 className="absolute bottom-20 right-20 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud3 className="absolute top-40 left-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud4 className="absolute bottom-40 right-1/4 w-14 h-14 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Logopedska Procjena</h1>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Stručna procjena komunikacijskog i jezično-govornog razvoja djece svih uzrasta
            </p>
          </div>
          
          {/* Main Services Section */}
          <div className="grid gap-8 mb-12">
            {/* Service 1: Early Development Assessment */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-sky-700 mb-4">Utvrđivanje komunikacijskog i ranog jezično-govornog razvoja</h2>
                  <p className="text-lg text-sky-700 leading-relaxed mb-4">
                    <strong className="text-sky-800">Od 1. godine djetetova života</strong> - Stručna procjena ranog razvoja komunikacijskih sposobnosti i jezično-govornih vještina kod najmlađe djece.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-6 border-l-4 border-sky-400">
                    <h3 className="text-lg font-semibold text-sky-800 mb-3">Što procjenjujemo:</h3>
                    <ul className="space-y-2 text-sky-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-sky-500 text-lg">•</span>
                        <span>Rani komunikacijski pokušaji i geste</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-sky-500 text-lg">•</span>
                        <span>Razvoj bubanja i glasanja</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-sky-500 text-lg">•</span>
                        <span>Razumijevanje govora i upute</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-sky-500 text-lg">•</span>
                        <span>Prvi riječi i jednostavne fraze</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-sky-500 text-lg">•</span>
                        <span>Socijalna komunikacija i interakcija</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: Preschool and School Age Assessment */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-sky-700 mb-4">Procjena komunikacijskog i jezično-govornog razvoja</h2>
                  <p className="text-lg text-sky-700 leading-relaxed mb-4">
                    <strong className="text-sky-800">Djece predškolske i školske dobi</strong> - Sveobuhvatna procjena jezičnih vještina, govornog razvoja i komunikacijskih sposobnosti.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Područja procjene:</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 text-lg">•</span>
                        <span>Fonološke vještine i izgovor</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 text-lg">•</span>
                        <span>Gramatički sustav i sintaksa</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 text-lg">•</span>
                        <span>Rječnik i semantičko razumijevanje</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 text-lg">•</span>
                        <span>Pragmatičke vještine komunikacije</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 text-lg">•</span>
                        <span>Fluencija govora i ritam</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3: Pre-reading, Writing and Math Assessment */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-sky-700 mb-4">Procjena predvještina čitanja, pisanja i računanja</h2>
                  <p className="text-lg text-sky-700 leading-relaxed mb-4">
                    <strong className="text-sky-800">Djece predškolske dobi</strong> - Procjena temeljnih vještina potrebnih za uspješno učenje čitanja, pisanja i matematike.
                  </p>
                  <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-400">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-3">Predvještine koje procjenjujemo:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-indigo-700 mb-2">Čitanje:</h4>
                        <ul className="space-y-1 text-sm text-indigo-600">
                          <li>• Fonološka svjesnost</li>
                          <li>• Slušna diskriminacija</li>
                          <li>• Rima i aliteracija</li>
                          <li>• Segmentacija riječi</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-indigo-700 mb-2">Pisanje:</h4>
                        <ul className="space-y-1 text-sm text-indigo-600">
                          <li>• Grafomotoričke vještine</li>
                          <li>• Prostorna orijentacija</li>
                          <li>• Vizualna percepcija</li>
                          <li>• Koordinacija ruka-oka</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-indigo-700 mb-2">Računanje:</h4>
                        <ul className="space-y-1 text-sm text-indigo-600">
                          <li>• Brojni koncepti</li>
                          <li>• Kvantitativno razumijevanje</li>
                          <li>• Prostorna logika</li>
                          <li>• Sekvenciranje</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4: Reading and Writing Skills Assessment */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-sky-700 mb-4">Procjena usvojenosti vještina čitanja i pisanja</h2>
                  <p className="text-lg text-sky-700 leading-relaxed mb-4">
                    <strong className="text-sky-800">Djece školske dobi</strong> - Procjena razine usvojenosti čitanja i pisanja te identifikacija eventualnih teškoća u učenju.
                  </p>
                  <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-400">
                    <h3 className="text-lg font-semibold text-purple-800 mb-3">Vještine koje procjenjujemo:</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-3">Čitanje:</h4>
                        <ul className="space-y-2 text-purple-600">
                          <li className="flex items-start space-x-2">
                            <span className="text-purple-500">•</span>
                            <span>Tehnika čitanja i brzina</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-purple-500">•</span>
                            <span>Razumijevanje pročitanog</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-purple-500">•</span>
                            <span>Fonološka dekodiranja</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-purple-500">•</span>
                            <span>Vizualno prepoznavanje riječi</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 mb-3">Pisanje:</h4>
                        <ul className="space-y-2 text-purple-600">
                          <li className="flex items-start space-x-2">
                            <span className="text-purple-500">•</span>
                            <span>Pravopis i gramatika</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-purple-500">•</span>
                            <span>Struktura rečenica</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-purple-500">•</span>
                            <span>Sadržaj i organizacija teksta</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-purple-500">•</span>
                            <span>Rukopis i čitljivost</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200 mb-12">
            <h2 className="text-3xl font-bold text-sky-700 mb-8 text-center">Kako izgleda procjena?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-sky-700 mb-3">Anamneza</h3>
                <p className="text-sky-600">Razgovor s roditeljima o razvoju djeteta, obiteljskoj povijesti i trenutnim brigama</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-sky-700 mb-3">Procjena</h3>
                <p className="text-sky-600">Stručna procjena kroz igru i zadatke prilagođene uzrastu djeteta</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-sky-700 mb-3">Izvještaj</h3>
                <p className="text-sky-600">Detaljan izvještaj s preporukama za daljnji rad i terapiju</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Spremni za procjenu?</h2>
              <p className="text-sky-100 text-lg mb-6 max-w-2xl mx-auto">
                Kontaktirajte nas za dogovor termina procjene. Naš tim stručnjaka je tu da vam pomogne u razumijevanju razvoja vašeg djeteta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={goHome}
                  className="inline-block bg-white text-sky-600 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  ← Povratak na početnu
                </button>
                <button
                  onClick={handleContactClick}
                  className="inline-block bg-sky-700 hover:bg-sky-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Kontaktirajte nas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const GrupnaTerapijaPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-100 to-indigo-200">
      <Header />
      <section className="relative py-20 overflow-hidden pt-32">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-200/20 via-transparent to-indigo-300/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-sky-300/20 rounded-full blur-3xl"></div>
          
          {/* Floating clouds */}
          <Cloud1 className="absolute top-20 left-20 w-8 h-8 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud2 className="absolute bottom-20 right-20 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud3 className="absolute top-40 left-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud4 className="absolute bottom-40 right-1/4 w-14 h-14 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Grupna Terapija</h1>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Stručna grupna terapija u manjim skupinama djece (5 po programu)
            </p>
          </div>

          {/* Main Description */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-6">O našoj grupnoj terapiji</h2>
              <p className="text-lg text-sky-700 leading-relaxed max-w-4xl mx-auto">
                Naša grupna terapija pruža djecici priliku da u manjim skupinama (5 po programu) 
                razvijaju svoje komunikacijske vještine, uče kroz igru i druženje, te stječu 
                samopouzdanje u sigurnom okruženju. Svaki program je prilagođen specifičnim 
                potrebama djece i vodi se od strane iskusnih logopeda.
              </p>
            </div>
          </div>

          {/* Service Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Program 1 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-sky-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-sky-700 mb-3">S Govornim Oblačićem u školu</h3>
                  <p className="text-sky-700 leading-relaxed">
                    Fonološki trening za djecu s nedovoljno razvijenim predvještinama čitanja, 
                    pisanja i računanja. Program je osmišljen da pomogne djeci da razviju 
                    osnovne vještine potrebne za uspješno školovanje.
                  </p>
                </div>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-sky-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-sky-700 mb-3">Istražujemo, učimo, družimo se u Govornom Oblačiću</h3>
                  <p className="text-sky-700 leading-relaxed">
                    Grupe za jačanje komunikacijskih vještina djece s teškoćama socijalne komunikacije. 
                    Kroz interaktivne aktivnosti djeca uče kako se bolje izražavati i komunicirati s vršnjacima.
                  </p>
                </div>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-sky-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-sky-700 mb-3">Pomozi mi da uč(ni)m sam!</h3>
                  <p className="text-sky-700 leading-relaxed">
                    Program koji pruža pomoć pri savladavanju školskog gradiva. Djeca uče kako 
                    samostalno rješavati probleme i razvijaju vještine učenja kroz strukturirane aktivnosti.
                  </p>
                </div>
              </div>
            </div>

            {/* Program 4 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-sky-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-sky-700 mb-3">Superjunaci pišu</h3>
                  <p className="text-sky-700 leading-relaxed">
                    Jedinstvena kreativna školica pisanja za djecu s teškoćama čitanja i pisanja. 
                    Kroz zabavne i kreativne vježbe djeca razvijaju svoje pismene vještine i 
                    stječu ljubav prema pisanju.
                  </p>
                </div>
              </div>
            </div>

            {/* Program 5 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-sky-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 lg:col-span-2">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-sky-700 mb-3">Put oko svijeta s Govornim Oblačićem</h3>
                  <p className="text-sky-700 leading-relaxed">
                    Avanturni program koji kombinira učenje jezika s istraživanjem različitih kultura i zemalja. 
                    Djeca putuju kroz priče, igre i aktivnosti dok razvijaju svoje komunikacijske vještine.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-10 shadow-2xl mb-12">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-8">Prednosti grupne terapije</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Druženje s vršnjacima</h3>
                  <p className="text-sky-100">Djeca uče kroz interakciju i druženje</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Stručno vođenje</h3>
                  <p className="text-sky-100">Iskusni logopedi vode sve aktivnosti</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Mali broj djece</h3>
                  <p className="text-sky-100">Maksimalno 5 djece po grupi</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200">
              <h2 className="text-3xl font-bold text-sky-700 mb-4">Želite da vaše dijete sudjeluje?</h2>
              <p className="text-sky-700 text-lg mb-6 max-w-2xl mx-auto">
                Kontaktirajte nas da saznate više o našim grupnim terapijama i kako možemo 
                pomoći vašem djetetu da razvije svoje komunikacijske vještine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={goHome}
                  className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  ← Povratak na početnu
                </button>
                <button
                  onClick={handleContactClick}
                  className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Kontaktirajte nas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const SavjetovanjeRadionicePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-sky-100 via-sky-50 to-white overflow-hidden pt-32">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-24 h-24 bg-white/80 rounded-full animate-float shadow-lg"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/70 rounded-full animate-float-slow shadow-lg"></div>
          <div className="absolute bottom-40 left-1/3 w-32 h-32 bg-white/90 rounded-full animate-float shadow-lg"></div>
          <div className="absolute top-60 left-1/3 w-12 h-12 bg-white/75 rounded-full animate-float-slow shadow-lg"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white/85 rounded-full animate-float shadow-lg"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-sky-700 mb-8 leading-tight drop-shadow-lg">
            Savjetovanje i radionice
          </h1>
          <p className="text-2xl sm:text-3xl text-sky-600 mb-12 font-light leading-relaxed max-w-4xl mx-auto">
            Stručna podrška za roditelje i stručnjake u razvoju komunikacijskih vještina djece
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column */}
            <div className="space-y-8">
              {/* Savjetovanje roditelja */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-sky-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-4 rounded-full flex-shrink-0 shadow-lg">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sky-700 mb-4">
                      Savjetovanje roditelja
                    </h3>
                    <p className="text-lg text-sky-600 leading-relaxed">
                      Savjetovanje roditelja o ranom komunikacijskom i jezično-govornom razvoju te stvaranju poticajnog okruženja za razvoj svih potencijala djeteta.
                    </p>
                  </div>
                </div>
              </div>

              {/* Radionice o aktualnim temama */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-green-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-full flex-shrink-0 shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sky-700 mb-4">
                      Radionice o aktualnim temama
                    </h3>
                    <p className="text-lg text-sky-600 leading-relaxed">
                      Radionice o aktualnim temama u okviru logopedskog djelovanja.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Roditelji za roditelje */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-purple-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-full flex-shrink-0 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sky-700 mb-4">
                      Roditelji za roditelje
                    </h3>
                    <p className="text-lg text-sky-600 leading-relaxed">
                      Razmjena iskustava i grupe podrške za roditelje djece s teškoćama.
                    </p>
                  </div>
                </div>
              </div>

              {/* Okrugli stol */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-yellow-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full flex-shrink-0 shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-sky-700 mb-4">
                      Okrugli stol i rasprave
                    </h3>
                    <p className="text-lg text-sky-600 leading-relaxed">
                      Okrugli stol/rasprave o aktualnim temama/literaturi i sl.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl p-10 shadow-2xl border-4 border-sky-200">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-6 rounded-full flex-shrink-0 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-sky-700 mb-6">
                    Savjetovanje i razvijanje partnerskog odnosa
                  </h3>
                  <p className="text-xl text-sky-600 leading-relaxed mb-6">
                    Savjetovanje te razvijanje partnerskog odnosa sa (su)stručnjacima kako bi se osigurala najbolja moguća podrška za razvoj vašeg djeteta.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-start">
                    <button
                      onClick={goHome}
                      className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      ← Povratak na početnu
                    </button>
                    <button
                      onClick={handleContactClick}
                      className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                      Kontaktirajte nas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  if (currentPage === 'logopedska-procjena') {
    return <LogopedskaProcjenaPage />;
  }

  const IndividualnaTerapijaPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <Header />
      <section className="relative py-20 overflow-hidden pt-32">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-pink-200/20 via-transparent to-rose-300/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-300/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-300/20 rounded-full blur-3xl"></div>
          
          {/* Floating clouds */}
          <Cloud1 className="absolute top-20 left-20 w-8 h-8 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud2 className="absolute bottom-20 right-20 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud3 className="absolute top-40 left-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud4 className="absolute bottom-40 right-1/4 w-14 h-14 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Individualna terapija</h1>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Personalizirani pristup svakom djetetu s ciljem poticanja govorno-jezičnog razvoja
            </p>
          </div>

          {/* Main Description */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-pink-200 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-6">Rano poticanje komunikacijskog i jezično-govornog razvoja</h2>
              <p className="text-lg text-sky-700 leading-relaxed max-w-4xl mx-auto">
                Pružamo rano poticanje komunikacijskog i jezično-govornog razvoja u djetetovoj prirodnoj okolini 
                kroz <strong>patronaže u obiteljskom domu</strong>. Ovaj pristup omogućava djetetu da uči i razvija 
                komunikacijske vještine u poznatom i sigurnom okruženju, uz uključivanje obitelji u terapijski proces.
              </p>
            </div>
          </div>

          {/* Services Overview */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-rose-200 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-sky-700 mb-4">Individualna logopedska terapija djece s:</h2>
              <p className="text-lg text-sky-600 max-w-3xl mx-auto">
                Naši stručnjaci pružaju individualiziranu terapiju prilagođenu specifičnim potrebama svakog djeteta
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Communication and Social Issues */}
              <div className="space-y-4">
                <div className="bg-pink-50 rounded-2xl p-6 border-2 border-pink-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sky-700 mb-2">Komunikacijske teškoće</h3>
                      <ul className="text-sky-700 space-y-1 text-sm">
                        <li>• Teškoćama socijalne komunikacije</li>
                        <li>• Teškoćama iz spektra autizma</li>
                        <li>• Usporenim jezično-govornim razvojem</li>
                        <li>• Nedovoljno razvijenim govorom</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-rose-50 rounded-2xl p-6 border-2 border-rose-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sky-700 mb-2">Jezične i govorne teškoće</h3>
                      <ul className="text-sky-700 space-y-1 text-sm">
                        <li>• Jezičnim teškoćama</li>
                        <li>• Fonološko-artikulacijskim teškoćama</li>
                        <li>• Artikulacijskim teškoćama</li>
                        <li>• Poremećajima glasa</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sky-700 mb-2">Motorički poremećaji</h3>
                      <ul className="text-sky-700 space-y-1 text-sm">
                        <li>• Motoričkim govornim poremećajima</li>
                        <li>• Dječja govorna apraksija</li>
                        <li>• Dizartrija</li>
                        <li>• Poremećajima tečnosti govora (mucanje, brzopletost)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning and Academic Issues */}
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sky-700 mb-2">Predvještine učenja</h3>
                      <ul className="text-sky-700 space-y-1 text-sm">
                        <li>• Nedovoljno razvijenim (pred)vještinama čitanja</li>
                        <li>• Nedovoljno razvijenim (pred)vještinama pisanja</li>
                        <li>• Nedovoljno razvijenim (pred)vještinama računanja</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-2xl p-6 border-2 border-indigo-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sky-700 mb-2">Specifične teškoće učenja</h3>
                      <ul className="text-sky-700 space-y-1 text-sm">
                        <li>• Disleksija (teškoće čitanja)</li>
                        <li>• Disgrafija (teškoće pisanja)</li>
                        <li>• Diskalkulija (teškoće računanja)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Approach Card */}
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border-2 border-sky-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-sky-700 mb-2">Naš pristup</h3>
                    <p className="text-sky-700 text-sm">
                      Svaka terapija je individualno prilagođena potrebama djeteta, 
                      koristeći igru i kreativne aktivnosti kao glavni alat učenja.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl p-10 shadow-2xl mb-12">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-8">Prednosti individualne terapije</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Personalizirani pristup</h3>
                  <p className="text-pink-100">Terapija prilagođena specifičnim potrebama svakog djeteta</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Prirodno okruženje</h3>
                  <p className="text-pink-100">Terapija u obiteljskom domu kroz patronaže</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Stručno vođenje</h3>
                  <p className="text-pink-100">Iskusni logopedi s dugogodišnjim iskustvom</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-pink-200">
              <h2 className="text-3xl font-bold text-sky-700 mb-4">Trebate individualnu terapiju za vaše dijete?</h2>
              <p className="text-sky-700 text-lg mb-6 max-w-2xl mx-auto">
                Kontaktirajte nas da saznate više o našim individualnim terapijama i kako možemo 
                pomoći vašem djetetu da razvije svoje komunikacijske sposobnosti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={goHome}
                  className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  ← Povratak na početnu
                </button>
                <button
                  onClick={handleContactClick}
                  className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Kontaktirajte nas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  if (currentPage === 'individualna-terapija') {
    return <IndividualnaTerapijaPage />;
  }

  const SGovornimOblacicomUSkoluPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Header />
      <section className="relative py-20 overflow-hidden pt-32">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-200/20 via-transparent to-emerald-300/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-300/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-300/20 rounded-full blur-3xl"></div>
          
          {/* Floating clouds */}
          <Cloud1 className="absolute top-20 left-20 w-8 h-8 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud2 className="absolute bottom-20 right-20 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud3 className="absolute top-40 left-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud4 className="absolute bottom-40 right-1/4 w-14 h-14 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">S Govornim Oblačićem u školu</h1>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              – fonološki trening –
            </p>
            <p className="text-xl text-sky-600 max-w-4xl mx-auto leading-relaxed mt-4">
              Program za djecu školske obveze s nedovoljno razvijenim predvještinama čitanja, pisanja i računanja
            </p>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-green-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-6">Važnost pripreme za školu</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-sky-700 leading-relaxed">
              <p className="mb-6">
                Polazak u prvi razred osnovne škole velik je događaj za cijelu obitelj, ponajviše za budućeg školarca. 
                Taj veliki događaj predstavlja iskorak iz sigurnog svijeta vrtića u široki, stroži svijet škole koji 
                donosi nova iskustva i izazove, a zahtijeva ponovnu prilagodbu. Na neki je način to prvi veliki korak 
                na putu ka zrelosti, onaj u kojem se potvrđuju sav trud, pažnja i ljubav koji su do tog trenutka 
                uloženi u odgoj djeteta.
              </p>
              
              <p className="mb-6">
                Dijete ulaskom u školu postaje dio organizirane i strukturirane sredine, izlaže se sustavu vrednovanja 
                i natjecanja, uz mogućnost doživljavanja neuspjeha i kritike. U školi se prvi puta susreće s obvezama, 
                s osjećajem odgovornosti i novom organizacijom života.
              </p>
              
              <p className="mb-0">
                Vrlo je važno prije polaska djeteta u školu na odgovarajući način procijeniti spremnost djeteta za školu, 
                a istovremeno otkriti i eventualne poteškoće, koje se u školi mogu još više produbiti te ih je potrebno 
                pravovremenim i primjerenim postupcima otkloniti. Priprema djeteta za školu zapravo počinje od djetetovog 
                rođenja, stoga briga obitelji i vrtića za optimalan razvoj tijekom cijelog predškolskog razdoblja stvara 
                uvjete za razvoj uspješnog školarca.
              </p>
            </div>
          </div>

          {/* Program Description */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-emerald-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-4">O programu</h2>
              <p className="text-lg text-sky-600 max-w-3xl mx-auto">
                Program S Govornim oblačićem u školu namijenjen je djeci školskim obveznicima s nedovoljno 
                razvijenim predvještinama čitanja, pisanja i računanja. Program se odvija u malim skupinama 
                djece (5 polaznika po programu).
              </p>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200">
              <h3 className="text-2xl font-bold text-sky-700 mb-6 text-center">Kroz program radionica kod djece se potiče sljedeće:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sky-700 font-medium">razvoj predvještina čitanja, pisanja i računanja</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sky-700 font-medium">razvoj koncentracije i ustrajnosti</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sky-700 font-medium">bogaćenje rječnika</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sky-700 font-medium">razvoj vještina jezičnog izražavanja i pripovijedanja</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sky-700 font-medium">razvoj samopoštovanja i pozitivne slike o sebi</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sky-700 font-medium">razvoj socijalnih kompetencija i vještina kooperativnog djelovanja uz međusobno uvažavanje</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Schedule and Enrollment */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-teal-200">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-sky-700 mb-6 text-center">Praktične informacije</h3>
              
              <div className="space-y-6">
                <div className="bg-teal-50 rounded-xl p-4 border-2 border-teal-200">
                  <h4 className="font-semibold text-sky-700 mb-2">VRIJEME ODRŽAVANJA:</h4>
                  <p className="text-sky-700">ožujak/travanj; jednom tjedno u popodnevnim satima u trajanju od dva školska sata (90 minuta)</p>
                </div>
                
                <div className="bg-cyan-50 rounded-xl p-4 border-2 border-cyan-200">
                  <h4 className="font-semibold text-sky-700 mb-2">UPISI:</h4>
                  <p className="text-sky-700">tijekom cijele godine</p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                  <h4 className="font-semibold text-sky-700 mb-2">CIJENA:</h4>
                  <p className="text-sky-700">na upit</p>
                </div>
              </div>
            </div>

            {/* Program Features */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-sky-700 mb-6 text-center">Što program uključuje</h3>
              
              <div className="space-y-3 text-sky-700">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Sve materijale za rad</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Upute i materijale za rad kod kuće</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Pisane materijale s radionice za roditelje</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Pisano logopedsko mišljenje</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Poklončiće i diplome za uspješno savladan program</span>
                </div>
              </div>
            </div>
          </div>

          {/* Montessori Approach */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-10 shadow-2xl mb-12">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Autorski program s Montessori pristupom</h2>
              <p className="text-green-100 text-lg max-w-4xl mx-auto leading-relaxed">
                <strong>S Govornim Oblačićem u školu</strong> autorski je program Logopedskog Centra nadopunjen 
                spoznajama Montessori pedagogije. Program kombinira znanstveno utemeljene logopedske metode s 
                Montessori principima samostalnog učenja i poštovanja djetetovog prirodnog ritma razvoja.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-green-200">
              <h2 className="text-3xl font-bold text-sky-700 mb-4">Prijavite svoje dijete na program</h2>
              <p className="text-sky-700 text-lg mb-6 max-w-2xl mx-auto">
                Kontaktirajte nas da saznate više o programu "S Govornim Oblačićem u školu" i 
                kako možemo pomoći vašem djetetu da se pripremi za uspješan početak školovanja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={goHome}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  ← Povratak na početnu
                </button>
                <button
                  onClick={handleContactClick}
                  className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Kontaktirajte nas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  if (currentPage === 's-govornim-oblacicem-u-skolu') {
    return <SGovornimOblacicomUSkoluPage />;
  }

  const SuperjunaciPisuPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <Header />
      <section className="relative py-20 overflow-hidden pt-32">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-200/20 via-transparent to-orange-300/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-300/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-300/20 rounded-full blur-3xl"></div>
          
          {/* Floating clouds */}
          <Cloud1 className="absolute top-20 left-20 w-8 h-8 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud2 className="absolute bottom-20 right-20 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud3 className="absolute top-40 left-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud4 className="absolute bottom-40 right-1/4 w-14 h-14 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Superjunaci pišu</h1>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Jedinstvena školica kreativnog pisanja za djecu s teškoćama u čitanju i pisanju
            </p>
            <div className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 inline-block shadow-xl">
              <p className="text-white text-xl font-bold">
                🦸‍♂️ Borba sa slovima nije za slabiće i posao je to za prave superjunake! 🦸‍♀️
              </p>
            </div>
          </div>

          {/* Program Overview */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-yellow-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-6">O programu Superjunaci pišu</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-sky-700 leading-relaxed">
              <p className="mb-6">
                Logopedski Centar Govorni Oblačić u suradnji s <strong>književnicom za djecu, Jelenom Pervan</strong>, 
                pripremio je jedinstvenu školicu kreativnog pisanja, osmišljenu za djecu s teškoćama u čitanju i pisanju 
                pod nazivom <strong>Superjunaci pišu</strong>. Školica je namijenjena djeci od <strong>8 do 11 godina</strong>.
              </p>
              
              <p className="mb-6">
                Vještine čitanja i pisanja su temelj stjecanja i razvijanja znanja te napredovanja pojedinca i društva u cjelini. 
                Formalno obrazovanje ovisi o vještinama čitanja i pisanja putem kojih dijete usvaja nove činjenice, komunicira, 
                služi se računalom te prati tisak i elektroničke medije.
              </p>
              
              <p className="mb-0">
                No, za određenu skupinu djece te vještine umjesto alata predstavljaju osnovnu prepreku za učenje. 
                <strong>Od 5 do 10% djece školske dobi</strong>, unatoč sustavnoj poduci i urednim intelektualnim sposobnostima, 
                ne uspijeva savladati vještine čitanja i pisanja.
              </p>
            </div>
          </div>

          {/* Problem and Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* The Challenge */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-sky-700 mb-6 text-center">Izazovi s kojima se susreću djeca</h3>
              
              <div className="text-sky-700 leading-relaxed">
                <p className="mb-4">
                  Specifične teškoće u čitanju i pisanju mogu negativno utjecati na djetetovo samopouzdanje, 
                  ali i otežati praćenje nastave, posebice nastavu hrvatskog jezika.
                </p>
                <p className="mb-0">
                  Teškoće u razumijevanju teksta mogu stvoriti otpor i negativan stav prema čitanju, 
                  pisanju i knjigama općenito.
                </p>
              </div>
            </div>

            {/* The Solution */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-yellow-200">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-sky-700 mb-6 text-center">Naše rješenje</h3>
              
              <div className="text-sky-700 leading-relaxed">
                <p className="mb-4">
                  <strong>Logopedinja Martina Labaš Batković</strong> i <strong>spisateljica Jelena Pervan</strong>, 
                  osmislile su školicu kreativnog pisanja kojoj je cilj osnažiti djecu.
                </p>
                <p className="mb-0">
                  Cilj je pomoći djeci da, unatoč teškoćama, otkriju svoj potencijal, razvijaju maštu i 
                  samostalno stvaraju priče uz pomoć prilagođenih kreativnih tehnika te uz logopedsku intervenciju.
                </p>
              </div>
            </div>
          </div>

          {/* What We Work On */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-red-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-4">Na čemu radimo u školici</h2>
              <p className="text-lg text-sky-600 max-w-3xl mx-auto">
                A kako? Onako kako to rade pravi superjunaci! 🦸‍♂️
              </p>
            </div>

            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sky-700 font-medium">Tehnici čitanja</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sky-700 font-medium">Upoznavanju s elementima priče</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sky-700 font-medium">Stvaranju samostalne priče</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sky-700 font-medium">Razumijevanju pročitanog</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sky-700 font-medium">Savladavanju nepoznatih riječi</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sky-700 font-medium">Otklanjanju specifičnih teškoća u pisanju vizualno i zvučno sličnih grafema</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sky-700 font-medium">Samoprovjeri i samokorekciji vlastitih pisanih uradaka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Information */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-yellow-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-4">Praktične informacije</h2>
              <p className="text-lg text-sky-600">
                Radionice će se odvijati jednom tjedno u jutarnjim satima, subotom, u trajanju od dva školska sata (90 minuta).
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200 text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-sky-700 mb-2">PRIJAVE:</h4>
                <p className="text-sky-700">tijekom cijele godine</p>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200 text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-sky-700 mb-2">VRIJEME ODRŽAVANJA:</h4>
                <p className="text-sky-700">listopad/studeni i svibanj/lipanj</p>
              </div>
              
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-sky-700 mb-2">CIJENA:</h4>
                <p className="text-sky-700">na upit</p>
              </div>
            </div>
          </div>

          {/* Superhero Approach */}
          <div className="bg-gradient-to-r from-yellow-500 to-red-600 rounded-3xl p-10 shadow-2xl mb-12">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">🦸‍♂️ Superjunački pristup 🦸‍♀️</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">💪</div>
                  <h3 className="text-xl font-semibold mb-2">Snaga</h3>
                  <p className="text-yellow-100">Jačamo samopouzdanje kroz uspjeh</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <h3 className="text-xl font-semibold mb-2">Kreativnost</h3>
                  <p className="text-yellow-100">Razvijamo maštu kroz priče</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2">Preciznost</h3>
                  <p className="text-yellow-100">Ciljano rješavamo specifične teškoće</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-yellow-200">
              <h2 className="text-3xl font-bold text-sky-700 mb-4">🦸‍♂️ Pridruži se superjunacima! 🦸‍♀️</h2>
              <p className="text-sky-700 text-lg mb-6 max-w-2xl mx-auto">
                Kontaktirajte nas da saznate više o školici "Superjunaci pišu" i kako možemo pomoći 
                vašem djetetu da postane pravi superjunak u čitanju i pisanju!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={goHome}
                  className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  ← Povratak na početnu
                </button>
                <button
                  onClick={handleContactClick}
                  className="inline-block bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Kontaktirajte nas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  if (currentPage === 'superjunaci-pisu') {
    return <SuperjunaciPisuPage />;
  }

  const IstrazujemoUcimoPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <Header />
      <section className="relative py-20 overflow-hidden pt-32">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-200/20 via-transparent to-indigo-300/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>
          
          {/* Floating clouds */}
          <Cloud1 className="absolute top-20 left-20 w-8 h-8 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud2 className="absolute bottom-20 right-20 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud3 className="absolute top-40 left-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud4 className="absolute bottom-40 right-1/4 w-14 h-14 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Istražujemo, učimo, družimo se u Govornom Oblačiću</h1>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              CIKLUS RADIONICA
            </p>
            <p className="text-xl text-sky-600 max-w-4xl mx-auto leading-relaxed mt-4">
              Vršnjačka intervencija za razvoj socijalnih komunikacijskih vještina
            </p>
          </div>

          {/* Program Overview */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-purple-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-6">O programu</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-sky-700 leading-relaxed">
              <p className="mb-6">
                Program se temelji na <strong>vršnjačkoj vođenoj intervenciji</strong> s ciljem povećanja razine socijalnih 
                interakcija djece s nedovoljno razvijenim vještinama socijalne komunikacije; teškoćama razumijevanja i 
                regulacije emocija; socijalnih konteksta situacije i prenesenog značenja riječi te oblikovanja i 
                konstruiranja verbalnog izričaja.
              </p>
              
              <p className="mb-0">
                Program se odvija u <strong>malim skupinama djece (5 polaznika po programu)</strong>. 
                Otvorene su prijave za dvije skupine prema uzrastu djece.
              </p>
            </div>
          </div>

          {/* Age Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Group 1 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-indigo-200 hover:shadow-3xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-sky-700 mb-6 text-center">1. SKUPINA</h3>
              <div className="text-center">
                <div className="bg-indigo-50 rounded-2xl p-6 border-2 border-indigo-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤓</span>
                  </div>
                  <h4 className="text-xl font-semibold text-sky-700 mb-2">Djeca u dobi od</h4>
                  <p className="text-3xl font-bold text-indigo-600">6-7 godina</p>
                </div>
              </div>
            </div>

            {/* Group 2 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-purple-200 hover:shadow-3xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-sky-700 mb-6 text-center">2. SKUPINA</h3>
              <div className="text-center">
                <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">😊</span>
                  </div>
                  <h4 className="text-xl font-semibold text-sky-700 mb-2">Djeca u dobi od</h4>
                  <p className="text-3xl font-bold text-purple-600">7-8 godina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-blue-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-4">Praktične informacije</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-sky-700 mb-2">VODITELJICE:</h4>
                <p className="text-sky-700 text-sm">logopedinje Logopedskog Centra</p>
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-6 border-2 border-indigo-200 text-center">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-sky-700 mb-2">VRIJEME:</h4>
                <p className="text-sky-700 text-sm">jednom tjedno u popodnevnim satima (90 min)</p>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-sky-700 mb-2">DATUM:</h4>
                <p className="text-sky-700 text-sm">naknadno; nakon formiranja skupina</p>
              </div>
              
              <div className="bg-pink-50 rounded-xl p-6 border-2 border-pink-200 text-center">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-sky-700 mb-2">CIJENA:</h4>
                <p className="text-sky-700 text-sm">na upit</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-sky-700 mb-6 text-center">U cijenu je uključeno:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-700 mb-2">Predavanje za roditelje</h4>
                    <p className="text-sky-700 text-sm">djece uključene u radionice (teorijska polazišta, sadržaj i plan radionica)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 justify-end">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-700 mb-2">Mjesečni ciklusi radionica</h4>
                    <p className="text-sky-700 text-sm">Strukturirane radionice u malim skupinama</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Content */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-purple-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-4">Sadržaj radionice</h2>
              <p className="text-lg text-sky-600 max-w-3xl mx-auto">
                Sveobuhvatan program razvoja socijalnih i komunikacijskih vještina
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razvijanje suradničkih odnosa</h4>
                      <p className="text-sky-700 text-sm">sposobnost usklađivanja vlastitih ciljeva s ciljevima i zahtjevima skupine</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-xl p-4 border-2 border-indigo-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razvijanje emocionalne regulacije</h4>
                      <p className="text-sky-700 text-sm">razumijevanje i izražavanje pozitivnih i negativnih osjećaja, mogućnost prepoznavanja tuđih osjećaja i mišljenja (teorija uma)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razvoj pozitivne slike o sebi</h4>
                      <p className="text-sky-700 text-sm">jačanje samopouzdanja i samosvijesti</p>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-xl p-4 border-2 border-pink-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razvijanje komunikacijskih vještina</h4>
                      <p className="text-sky-700 text-sm">iniciranje komunikacije, odgovorljivost na komunikaciju, otvaranje i zatvaranje komunikacijskih krugova, komentiranje aktivnosti drugih članova grupe</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Vještine nenasilnog rješavanja sukoba</h4>
                      <p className="text-sky-700 text-sm">konstruktivno rješavanje nesporazuma i konflikata</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-4 border-2 border-yellow-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">6</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razumijevanje socijalnih konteksta situacije</h4>
                      <p className="text-sky-700 text-sm">socijalne priče</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">7</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Vještine donošenja odluka i rješavanja problema</h4>
                      <p className="text-sky-700 text-sm">razvoj kritičkog mišljenja i analitičkih sposobnosti</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">8</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razumijevanje uzročno-posljedičnih veza</h4>
                      <p className="text-sky-700 text-sm">logičko povezivanje događaja i njihovih posljedica</p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-xl p-4 border-2 border-teal-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">9</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razumijevanje prenesenog značenja</h4>
                      <p className="text-sky-700 text-sm">metafore, sinonimi, antonimi i homonimi</p>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-50 rounded-xl p-4 border-2 border-cyan-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">10</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razvijanje vještina pripovijedanja</h4>
                      <p className="text-sky-700 text-sm">strukturiranje i prezentiranje priča</p>
                    </div>
                  </div>
                </div>

                <div className="bg-violet-50 rounded-xl p-4 border-2 border-violet-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">11</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Interakcija s vršnjacima</h4>
                      <p className="text-sky-700 text-sm">uvježbavanje, oponašanje i modeliranje ponašanja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-10 shadow-2xl mb-12">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Prednosti vršnjačke intervencije</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold mb-2">Socijalne vještine</h3>
                  <p className="text-purple-100">Učenje kroz interakciju s vršnjacima</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">💭</div>
                  <h3 className="text-xl font-semibold mb-2">Emocionalna inteligencija</h3>
                  <p className="text-purple-100">Razumijevanje i regulacija emocija</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🗣️</div>
                  <h3 className="text-xl font-semibold mb-2">Komunikacija</h3>
                  <p className="text-purple-100">Poboljšanje verbalnog izražavanja</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-purple-200">
              <h2 className="text-3xl font-bold text-sky-700 mb-4">Prijavite svoje dijete na radionice</h2>
              <p className="text-sky-700 text-lg mb-6 max-w-2xl mx-auto">
                Kontaktirajte nas da saznate više o ciklusu radionica "Istražujemo, učimo, družimo se u Govornom Oblačiću" 
                i kako možemo pomoći vašem djetetu da razvije socijalne komunikacijske vještine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={goHome}
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  ← Povratak na početnu
                </button>
                <button
                  onClick={handleContactClick}
                  className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Kontaktirajte nas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  if (currentPage === 'istrazujemo-ucimo-druzimo') {
    return <IstrazujemoUcimoPage />;
  }

  const PomoziMiDaUcinimSamPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Header />
      <section className="relative py-20 overflow-hidden pt-32">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-200/20 via-transparent to-teal-300/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-300/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl"></div>
          
          {/* Floating clouds */}
          <Cloud1 className="absolute top-20 left-20 w-8 h-8 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud2 className="absolute bottom-20 right-20 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud3 className="absolute top-40 left-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud4 className="absolute bottom-40 right-1/4 w-14 h-14 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Pomozi mi da uči(ni)m sam!</h1>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Radionice namijenjene djeci s teškoćama usvajanja čitanja i pisanja
            </p>
            <div className="mt-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl p-6 inline-block shadow-xl">
              <p className="text-white text-xl font-bold">
                📚 Samostalnost kroz učenje • Učenje kroz samostalnost 📚
              </p>
            </div>
          </div>

          {/* Program Overview */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-emerald-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-6">O programu</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-sky-700 leading-relaxed text-center">
              <p className="mb-6 text-xl">
                Program <strong>"Pomozi mi da uči(ni)m sam!"</strong> inspiriran je Montessori filozofijom koja 
                poštuje dijetetovu prirodnu želju za učenjem i omogućava mu da razvija svoje sposobnosti 
                kroz samostalno istraživanje i rad.
              </p>
              
              <p className="mb-6 text-lg">
                Radionice su posebno osmišljene za djecu s teškoćama usvajanja čitanja i pisanja, 
                pružajući im strukturiranu podršku u malim skupinama gdje svako dijete može napredovati 
                vlastitim tempom.
              </p>
              
              <p className="mb-0 text-lg">
                Kroz ovaj program djeca ne samo da savladavaju vještine čitanja i pisanja, već i 
                razvijaju samopouzdanje, samostalnost i ljubav prema učenju.
              </p>
            </div>
          </div>

          {/* Grade Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Group 1 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-teal-200 hover:shadow-3xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-sky-700 mb-6 text-center">1. SKUPINA</h3>
              <div className="text-center">
                <div className="bg-teal-50 rounded-2xl p-6 border-2 border-teal-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h4 className="text-xl font-semibold text-sky-700 mb-2">Polaznici</h4>
                  <p className="text-3xl font-bold text-teal-600">1. razreda</p>
                  <p className="text-sm text-sky-600 mt-2">Početne vještine čitanja i pisanja</p>
                </div>
              </div>
            </div>

            {/* Group 2 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-cyan-200 hover:shadow-3xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-sky-700 mb-6 text-center">2. SKUPINA</h3>
              <div className="text-center">
                <div className="bg-cyan-50 rounded-2xl p-6 border-2 border-cyan-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✏️</span>
                  </div>
                  <h4 className="text-xl font-semibold text-sky-700 mb-2">Polaznici</h4>
                  <p className="text-3xl font-bold text-cyan-600">2. razreda</p>
                  <p className="text-sm text-sky-600 mt-2">Napredne vještine čitanja i pisanja</p>
                </div>
              </div>
            </div>
          </div>

          {/* Program Features */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-emerald-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-4">Ključne značajke programa</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-sky-700 mb-4">Male skupine</h3>
                <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
                  <p className="text-lg font-semibold text-emerald-700 mb-2">Do 5 polaznika u skupini</p>
                  <p className="text-sky-700 text-sm">
                    Omogućava individualiziranu pažnju i prilagođen pristup svakom djetetu
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-sky-700 mb-4">Montessori pristup</h3>
                <div className="bg-teal-50 rounded-2xl p-6 border-2 border-teal-200">
                  <p className="text-lg font-semibold text-teal-700 mb-2">"Pomozi mi da učinim sam"</p>
                  <p className="text-sky-700 text-sm">
                    Poticanje samostalnosti i prirodne ljubavi prema učenju
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-sky-700 mb-4">Stručna podrška</h3>
                <div className="bg-cyan-50 rounded-2xl p-6 border-2 border-cyan-200">
                  <p className="text-lg font-semibold text-cyan-700 mb-2">Logopedski pristup</p>
                  <p className="text-sky-700 text-sm">
                    Kombinacija Montessori filozofije s logopedskim metodama
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Work On */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-teal-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-4">Što radimo na radionicama</h2>
              <p className="text-lg text-sky-600 max-w-3xl mx-auto">
                Sveobuhvatan pristup razvoju vještina čitanja i pisanja kroz samostalno učenje
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">📖</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-2">Vještine čitanja</h4>
                      <p className="text-sky-700 text-sm">Razvoj fonološke svjesnosti, prepoznavanje slova i riječi, razumijevanje pročitanog</p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✍️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-2">Vještine pisanja</h4>
                      <p className="text-sky-700 text-sm">Razvoj fine motorike, formiranje slova, povezivanje slova u riječi</p>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-50 rounded-xl p-6 border-2 border-cyan-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-2">Koncentracija</h4>
                      <p className="text-sky-700 text-sm">Razvoj sposobnosti fokusiranja i ustrajnosti u radu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">💪</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-2">Samostalnost</h4>
                      <p className="text-sky-700 text-sm">Poticanje djece da preuzmu odgovornost za vlastito učenje</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-xl p-6 border-2 border-indigo-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">❤️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-2">Samopouzdanje</h4>
                      <p className="text-sky-700 text-sm">Jačanje pozitivne slike o sebi kroz uspjehe u učenju</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">🌟</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-2">Motivacija</h4>
                      <p className="text-sky-700 text-sm">Razvijanje unutarnje motivacije i ljubavi prema učenju</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Information */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-cyan-200 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-6">Informacije o radionicama</h2>
              
              <div className="bg-cyan-50 rounded-2xl p-8 border-2 border-cyan-200 max-w-md mx-auto">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-sky-700 mb-4">CIJENA</h3>
                <p className="text-xl text-cyan-700 font-semibold">na upit</p>
                <p className="text-sky-600 text-sm mt-2">
                  Kontaktirajte nas za detaljne informacije o cijeni i rasporedu
                </p>
              </div>
            </div>
          </div>

          {/* Montessori Philosophy */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-10 shadow-2xl mb-12">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Montessori filozofija u praksi</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌱</div>
                  <h3 className="text-xl font-semibold mb-2">Prirodan razvoj</h3>
                  <p className="text-emerald-100">Poštovanje djetetovog prirodnog ritma učenja</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">Samostalno istraživanje</h3>
                  <p className="text-emerald-100">Dijete kao aktivni sudionik vlastita učenja</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2">Prilagođeno okruženje</h3>
                  <p className="text-emerald-100">Materijali i aktivnosti prilagođeni djetetovim potrebama</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-emerald-200">
              <h2 className="text-3xl font-bold text-sky-700 mb-4">📚 Prijavite svoje dijete na radionice! 📚</h2>
              <p className="text-sky-700 text-lg mb-6 max-w-2xl mx-auto">
                Kontaktirajte nas da saznate više o programu "Pomozi mi da uči(ni)m sam!" i kako možemo 
                pomoći vašem djetetu da razvije vještine čitanja i pisanja kroz Montessori pristup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={goHome}
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  ← Povratak na početnu
                </button>
                <button
                  onClick={handleContactClick}
                  className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Kontaktirajte nas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  if (currentPage === 'pomozi-mi-da-ucinim-sam') {
    return <PomoziMiDaUcinimSamPage />;
  }

  const PutOkoSvijetaPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />
      <section className="relative py-20 overflow-hidden pt-32">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-200/20 via-transparent to-amber-300/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-300/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl"></div>
          
          {/* Floating clouds */}
          <Cloud1 className="absolute top-20 left-20 w-8 h-8 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud2 className="absolute bottom-20 right-20 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud3 className="absolute top-40 left-1/3 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud4 className="absolute bottom-40 right-1/4 w-14 h-14 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Put oko svijeta s Govornim Oblačićem</h1>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Montessori radionice
            </p>
            <div className="mt-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl p-6 inline-block shadow-xl">
              <p className="text-white text-xl font-bold">
                🌍 Otkrijte svijet kroz Montessori pristup! 🗺️
              </p>
            </div>
          </div>

          {/* Program Overview */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-orange-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-6">O programu</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-sky-700 leading-relaxed">
              <p className="mb-6 text-lg">
                Ciklus radionica <strong>Put oko svijeta s Govornim Oblačićem</strong> namijenjen je djeci 
                predškolske dobi od <strong>5-7 godina</strong>. Radionice su osmišljene prema principima 
                <strong> Montessori pedagogije</strong>, autorski su program Logopedskog Centra te je sav 
                materijal isključivo osmišljen i izrađen za provođenje autorske radionice.
              </p>
              
              <p className="mb-6 text-lg">
                Tijekom svakog ciklusa radionica na mjesečnoj bazi, polaznici će obrađivati po jedan kontinent 
                (<strong>Europa, Azija, Afrika, Sjeverna Amerika, Južna Amerika, Australija i Antarktika</strong>) 
                te će, kroz niz didaktičkih sredstava, materijala i aktivnosti izrađenih prema zakonitostima 
                Montessori pedagogije, produbljivati znanja i spoznaje o raznolikim kulturama i običajima svijeta.
              </p>
              
              <p className="mb-0 text-lg">
                Nakon svakog ciklusa radionica, u prostorima Logopedskog Centra, 
                <strong> bit će izložena mini izložba polaznika</strong>.
              </p>
            </div>
          </div>

          {/* Continents Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-blue-200 text-center hover:shadow-3xl transition-all duration-300">
              <div className="text-4xl mb-3">🇪🇺</div>
              <h4 className="font-bold text-sky-700">Europa</h4>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-red-200 text-center hover:shadow-3xl transition-all duration-300">
              <div className="text-4xl mb-3">🏯</div>
              <h4 className="font-bold text-sky-700">Azija</h4>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-yellow-200 text-center hover:shadow-3xl transition-all duration-300">
              <div className="text-4xl mb-3">🦁</div>
              <h4 className="font-bold text-sky-700">Afrika</h4>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-green-200 text-center hover:shadow-3xl transition-all duration-300">
              <div className="text-4xl mb-3">🗽</div>
              <h4 className="font-bold text-sky-700">Sjeverna Amerika</h4>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-purple-200 text-center hover:shadow-3xl transition-all duration-300">
              <div className="text-4xl mb-3">🦙</div>
              <h4 className="font-bold text-sky-700">Južna Amerika</h4>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-pink-200 text-center hover:shadow-3xl transition-all duration-300">
              <div className="text-4xl mb-3">🦘</div>
              <h4 className="font-bold text-sky-700">Australija</h4>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-cyan-200 text-center hover:shadow-3xl transition-all duration-300">
              <div className="text-4xl mb-3">🐧</div>
              <h4 className="font-bold text-sky-700">Antarktika</h4>
            </div>
          </div>

          {/* Program Details */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-amber-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-4">Praktične informacije</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200 text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-sky-700 mb-2">POLAZNICI:</h4>
                <p className="text-sky-700 text-sm">djeca u dobi od 5-7 godina</p>
              </div>
              
              <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200 text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-sky-700 mb-2">VODITELJICE:</h4>
                <p className="text-sky-700 text-sm">logopedinja s Montessori edukacijom</p>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200 text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-sky-700 mb-2">VRIJEME:</h4>
                <p className="text-sky-700 text-sm">termin naknadno; nakon formiranja skupina</p>
              </div>
              
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-sky-700 mb-2">CIJENA:</h4>
                <p className="text-sky-700 text-sm">na upit</p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 border-2 border-amber-200">
              <h3 className="text-2xl font-bold text-sky-700 mb-6 text-center">U cijenu je uključeno:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-700 mb-2">Predavanje za roditelje</h4>
                    <p className="text-sky-700 text-sm">djece uključene u radionice (teorijska polazišta, sadržaj i plan radionica)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-700 mb-2">Mjesečni ciklusi radionica</h4>
                    <p className="text-sky-700 text-sm">Strukturirane aktivnosti s mini izložbom nakon svakog ciklusa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Content */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-yellow-200 mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-sky-700 mb-4">Sadržaj radionice</h2>
              <p className="text-lg text-sky-600 max-w-3xl mx-auto">
                Sveobuhvatan razvoj kroz istraživanje svijeta i kultura
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Cultural Learning */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-sky-700 mb-4 text-center">🌍 Kulturno učenje</h3>
                
                <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Stjecanje spoznaja i znanja o novoj prirodnoj sredini</h4>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Upoznavanje različitih običaja i kultura</h4>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-4 border-2 border-yellow-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Upoznavanje raznolikosti biljnih vrsta</h4>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Upoznavanje s regijama, zastavama i gradovima</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Motor Skills */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-sky-700 mb-4 text-center">🤲 Motoričke vještine</h3>
                
                <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razvoj koordinacije i preciznosti pokreta</h4>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-xl p-4 border-2 border-teal-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">6</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razvoj fine motorike</h4>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-50 rounded-xl p-4 border-2 border-cyan-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">7</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razvoj strpljivosti</h4>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">8</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razvoj mišljenja</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sensory & Academic Skills */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-sky-700 mb-4 text-center">🧠 Osjetilne i akademske vještine</h3>
                
                <div className="bg-indigo-50 rounded-xl p-4 border-2 border-indigo-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">9</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razvoj percepcije mirisa, okusa i sluha</h4>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">10</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razvoj taktilne percepcije</h4>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-xl p-4 border-2 border-pink-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">11</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razvoj predvještina čitanja i pisanja</h4>
                    </div>
                  </div>
                </div>

                <div className="bg-rose-50 rounded-xl p-4 border-2 border-rose-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">12</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Usvajanje tehnike čitanja</h4>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">13</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Bogaćenje rječnika</h4>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">14</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razvoj matematičkih sposobnosti</h4>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-4 border-2 border-yellow-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">15</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-700 mb-1">Razvoj likovnosti i upoznavanje novih oblika umjetničkog izražavanja</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Montessori Approach */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-10 shadow-2xl mb-12">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">🌍 Montessori putovanje po svijetu</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-xl font-semibold mb-2">Istraživanje</h3>
                  <p className="text-orange-100">Samostalno otkrivanje novih kultura i kontinenata</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold mb-2">Kreativnost</h3>
                  <p className="text-orange-100">Razvoj kroz umjetničko izražavanje i likovnost</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">🏛️</div>
                  <h3 className="text-xl font-semibold mb-2">Izložba</h3>
                  <p className="text-orange-100">Mini izložba radova nakon svakog ciklusa</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-orange-200">
              <h2 className="text-3xl font-bold text-sky-700 mb-4">🌍 Pošaljite svoje dijete na putovanje oko svijeta! 🗺️</h2>
              <p className="text-sky-700 text-lg mb-6 max-w-2xl mx-auto">
                Kontaktirajte nas da saznate više o programu "Put oko svijeta s Govornim Oblačićem" i kako 
                možemo pomoći vašem djetetu da istraži svijet kroz Montessori pristup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={goHome}
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  ← Povratak na početnu
                </button>
                <button
                  onClick={handleContactClick}
                  className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Kontaktirajte nas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  if (currentPage === 'put-oko-svijeta') {
    return <PutOkoSvijetaPage />;
  }

  if (currentPage === 'grupna-terapija') {
    return <GrupnaTerapijaPage />;
  }

  if (currentPage === 'savjetovanje-radionice') {
    return <SavjetovanjeRadionicePage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      <Header />

      {/* Hero Section */}
      <section id="pocetna" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* More clouds for childish feel */}
          <Cloud1 
            className="absolute top-20 left-10 w-24 h-24 text-white animate-float drop-shadow-lg cloud-transform-1" 
            fill="rgba(255, 255, 255, 0.9)"
            style={{ animationDelay: '0s' }}
          />
          <Cloud2 
            className="absolute top-40 right-20 w-10 h-10 text-white animate-float-slow drop-shadow-lg cloud-transform-2" 
            fill="rgba(255, 255, 255, 0.85)"
            style={{ animationDelay: '2s' }}
          />
          <Cloud3 
            className="absolute bottom-40 left-1/4 w-32 h-32 text-white animate-float drop-shadow-lg cloud-transform-3" 
            fill="rgba(255, 255, 255, 0.9)"
            style={{ animationDelay: '1s' }}
          />
          <Cloud4 
            className="absolute top-60 left-1/3 w-8 h-8 text-white animate-float-slow drop-shadow-lg cloud-transform-4" 
            fill="rgba(255, 255, 255, 0.8)"
            style={{ animationDelay: '3s' }}
          />
          <Cloud5 
            className="absolute bottom-20 right-1/3 w-24 h-24 text-white animate-float drop-shadow-lg cloud-transform-5" 
            fill="rgba(255, 255, 255, 0.85)"
            style={{ animationDelay: '4s' }}
          />
          <Cloud6 
            className="absolute top-32 right-1/4 w-14 h-14 text-white animate-float-slow drop-shadow-lg cloud-transform-6" 
            fill="rgba(255, 255, 255, 0.8)"
            style={{ animationDelay: '5s' }}
          />
          <Cloud7 
            className="absolute bottom-10 right-1/2 w-20 h-20 text-white animate-float drop-shadow-lg cloud-transform-4" 
            fill="rgba(255, 255, 255, 0.75)"
            style={{ animationDelay: '6s' }}
          />
          <Cloud8 
            className="absolute top-24 left-3/4 w-12 h-12 text-white animate-float-slow drop-shadow-lg cloud-transform-5" 
            fill="rgba(255, 255, 255, 0.9)"
            style={{ animationDelay: '7s' }}
          />
          <Cloud1 
            className="absolute bottom-80 left-10 w-16 h-16 text-white animate-float drop-shadow-lg cloud-transform-6" 
            fill="rgba(255, 255, 255, 0.7)"
            style={{ animationDelay: '8s' }}
          />
          <Sun className="absolute top-16 right-16 w-12 h-12 text-yellow-400/70 animate-pulse drop-shadow-lg" fill="rgba(255, 255, 0, 0.6)" />
          <Cloud2 
            className="absolute top-10 left-1/2 w-10 h-10 text-white animate-float-slow drop-shadow-lg cloud-transform-3" 
            fill="rgba(255, 255, 255, 0.8)"
            style={{ animationDelay: '9s' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-sky-700 mb-8 leading-tight drop-shadow-lg">
              Dobrodošli u
              <span className="block text-sky-500 mt-4 text-6xl sm:text-7xl lg:text-8xl">Govorni Oblačić</span>
            </h2>
            <p className="text-2xl sm:text-3xl text-sky-600 mb-12 font-light leading-relaxed drop-shadow-sm">
              Stručan logopedski centar gdje djeca uče kroz igru i radost. 
              Pomažemo vašem djetetu da otkrije čaroliju govora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('usluge')}
                className="bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl border-4 border-white/30"
              >
                Naše usluge
              </button>
              <button
                onClick={handleContactClick}
                className="border-4 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl bg-white/80"
              >
                Kontaktirajte nas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="o-nama" className="py-20 bg-white/50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <Cloud1 className="absolute top-20 left-20 w-8 h-8 text-white animate-float drop-shadow-lg cloud-transform-1" fill="rgba(255, 255, 255, 0.7)" />
          <Cloud3 className="absolute bottom-20 right-20 w-12 h-12 text-white animate-float-slow drop-shadow-lg cloud-transform-2" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud5 className="absolute top-40 left-1/3 w-10 h-10 text-white animate-float drop-shadow-lg cloud-transform-3" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud7 className="absolute bottom-40 right-1/4 w-14 h-14 text-white animate-float-slow drop-shadow-lg cloud-transform-4" fill="rgba(255, 255, 255, 0.8)" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">O Nama</h3>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Upoznajte naš Logopedski Centar i način na koji pomažemo djeci
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200">
            <div className="text-left space-y-6 text-lg text-sky-700 leading-relaxed">
              <p>
                Logopedski Centar Govorni Oblačić osnovan je početkom 2018. godine s ciljem pružanja stručne logopedske podrške u vidu prevencije, rane intervencije, identifikacije i tretiranja teškoća komunikacijskog i jezično-govornog razvoja djece od najranije dobi.
              </p>
              
              <p>
                Misija našeg Centra je svakom djetetu osigurati kvalitetnu i profesionalnu pomoć te educirati i razvijati partnerski odnos s roditeljima s ciljem razumijevanja funkcioniranja djeteta.
              </p>
              
              <p>
                Vizija Logopedskog Centra je stvaranje poticajnog okruženja za istraživanje, igru, učenje i druženje djece i roditelja te zajedničko prevladavanje teškoća na planu komunikacijskog i jezično-govornog razvoja. Osluškujemo individualne potrebe djeteta te u skladu s razvojnim stupnjem i interesima djeteta definiramo kratkoročne i dugoročne ciljeve terapijskog rada i savladavamo postojeće prepreke.
              </p>
              
              <p>
                U Logopedskom Centru stručnu logopedsku podršku pružaju magistre logopedije s višegodišnjim iskustvom u radu s djecom predškolske i školske dobi te dodatnim edukacijama (Sustav komuniciranja razmjenom slika – PECS; Uvod u Floortime pristup; Stručno usavršavanje iz Montessori pedagogije). Logopedinje se i dalje kontinuirano stručno usavršavaju te u svoj rad implementiraju nove spoznaje i suvremene, znanstveno utemeljene metode.
              </p>
              
              <p>
                Posebnost našeg Logopedskog Centra je primjena Montessori metode rada u područjima razvoja samostalnosti, osjetilnosti, jezičnih vještina, matematičkih predvještina, likovnosti i kozmičkog odgoja. U samom središtu Montessori pedagogije nalazi se dijete te polazi od djeteta. Stoga i naš Centar razvija jedinstven pristup djetetu na način da mu se osigura poticajna okolina koja mu omogućuje da kroz igru samostalno uči i otkriva znanja o svijetu. Glavni cilj je razvoj svih djetetovih potencijala i talenata.
              </p>
              
              <p>
                U svaki segment terapijskog rada uključujemo i roditelje u vidu savjetovanja te smjernicama za rad u obiteljskom okruženju. Kontinuirano održavamo radionice za roditelje u koje uključujemo i vanjske stručne suradnike.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section id="usluge" className="py-20 bg-white/50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <Cloud6 className="absolute top-10 left-10 w-10 h-10 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.7)" />
          <Cloud7 className="absolute bottom-20 right-10 w-12 h-12 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud8 className="absolute top-40 left-1/3 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud1 className="absolute bottom-40 right-1/4 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud2 className="absolute top-60 right-1/2 w-14 h-14 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Naše usluge</h3>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Pružamo stručnu logopedsku pomoć prilagođenu potrebama svakog djeteta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service 1 */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-4 border-4 border-sky-200 hover:border-sky-300 cursor-pointer"
                 onClick={() => scrollToSection('logopedska-procjena')}>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-6 rounded-full shadow-xl">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
              </div>
              <h4 className="text-3xl font-bold text-sky-700 mb-6 text-center">
                Logopedska procjena
              </h4>
              <p className="text-lg text-sky-600 text-center leading-relaxed mb-4">
                Detaljno vrednovanje govorno-jezičnih sposobnosti vašeg djeteta kroz 
                znanstveno utemeljene metode i zanimljive aktivnosti.
              </p>
              <div className="text-center">
                <span className="text-sky-500 font-semibold hover:text-sky-700 transition-colors">
                  Saznajte više →
                </span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-4 border-4 border-pink-200 hover:border-pink-300 cursor-pointer"
                 onClick={() => navigateToPage('individualna-terapija')}>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-pink-400 to-rose-500 p-6 rounded-full shadow-xl">
                  <MessageSquare className="w-12 h-12 text-white" />
                </div>
              </div>
              <h4 className="text-3xl font-bold text-sky-700 mb-6 text-center">
                Individualna terapija
              </h4>
              <p className="text-lg text-sky-600 text-center leading-relaxed mb-4">
                Personalizirani pristup svakom djetetu s ciljem poticanja 
                govorno-jezičnog razvoja kroz igru i kreativne aktivnosti.
              </p>
              <div className="bg-pink-50 rounded-xl p-4 border-2 border-pink-200">
                <ul className="text-sm text-sky-700 space-y-1">
                  <li>• Prilagođeno djetetovim potrebama</li>
                  <li>• Kroz igru i zabavne aktivnosti</li>
                  <li>• Redovito praćenje napretka</li>
                </ul>
              </div>
              <div className="text-center mt-4">
                <span className="text-pink-500 font-semibold hover:text-pink-700 transition-colors">
                  Saznajte više →
                </span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-4 border-4 border-green-200 hover:border-green-300 cursor-pointer"
                 onClick={() => scrollToSection('grupna-terapija')}>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-6 rounded-full shadow-xl">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
              <h4 className="text-3xl font-bold text-sky-700 mb-6 text-center">
                Grupna terapija
              </h4>
              <p className="text-lg text-sky-600 text-center leading-relaxed mb-4">
                Razvoj komunikacijskih vještina kroz druženje s vršnjacima 
                u strukturiranim grupnim aktivnostima i igrama.
              </p>
              <div className="text-center">
                <span className="text-green-500 font-semibold hover:text-green-700 transition-colors">
                  Pogledajte programe →
                </span>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-purple-200 hover:border-purple-300 cursor-pointer"
                 onClick={() => scrollToSection('savjetovanje-radionice')}>
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-full flex-shrink-0 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-sky-700 mb-3">
                    Savjetovanje i radionice
                  </h4>
                  <p className="text-lg text-sky-600 leading-relaxed mb-3">
                    Stručna podrška za roditelje u razvoju komunikacijskih vještina djece.
                  </p>
                  <span className="text-purple-500 font-semibold hover:text-purple-700 transition-colors">
                    Saznajte više →
                  </span>
                </div>
              </div>
            </div>

            {/* Service 5 - Montessori */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-yellow-200 hover:border-yellow-300 cursor-pointer"
                 onClick={() => scrollToSection('montessori')}>
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full flex-shrink-0 shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-sky-700 mb-3">
                    Montessori pristup
                  </h4>
                  <p className="text-lg text-sky-600 leading-relaxed mb-3">
                    Znanstveni pristup razvoju djeteta kroz samostalnost i poštovanje.
                  </p>
                  <span className="text-yellow-600 font-semibold hover:text-yellow-800 transition-colors">
                    "Pomozi mi da učinim sam!" →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logopedska Procjena Section */}
      <section id="logopedska-procjena" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Cloud3 className="absolute top-10 right-10 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud5 className="absolute bottom-20 left-10 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.7)" />
          <Cloud7 className="absolute top-1/2 right-1/3 w-14 h-14 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Logopedska procjena</h3>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Stručna procjena komunikacijskog i jezično-govornog razvoja djece svih uzrasta
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-sky-200">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-sky-700 mb-6 text-center">Što uključuje procjena?</h4>
              <ul className="space-y-4 text-lg text-sky-700">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Detaljnu analizu govorno-jezičnih sposobnosti</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Procjenu komunikacijskih vještina</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Vrednovanje predvještinama čitanja i pisanja</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Individualizirani plan terapije</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-blue-200">
              <h4 className="text-3xl font-bold text-sky-700 mb-6 text-center">Naš pristup</h4>
              <p className="text-lg text-sky-700 leading-relaxed mb-6">
                Koristimo znanstveno utemeljene metode procjene prilagođene uzrastu djeteta. 
                Procjena se provodi kroz igru i zanimljive aktivnosti koje omogućavaju 
                djetetu da se osjeća opušteno i sigurno.
              </p>
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <h5 className="text-xl font-semibold text-sky-700 mb-3">Trajanje procjene:</h5>
                <p className="text-sky-700">
                  <strong>60-90 minuta</strong> ovisno o uzrastu djeteta i složenosti slučaja. 
                  Uključuje razgovor s roditeljima i pisani izvještaj s preporukama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grupna Terapija Section */}
      <section id="grupna-terapija" className="py-20 bg-white/50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Cloud1 className="absolute top-20 left-20 w-8 h-8 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
          <Cloud4 className="absolute bottom-10 right-10 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud6 className="absolute top-1/2 left-1/4 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.75)" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Grupna terapija</h3>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Razvoj komunikacijskih vještina kroz druženje s vršnjacima
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-green-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-sky-700 mb-3 text-center">S Govornim Oblačićem u školu</h4>
              <p className="text-sky-700 text-center">Fonološki trening za predškolsku djecu</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-purple-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-sky-700 mb-3 text-center">Istražujemo</h4>
              <p className="text-sky-700 text-center">Jačanje komunikacijskih vještina</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-yellow-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-sky-700 mb-3 text-center">Superjunaci pišu</h4>
              <p className="text-sky-700 text-center">Kreativna školica pisanja</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigateToPage('grupna-terapija')}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl"
            >
              Pogledajte sve programe
            </button>
          </div>
        </div>
      </section>

      {/* Montessori Section */}
      <section id="montessori" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Cloud2 className="absolute top-10 left-10 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud8 className="absolute bottom-20 right-20 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Montessori pristup</h3>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              "Pomozi mi da učinim sam!" - Znanstveni pristup razvoju djeteta
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-yellow-200">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-sky-700 mb-6 text-center">Naš Montessori pristup</h4>
              <p className="text-lg text-sky-700 leading-relaxed mb-6">
                Primjenjujemo Montessori filozofiju u logopedskom radu, omogućavajući djetetu 
                da kroz samostalno istraživanje i manipulaciju materijala razvija svoje 
                komunikacijske sposobnosti u prirodnom ritmu.
              </p>
              <div className="text-center">
                <button
                  onClick={() => navigateToPage('montessori')}
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Saznajte više o Montessori pristupu
                </button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-orange-200">
              <h4 className="text-2xl font-bold text-sky-700 mb-6">Principi našeg rada:</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sky-700">Poštovanje djeteta</h5>
                    <p className="text-sky-600">Svako dijete je jedinstveno i ima svoj ritam razvoja</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sky-700">Pripremljeno okruženje</h5>
                    <p className="text-sky-600">Materijali i aktivnosti prilagođeni djetetovim potrebama</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sky-700">Uloga odraslog</h5>
                    <p className="text-sky-600">Logoped kao vodič koji podržava dijetetovo učenje</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savjetovanje i Radionice Section */}
      <section id="savjetovanje-radionice" className="py-20 bg-white/50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Cloud5 className="absolute top-20 right-20 w-10 h-10 text-white animate-float drop-shadow-lg" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud7 className="absolute bottom-10 left-10 w-12 h-12 text-white animate-float-slow drop-shadow-lg" fill="rgba(255, 255, 255, 0.85)" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Savjetovanje i radionice</h3>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Stručna podrška za roditelje u razvoju komunikacijskih vještina djece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-purple-200">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-sky-700 mb-6 text-center">Individualno savjetovanje</h4>
              <p className="text-lg text-sky-700 leading-relaxed text-center mb-6">
                Personalizirane konzultacije s roditeljima o razvoju komunikacijskih 
                vještina njihove djece i načinima podrške kod kuće.
              </p>
              <ul className="text-sky-700 space-y-2">
                <li>• Analiza trenutnog stanja</li>
                <li>• Praktični savjeti za svakodnevicu</li>
                <li>• Strategije poticanja govora</li>
                <li>• Praćenje napretka</li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-indigo-200">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-sky-700 mb-6 text-center">Grupne radionice</h4>
              <p className="text-lg text-sky-700 leading-relaxed text-center mb-6">
                Edukativne radionice za roditelje gdje se dijele iskustva i 
                uče praktične tehnike poticanja govorno-jezičnog razvoja.
              </p>
              <ul className="text-sky-700 space-y-2">
                <li>• Tematske radionice</li>
                <li>• Razmjena iskustava</li>
                <li>• Praktične vježbe</li>
                <li>• Stručno vođenje</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Novosti Section */}
      <section id="novosti" className="py-20 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <Cloud6 className="absolute top-10 left-10 w-10 h-10 text-white animate-float-slow drop-shadow-lg cloud-transform-1" fill="rgba(255, 255, 255, 0.7)" />
          <Cloud7 className="absolute bottom-20 right-10 w-12 h-12 text-white animate-float drop-shadow-lg cloud-transform-2" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud8 className="absolute top-40 left-1/3 w-12 h-12 text-white animate-float-slow drop-shadow-lg cloud-transform-3" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud1 className="absolute bottom-40 right-1/4 w-10 h-10 text-white animate-float drop-shadow-lg cloud-transform-4" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud2 className="absolute top-60 right-1/2 w-14 h-14 text-white animate-float-slow drop-shadow-lg cloud-transform-5" fill="rgba(255, 255, 255, 0.85)" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Novosti</h3>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Najnovije vijesti i događanja iz našeg centra
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-sky-700 mb-4">Savjeti za roditelje</h3>
            <p className="text-xl text-sky-600 max-w-3xl mx-auto">
              Praktični savjeti kako poticati govorni razvoj vašeg djeteta kod kuće
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tip 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-yellow-200 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full flex-shrink-0 shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-sky-700 mb-4">
                    Čitanje svaki dan
                  </h4>
                  <p className="text-lg text-sky-600 leading-relaxed">
                    Redovito čitanje priča pomaže razvoju rječnika i razumijevanja jezika. 
                    Postavite pitanja o pročitanome i ohrabrite dijete da prepričava priče.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-green-200 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-full flex-shrink-0 shadow-lg">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-sky-700 mb-4">
                    Aktivno slušanje
                  </h4>
                  <p className="text-lg text-sky-600 leading-relaxed">
                    Dajte djetetu vremena da se izrazi. Slušajte pažljivo i odgovarajte 
                    na ono što govori, čime pokazujete da je komunikacija važna.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-purple-200 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-full flex-shrink-0 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-sky-700 mb-4">
                    Pjevanje i rime
                  </h4>
                  <p className="text-lg text-sky-600 leading-relaxed">
                    Pjesme, rime i brojalice razvijaju osjećaj za ritam i zvuk jezika. 
                    To je zabavan način učenja novih riječi i glasova.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-blue-200 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-400 to-sky-500 p-4 rounded-full flex-shrink-0 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-sky-700 mb-4">
                    Igra uloga
                  </h4>
                  <p className="text-lg text-sky-600 leading-relaxed">
                    Kroz igru uloga djeca prakticiraju komunikaciju u različitim situacijama. 
                    Igrajte se trgovine, doktora, škole - to razvija praktične govorne vještine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <Cloud6 className="absolute top-20 left-20 w-10 h-10 text-white animate-float drop-shadow-lg cloud-transform-7" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud7 className="absolute bottom-10 right-20 w-12 h-12 text-white animate-float-slow drop-shadow-lg cloud-transform-8" fill="rgba(255, 255, 255, 0.8)" />
          <Cloud8 className="absolute top-10 left-1/2 w-12 h-12 text-white animate-float-slow drop-shadow-lg cloud-transform-1" fill="rgba(255, 255, 255, 0.7)" />
          <Cloud1 className="absolute bottom-40 left-10 w-8 h-8 text-white animate-float drop-shadow-lg cloud-transform-2" fill="rgba(255, 255, 255, 0.75)" />
          <Cloud2 className="absolute top-60 right-1/3 w-10 h-10 text-white animate-float-slow drop-shadow-lg cloud-transform-3" fill="rgba(255, 255, 255, 0.8)" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-sky-700 mb-6 drop-shadow-lg">Kontaktirajte nas</h3>
            <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed">
              Javite nam se za besplatnu konzultaciju ili rezervaciju termina
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-10 shadow-2xl border-4 border-sky-200">
              <h4 className="text-3xl font-bold text-sky-700 mb-8 text-center">Pošaljite nam poruku</h4>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-bold text-sky-700 mb-3">
                    Ime i prezime
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-sky-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20 outline-none transition-all text-lg shadow-lg"
                    placeholder="Vaše ime i prezime"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-bold text-sky-700 mb-3">
                    Email adresa
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-sky-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20 outline-none transition-all text-lg shadow-lg"
                    placeholder="vasa.email@adresa.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-bold text-sky-700 mb-3">
                    Broj telefona
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-sky-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20 outline-none transition-all text-lg shadow-lg"
                    placeholder="+385 xx xxx xxxx"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-bold text-sky-700 mb-3">
                    Poruka
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-sky-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20 outline-none transition-all resize-none text-lg shadow-lg"
                    placeholder="Opišite nam kako možemo pomoći vašem djetetu..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-white/20"
                >
                  Pošaljite poruku
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl p-10 shadow-2xl border-4 border-sky-200">
                <h4 className="text-3xl font-bold text-sky-700 mb-8 text-center">Naše informacije</h4>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 rounded-full shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sky-700 text-lg">Telefon</p>
                      <p className="text-sky-600 text-lg">+385 1 234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 rounded-full shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sky-700 text-lg">Email</p>
                      <p className="text-sky-600 text-lg">info@govorni-oblacic.hr</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 rounded-full shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sky-700 text-lg">Adresa</p>
                      <p className="text-sky-600 text-lg">Ulica logopeda 15<br />10000 Zagreb</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-10 shadow-2xl border-4 border-yellow-200">
                <h5 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center justify-center">
                  <Sun className="w-8 h-8 mr-3" />
                  Radno vrijeme
                </h5>
                <div className="space-y-3 text-yellow-700 text-lg">
                  <p className="flex justify-between">
                    <span>Ponedjeljak - Petak</span>
                    <span className="font-bold">08:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Subota</span>
                    <span className="font-bold">09:00 - 14:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Nedjelja</span>
                    <span className="font-bold">Zatvoreno</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-700 text-white py-16 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <Cloud3 className="absolute top-10 left-10 w-10 h-10 text-white/30 animate-float-slow drop-shadow-lg cloud-transform-4" fill="rgba(255, 255, 255, 0.2)" />
          <Cloud4 className="absolute bottom-10 right-10 w-12 h-12 text-white/30 animate-float drop-shadow-lg cloud-transform-5" fill="rgba(255, 255, 255, 0.25)" />
          <Cloud5 className="absolute top-20 right-1/3 w-8 h-8 text-white/20 animate-float-slow drop-shadow-lg cloud-transform-6" fill="rgba(255, 255, 255, 0.15)" />
          <Cloud6 className="absolute bottom-20 left-1/4 w-8 h-8 text-white/25 animate-float drop-shadow-lg cloud-transform-7" fill="rgba(255, 255, 255, 0.2)" />
          <Cloud7 className="absolute top-40 left-1/2 w-10 h-10 text-white/30 animate-float-slow drop-shadow-lg cloud-transform-8" fill="rgba(255, 255, 255, 0.25)" />
          <Cloud8 className="absolute bottom-40 right-1/4 w-12 h-12 text-white/35 animate-float drop-shadow-lg cloud-transform-1" fill="rgba(255, 255, 255, 0.3)" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://logopedski-centar.com/wp-content/uploads/2019/05/Ikona512x512.png" 
                  alt="LOGOPEDSKI CENTAR Govorni Oblačić" 
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h6 className="text-2xl font-bold">LOGOPEDSKI CENTAR</h6>
                  <p className="text-sky-200 text-lg">Govorni Oblačić</p>
                </div>
              </div>
              <p className="text-sky-100 leading-relaxed text-lg">
                Stručan i srdačan pristup svakom djetetu. Pomažemo dječjim 
                glasovima da se čuju jasno i bistro.
              </p>
            </div>
            
            <div>
              <h6 className="text-2xl font-bold mb-6">Brze veze</h6>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('o-nama')}
                  className="block text-sky-100 hover:text-white transition-colors duration-200 text-lg"
                >
                  O Nama
                </button>
                <button
                  onClick={() => scrollToSection('nas-tim')}
                  className="block text-sky-100 hover:text-white transition-colors duration-200 text-lg"
                >
                  Naš Tim
                </button>
                <button
                  onClick={() => scrollToSection('usluge')}
                  className="block text-sky-100 hover:text-white transition-colors duration-200 text-lg"
                >
                  Usluge
                </button>
                <button
                  onClick={() => scrollToSection('novosti')}
                  className="block text-sky-100 hover:text-white transition-colors duration-200 text-lg"
                >
                  Novosti
                </button>
                <button
                  onClick={() => scrollToSection('galerija')}
                  className="block text-sky-100 hover:text-white transition-colors duration-200 text-lg"
                >
                  Galerija
                </button>
                <button
                  onClick={handleContactClick}
                  className="block text-sky-100 hover:text-white transition-colors duration-200 text-lg"
                >
                  Kontakt
                </button>
              </div>
            </div>
            
            <div>
              <h6 className="text-2xl font-bold mb-6">Kontakt</h6>
              <div className="space-y-3 text-sky-100 text-lg">
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  +385 1 234 5678
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  info@govorni-oblacic.hr
                </p>
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  Zagreb, Croatia
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-sky-600 mt-12 pt-8 text-center">
            <p className="text-sky-100 text-lg">
              © 2025 LOGOPEDSKI CENTAR Govorni Oblačić. Sva prava zadržana.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;