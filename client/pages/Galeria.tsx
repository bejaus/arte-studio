import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ShoppingBag,
  Heart,
  Star,
  Search,
  Filter,
  ShoppingCart,
  SlidersHorizontal,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import CartSidebar from "@/components/CartSidebar";

// Extended artwork data for gallery
const galleryArtworks = [
  {
    id: 1,
    title: "Abstracción Azul",
    price: 850,
    image: "/api/placeholder/400/500",
    category: "Pintura",
    technique: "Acrílico",
    size: "60x80 cm",
    year: 2024,
    rating: 5,
    isNew: true,
    isAvailable: true,
  },
  {
    id: 2,
    title: "Retrato en Óleo",
    price: 1200,
    image: "/api/placeholder/400/500",
    category: "Retrato",
    technique: "Óleo",
    size: "40x50 cm",
    year: 2023,
    rating: 5,
    isNew: false,
    isAvailable: true,
  },
  {
    id: 3,
    title: "Paisaje Urbano",
    price: 675,
    image: "/api/placeholder/400/500",
    category: "Urbano",
    technique: "Mixta",
    size: "70x50 cm",
    year: 2024,
    rating: 4,
    isNew: true,
    isAvailable: true,
  },
  {
    id: 4,
    title: "Naturaleza Muerta",
    price: 920,
    image: "/api/placeholder/400/500",
    category: "Clásico",
    technique: "Óleo",
    size: "50x60 cm",
    year: 2023,
    rating: 5,
    isNew: false,
    isAvailable: true,
  },
  {
    id: 5,
    title: "Expresión Moderna",
    price: 1100,
    image: "/api/placeholder/400/500",
    category: "Abstracto",
    technique: "Acrílico",
    size: "80x60 cm",
    year: 2024,
    rating: 4,
    isNew: true,
    isAvailable: true,
  },
  {
    id: 6,
    title: "Retrato Femenino",
    price: 1350,
    image: "/api/placeholder/400/500",
    category: "Retrato",
    technique: "Óleo",
    size: "45x60 cm",
    year: 2023,
    rating: 5,
    isNew: false,
    isAvailable: false,
  },
  {
    id: 7,
    title: "Composición Geométrica",
    price: 780,
    image: "/api/placeholder/400/500",
    category: "Abstracto",
    technique: "Acrílico",
    size: "60x60 cm",
    year: 2024,
    rating: 4,
    isNew: false,
    isAvailable: true,
  },
  {
    id: 8,
    title: "Paisaje Marino",
    price: 950,
    image: "/api/placeholder/400/500",
    category: "Paisaje",
    technique: "Óleo",
    size: "70x50 cm",
    year: 2023,
    rating: 5,
    isNew: false,
    isAvailable: true,
  },
  {
    id: 9,
    title: "Texturas Urbanas",
    price: 650,
    image: "/api/placeholder/400/500",
    category: "Urbano",
    technique: "Mixta",
    size: "50x70 cm",
    year: 2024,
    rating: 4,
    isNew: true,
    isAvailable: true,
  },
  {
    id: 10,
    title: "Bodegón Clásico",
    price: 890,
    image: "/api/placeholder/400/500",
    category: "Clásico",
    technique: "Óleo",
    size: "60x45 cm",
    year: 2023,
    rating: 5,
    isNew: false,
    isAvailable: true,
  },
  {
    id: 11,
    title: "Forma y Color",
    price: 720,
    image: "/api/placeholder/400/500",
    category: "Abstracto",
    technique: "Acrílico",
    size: "55x75 cm",
    year: 2024,
    rating: 4,
    isNew: true,
    isAvailable: true,
  },
  {
    id: 12,
    title: "Montañas al Atardecer",
    price: 1050,
    image: "/api/placeholder/400/500",
    category: "Paisaje",
    technique: "Óleo",
    size: "80x60 cm",
    year: 2023,
    rating: 5,
    isNew: false,
    isAvailable: true,
  },
];

