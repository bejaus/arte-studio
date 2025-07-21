import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Palette } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
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
                <Link to="/galeria" className="text-stone-600 hover:text-stone-800 transition-colors">
                  Galería
                </Link>
                <Link to="/sobre-mi" className="text-stone-600 hover:text-stone-800 transition-colors">
                  Sobre Mí
                </Link>
                <Link to="/contacto" className="text-stone-600 hover:text-stone-800 transition-colors">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-amber-100 rounded-full">
                  <Palette className="h-12 w-12 text-amber-600" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-stone-800 mb-4">
                {title}
              </h1>
              
              <p className="text-lg text-stone-600 mb-8">
                {description}
              </p>
              
              <p className="text-stone-500 mb-8">
                Esta página está en construcción. Pronto estará disponible con contenido completo 
                para mejorar tu experiencia en ArteStudio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al Inicio
                  </Link>
                </Button>
                <Button variant="outline" className="border-stone-300 text-stone-700">
                  Contactar para Más Info
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-100 border-t border-stone-200 py-12 mt-20">
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
                <Link to="/galeria" className="block text-stone-600 hover:text-stone-800">Galería</Link>
                <Link to="/sobre-mi" className="block text-stone-600 hover:text-stone-800">Sobre Mí</Link>
                <Link to="/contacto" className="block text-stone-600 hover:text-stone-800">Contacto</Link>
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
    </div>
  );
}
