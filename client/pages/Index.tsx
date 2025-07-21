import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Heart, Star, ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import CartSidebar from "@/components/CartSidebar";

// Mock artwork data
const featuredArtworks = [
  {
    id: 1,
    title: "Abstracción Azul",
    price: 850,
    image: "/api/placeholder/400/500",
    category: "Pintura",
    rating: 5,
    isNew: true,
  },
  {
    id: 2,
    title: "Retrato en Óleo",
    price: 1200,
    image: "/api/placeholder/400/500",
    category: "Retrato",
    rating: 5,
    isNew: false,
  },
  {
    id: 3,
    title: "Paisaje Urbano",
    price: 675,
    image: "/api/placeholder/400/500",
    category: "Urbano",
    rating: 4,
    isNew: true,
  },
  {
    id: 4,
    title: "Naturaleza Muerta",
    price: 920,
    image: "/api/placeholder/400/500",
    category: "Clásico",
    rating: 5,
    isNew: false,
  },
];

export default function Index() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const { openCart, itemCount, addItem } = useCart();

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

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
                <Link
                  to="/sobre-mi"
                  className="text-stone-600 hover:text-stone-800 transition-colors"
                >
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
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-amber-100 text-amber-800 border-amber-200"
                >
                  ✨ Nuevas obras disponibles
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-stone-800 leading-tight">
                  Arte que
                  <span className="block text-amber-600">Transforma</span>
                  Espacios
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed">
                  Descubre una colección única de obras de arte originales, cada
                  una creada con pasión y dedicación para dar vida a tus
                  espacios.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Explorar Galería
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-stone-300 text-stone-700"
                >
                  Conoce al Artista
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-stone-600">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-stone-800">50+</span>
                  <span>Obras disponibles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-stone-800">
                    100%
                  </span>
                  <span>Originales</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"></div>
                  <div className="aspect-[3/4] bg-gradient-to-br from-stone-200 to-stone-300 rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"></div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="aspect-[3/4] bg-gradient-to-br from-stone-300 to-stone-400 rounded-2xl shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300"></div>
                  <div className="aspect-[3/4] bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-stone-50/20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Obras Destacadas
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Una selección cuidadosa de las piezas más populares y recientes de
              la colección
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtworks.map((artwork) => (
              <Card
                key={artwork.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <div className="aspect-[3/4] bg-gradient-to-br from-stone-200 to-stone-300"></div>
                  {artwork.isNew && (
                    <Badge className="absolute top-3 left-3 bg-amber-600 text-white">
                      Nuevo
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm ${
                      favorites.includes(artwork.id)
                        ? "bg-red-100 text-red-600"
                        : "bg-white/80 text-stone-600 hover:text-red-600"
                    }`}
                    onClick={() => toggleFavorite(artwork.id)}
                  >
                    <Heart
                      className={`h-4 w-4 ${favorites.includes(artwork.id) ? "fill-current" : ""}`}
                    />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {artwork.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        {[...Array(artwork.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="font-semibold text-stone-800 group-hover:text-amber-600 transition-colors">
                      {artwork.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-stone-800">
                        €{artwork.price.toLocaleString()}
                      </span>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-amber-600 hover:bg-amber-50 p-2"
                        >
                          Ver
                        </Button>
                        <Button
                          size="sm"
                          className="bg-amber-600 hover:bg-amber-700 text-white p-2"
                          onClick={() => addItem({
                            id: artwork.id,
                            title: artwork.title,
                            price: artwork.price,
                            image: artwork.image,
                            category: artwork.category
                          })}
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50"
            >
              Ver Toda la Galería
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Sobre el Artista
              </h2>
              <p className="text-lg text-stone-300 leading-relaxed">
                Con más de 15 años de experiencia en el mundo del arte, cada
                obra refleja una pasión profunda por la creatividad y la
                expresión única. Especializado en técnicas mixtas y estilos
                contemporáneos.
              </p>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-amber-400">15+</div>
                  <div className="text-stone-400">Años de experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-400">200+</div>
                  <div className="text-stone-400">Obras creadas</div>
                </div>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700">
                Conoce Mi Historia
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl shadow-2xl transform rotate-3"></div>
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
                <p className="text-stone-600">info@artestudio.com</p>
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
