import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingBag,
  Heart,
  Palette,
  Award,
  MapPin,
  Calendar,
  Brush,
  Eye,
  Users,
  Star,
  Quote,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import CartSidebar from "@/components/CartSidebar";

// Artist's featured works for the about page
const artisticJourney = [
  {
    year: "2009",
    title: "Primeros Pasos",
    description: "Inicio de los estudios formales en Bellas Artes en la Universidad Complutense de Madrid.",
    icon: <Brush className="h-5 w-5" />,
  },
  {
    year: "2013",
    title: "Graduación y Primera Exposición",
    description: "Graduación con honores y primera exposición individual 'Nuevas Perspectivas' en Galería Arte Contemporáneo.",
    icon: <Award className="h-5 w-5" />,
  },
  {
    year: "2016",
    title: "Reconocimiento Internacional",
    description: "Premio 'Joven Talento Europeo' en la Bienal de Arte Contemporáneo de Venecia.",
    icon: <Star className="h-5 w-5" />,
  },
  {
    year: "2019",
    title: "Estilo Propio",
    description: "Desarrollo de técnica mixta característica que combina óleo tradicional con elementos digitales.",
    icon: <Palette className="h-5 w-5" />,
  },
  {
    year: "2021",
    title: "Estudio Propio",
    description: "Apertura del estudio en el centro histórico de Madrid, donde actualmente creo todas mis obras.",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    year: "2024",
    title: "ArteStudio Online",
    description: "Lanzamiento de la tienda online para acercar el arte a más personas en toda España.",
    icon: <Users className="h-5 w-5" />,
  },
];

const achievements = [
  {
    title: "200+ Obras Creadas",
    description: "Más de 200 obras originales en colecciones privadas",
    icon: <Brush className="h-6 w-6 text-amber-600" />,
  },
  {
    title: "15 Exposiciones",
    description: "Participación en exposiciones nacionales e internacionales",
    icon: <Eye className="h-6 w-6 text-amber-600" />,
  },
  {
    title: "5 Premios",
    description: "Reconocimientos por excelencia artística y innovación",
    icon: <Award className="h-6 w-6 text-amber-600" />,
  },
  {
    title: "500+ Coleccionistas",
    description: "Obras en manos de amantes del arte en toda Europa",
    icon: <Users className="h-6 w-6 text-amber-600" />,
  },
];

const philosophyQuotes = [
  {
    text: "El arte no es lo que ves, sino lo que haces ver a los demás.",
    context: "Sobre la misión del artista",
  },
  {
    text: "Cada pincelada lleva consigo una emoción, cada color cuenta una historia.",
    context: "Proceso creativo",
  },
  {
    text: "Mi objetivo es crear piezas que transformen espacios y toquen corazones.",
    context: "Filosofía artística",
  },
];