const categories = ["Todos", "Pintura", "Retrato", "Urbano", "Clásico", "Abstracto", "Paisaje"];
const techniques = ["Todas", "Óleo", "Acrílico", "Mixta"];
const sortOptions = [
  { value: "newest", label: "Más Recientes" },
  { value: "oldest", label: "Más Antiguos" },
  { value: "price-low", label: "Precio: Menor a Mayor" },
  { value: "price-high", label: "Precio: Mayor a Menor" },
  { value: "rating", label: "Mejor Valorados" },
];

export default function Galeria() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedTechnique, setSelectedTechnique] = useState("Todas");
  const [sortBy, setSortBy] = useState("newest");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  
  const { openCart, itemCount, addItem } = useCart();

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  // Filter and sort artworks
  const filteredArtworks = useMemo(() => {
    let filtered = galleryArtworks.filter((artwork) => {
      const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artwork.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Todos" || artwork.category === selectedCategory;
      const matchesTechnique = selectedTechnique === "Todas" || artwork.technique === selectedTechnique;
      const matchesAvailability = !showAvailableOnly || artwork.isAvailable;

      return matchesSearch && matchesCategory && matchesTechnique && matchesAvailability;
    });

    // Sort artworks
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.year - a.year;
        case "oldest":
          return a.year - b.year;
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedTechnique, sortBy, showAvailableOnly]);

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
                  className="text-amber-600 font-medium"
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
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            Galería de Arte
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Explora nuestra colección completa de obras originales. Encuentra la pieza perfecta 
            que transformará tu espacio.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white/80 border-b border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 h-4 w-4" />
              <Input
                placeholder="Buscar obras de arte..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="h-4 w-4 text-stone-600" />
                <span className="text-sm font-medium text-stone-600">Filtros:</span>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTechnique} onValueChange={setSelectedTechnique}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Técnica" />
                </SelectTrigger>
                <SelectContent>
                  {techniques.map((technique) => (
                    <SelectItem key={technique} value={technique}>
                      {technique}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant={showAvailableOnly ? "default" : "outline"}
                size="sm"
                onClick={() => setShowAvailableOnly(!showAvailableOnly)}
                className={showAvailableOnly ? "bg-amber-600 hover:bg-amber-700" : ""}
              >
                Solo Disponibles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-4 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-stone-600">
            Mostrando <span className="font-medium text-stone-800">{filteredArtworks.length}</span> 
            {filteredArtworks.length === 1 ? ' obra' : ' obras'}
            {searchTerm && (
              <span> para "<span className="font-medium text-stone-800">{searchTerm}</span>"</span>
            )}
          </p>
        </div>
      </section>

      {/* Artwork Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArtworks.length === 0 ? (
            <div className="text-center py-16">
              <div className="p-4 bg-stone-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="h-8 w-8 text-stone-400" />
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-2">
                No se encontraron obras
              </h3>
              <p className="text-stone-600 mb-4">
                Intenta ajustar los filtros o términos de búsqueda
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Todos");
                  setSelectedTechnique("Todas");
                  setShowAvailableOnly(false);
                }}
                variant="outline"
              >
                Limpiar Filtros
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArtworks.map((artwork) => (
                <Card 
                  key={artwork.id} 
                  className={`group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    !artwork.isAvailable ? 'opacity-75' : ''
                  }`}
                >
                  <div className="relative">
                    <div className="aspect-[3/4] bg-gradient-to-br from-stone-200 to-stone-300"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {artwork.isNew && (
                        <Badge className="bg-amber-600 text-white">
                          Nuevo
                        </Badge>
                      )}
                      {!artwork.isAvailable && (
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          Vendido
                        </Badge>
                      )}
                    </div>

                    {/* Heart Button */}
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
                    <div className="space-y-3">
                      {/* Category and Rating */}
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

                      {/* Title */}
                      <h3 className="font-semibold text-stone-800 group-hover:text-amber-600 transition-colors">
                        {artwork.title}
                      </h3>

                      {/* Details */}
                      <div className="text-sm text-stone-600 space-y-1">
                        <p>{artwork.technique} • {artwork.size}</p>
                        <p>{artwork.year}</p>
                      </div>

                      {/* Price and Actions */}
                      <div className="flex items-center justify-between pt-2">
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
                          {artwork.isAvailable && (
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
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 border-t border-stone-200 py-12 mt-16">
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