export default function SobreMi() {
  const [activeQuote, setActiveQuote] = useState(0);
  const { openCart, itemCount } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100">
      {/* Navigation */}
      <nav className="backdrop-blur-sm bg-white/80 border-b border-stone-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold text-stone-800">
                Arte<span className="text-amber-600">Studio</span>
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link
                  to="/galeria"
                  className="text-stone-600 hover:text-stone-800 transition-colors"
                >
                  Galería
                </Link>
                <Link to="/sobre-mi" className="text-amber-600 font-medium">
                  Sobre Mí
                </Link>
                <Link
                  to="/contacto"
                  className="text-stone-600 hover:text-stone-800 transition-colors"
                >
                  Contacto
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <Heart className="h-4 w-4 mr-2" />
                Favoritos
              </Button>
              <Button
                size="sm"
                className="bg-amber-600 hover:bg-amber-700 relative"
                onClick={openCart}
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Carrito
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-red-600 text-white text-xs">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-amber-100 text-amber-800 border-amber-200"
                >
                  ✨ Artista Contemporáneo
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-stone-800 leading-tight">
                  Sobre
                  <span className="block text-amber-600">Elena Martínez</span>
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed">
                  Una artista apasionada que encuentra belleza en la intersección
                  entre lo tradicional y lo contemporáneo, creando obras que
                  despiertan emociones y transforman espacios.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-amber-600">15+</div>
                  <div className="text-stone-600">Años de experiencia</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-amber-600">200+</div>
                  <div className="text-stone-600">Obras creadas</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  asChild
                >
                  <Link to="/galeria">Ver Mi Trabajo</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-stone-300 text-stone-700"
                  asChild
                >
                  <Link to="/contacto">Contactar</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-4 bg-gradient-to-br from-stone-600 to-stone-800 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Palette className="h-16 w-16 mx-auto mb-4 text-amber-300" />
                    <p className="text-lg font-medium">Elena en su estudio</p>
                    <p className="text-sm text-stone-300 mt-2">
                      Centro histórico de Madrid
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <Brush className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Story */}
      <section className="py-20 bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
                Mi Historia
              </h2>
              <p className="text-lg text-stone-600">
                Un viaje de descubrimiento personal y crecimiento artístico
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-stone-800">
                  El Despertar Artístico
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Mi relación con el arte comenzó en la infancia, cuando
                  encontraba paz y expresión a través del dibujo. Lo que
                  empezó como un pasatiempo se convirtió en una pasión que
                  definiría mi vida. Cada trazo, cada color, era una forma
                  de comunicar lo que las palabras no podían expresar.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Durante mis estudios en Bellas Artes, descubrí que mi
                  verdadera vocación era crear puentes entre lo clásico y
                  lo contemporáneo, desarrollando un estilo único que honra
                  las técnicas tradicionales mientras abraza la innovación
                  moderna.
                </p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-2xl shadow-lg"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 aspect-square bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl shadow-lg"></div>
              <div className="order-1 md:order-2 space-y-6">
                <h3 className="text-2xl font-bold text-stone-800">
                  Filosofía y Técnica
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Mi trabajo se centra en la exploración de emociones humanas
                  a través del color y la forma. Utilizo técnicas mixtas que
                  combinan óleos tradicionales con elementos contemporáneos,
                  creando texturas y profundidades que invitan a la
                  contemplación.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Cada obra es un diálogo entre el artista y el espectador,
                  diseñada para evocar diferentes sensaciones según el momento
                  y el estado de ánimo. Creo que el arte debe ser accesible
                  y transformador, capaz de convertir cualquier espacio en
                  un refugio de belleza y reflexión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artistic Journey Timeline */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trayectoria Artística
            </h2>
            <p className="text-lg text-stone-300">
              Momentos clave en mi evolución como artista
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {artisticJourney.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex items-start space-x-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                      {milestone.icon}
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-b border-stone-700 last:border-b-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {milestone.title}
                      </h3>
                      <Badge className="bg-amber-600 text-white w-fit">
                        {milestone.year}
                      </Badge>
                    </div>
                    <p className="text-stone-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quotes */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Filosofía Artística
            </h2>
            <p className="text-lg text-stone-600">
              Reflexiones sobre el arte y la creatividad
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-12 text-center">
                <Quote className="h-12 w-12 text-amber-600 mx-auto mb-6" />
                <blockquote className="text-2xl lg:text-3xl font-medium text-stone-800 mb-6 leading-relaxed">
                  "{philosophyQuotes[activeQuote].text}"
                </blockquote>
                <p className="text-stone-600 mb-8">
                  — {philosophyQuotes[activeQuote].context}
                </p>
                <div className="flex justify-center space-x-2">
                  {philosophyQuotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveQuote(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeQuote
                          ? "bg-amber-600"
                          : "bg-stone-300 hover:bg-stone-400"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Logros y Reconocimientos
            </h2>
            <p className="text-lg text-stone-600">
              Hitos que marcan mi trayectoria profesional
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-stone-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Studio & Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Visita Mi Estudio
            </h2>
            <p className="text-xl text-amber-100 leading-relaxed">
              Si estás en Madrid, te invito a conocer mi estudio en el centro
              histórico. Es el lugar donde nacen todas mis obras, un espacio
              lleno de luz, color y creatividad.
            </p>
            <div className="flex items-center justify-center space-x-2 text-amber-100">
              <MapPin className="h-5 w-5" />
              <span>Calle del Arte, 15 - Centro Histórico, Madrid</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-amber-50"
                asChild
              >
                <Link to="/contacto">Solicitar Visita</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600"
                asChild
              >
                <Link to="/galeria">Ver Obras Disponibles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 border-t border-stone-200 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-stone-800">
                Arte<span className="text-amber-600">Studio</span>
              </h3>
              <p className="text-stone-600">
                Arte original que transforma espacios y conecta emociones.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-stone-800">Navegación</h4>
              <div className="space-y-2">
                <Link
                  to="/galeria"
                  className="block text-stone-600 hover:text-stone-800"
                >
                  Galería
                </Link>
                <Link
                  to="/sobre-mi"
                  className="block text-stone-600 hover:text-stone-800"
                >
                  Sobre Mí
                </Link>
                <Link
                  to="/contacto"
                  className="block text-stone-600 hover:text-stone-800"
                >
                  Contacto
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-stone-800">Información</h4>
              <div className="space-y-2">
                <p className="text-stone-600">Envíos a toda España</p>
                <p className="text-stone-600">Garantía de autenticidad</p>
                <p className="text-stone-600">Devoluciones 30 días</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-stone-800">Contacto</h4>
              <div className="space-y-2">
                <p className="text-stone-600">elena@artestudio.com</p>
                <p className="text-stone-600">+34 123 456 789</p>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-200 mt-8 pt-8 text-center text-stone-600">
            <p>&copy; 2024 ArteStudio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <CartSidebar />
    </div>
  );
}
