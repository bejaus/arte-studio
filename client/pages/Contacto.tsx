import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Palette,
  Eye,
  Calendar,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import CartSidebar from "@/components/CartSidebar";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6 text-amber-600" />,
    title: "Email",
    description: "elena@artestudio.com",
    action: "Enviar Email",
    href: "mailto:elena@artestudio.com",
  },
  {
    icon: <Phone className="h-6 w-6 text-amber-600" />,
    title: "Teléfono",
    description: "+34 123 456 789",
    action: "Llamar",
    href: "tel:+34123456789",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-amber-600" />,
    title: "WhatsApp",
    description: "+34 123 456 789",
    action: "Escribir",
    href: "https://wa.me/34123456789",
  },
  {
    icon: <Instagram className="h-6 w-6 text-amber-600" />,
    title: "Instagram",
    description: "@elena_artestudio",
    action: "Seguir",
    href: "https://instagram.com/elena_artestudio",
  },
];

const inquiryTypes = [
  { value: "artwork", label: "Consulta sobre una obra" },
  { value: "commission", label: "Encargo personalizado" },
  { value: "studio", label: "Visita al estudio" },
  { value: "exhibition", label: "Exposición o colaboración" },
  { value: "general", label: "Consulta general" },
];

const studioHours = [
  { day: "Lunes - Viernes", hours: "10:00 - 18:00" },
  { day: "Sábados", hours: "10:00 - 14:00" },
  { day: "Domingos", hours: "Cerrado" },
];

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { openCart, itemCount } = useCart();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  const isFormValid =
    formData.name && formData.email && formData.inquiryType && formData.message;

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
                <Link to="/contacto" className="text-amber-600 font-medium">
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
          <Badge
            variant="secondary"
            className="bg-amber-100 text-amber-800 border-amber-200 mb-4"
          >
            ✉️ Ponte en contacto
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            Hablemos de Arte
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta sobre mis obras? ¿Interesado en un encargo
            personalizado? Estoy aquí para ayudarte a encontrar la pieza
            perfecta para tu espacio.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-stone-800 mb-4">
                  Envíame un mensaje
                </h2>
                <p className="text-stone-600">
                  Completa el formulario y te responderé lo antes posible. Todas
                  las consultas son bienvenidas.
                </p>
              </div>

              {isSubmitted ? (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-green-700 mb-4">
                      Gracias por tu interés. Te responderé en las próximas 24
                      horas.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-green-300 text-green-700 hover:bg-green-100"
                    >
                      Enviar otro mensaje
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre completo *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            placeholder="Tu nombre"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            placeholder="tu@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono (opcional)</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            placeholder="+34 123 456 789"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">
                            Tipo de consulta *
                          </Label>
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) =>
                              handleInputChange("inquiryType", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona el tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Asunto (opcional)</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) =>
                            handleInputChange("subject", e.target.value)
                          }
                          placeholder="Breve resumen de tu consulta"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          placeholder="Cuéntame en qué puedo ayudarte..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-amber-600 hover:bg-amber-700"
                        disabled={!isFormValid || isSubmitting}
                      >
                        {isSubmitting ? (
                          "Enviando..."
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Enviar mensaje
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-stone-800 mb-6">
                  Otras formas de contacto
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactMethods.map((method, index) => (
                    <Card
                      key={index}
                      className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">{method.icon}</div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-stone-800">
                              {method.title}
                            </h3>
                            <p className="text-stone-600 text-sm mb-3">
                              {method.description}
                            </p>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-amber-600 border-amber-600 hover:bg-amber-50"
                              asChild
                            >
                              <a
                                href={method.href}
                                target={
                                  method.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  method.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                              >
                                {method.action}
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Studio Information */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-amber-600" />
                    <span>Estudio de Arte</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-2">
                      Dirección
                    </h4>
                    <p className="text-stone-600">
                      Calle del Arte, 15
                      <br />
                      Centro Histórico
                      <br />
                      28001 Madrid, España
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-stone-800 mb-3 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-amber-600" />
                      Horarios de atención
                    </h4>
                    <div className="space-y-2">
                      {studioHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-stone-600">{schedule.day}</span>
                          <span className="font-medium text-stone-800">
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200">
                    <p className="text-sm text-stone-600 mb-4">
                      ¿Te gustaría visitar mi estudio? Agenda una cita para
                      conocer el proceso creativo y ver las obras en persona.
                    </p>
                    <Button
                      className="w-full bg-amber-600 hover:bg-amber-700"
                      asChild
                    >
                      <a href="mailto:elena@artestudio.com?subject=Visita al estudio">
                        <Calendar className="mr-2 h-4 w-4" />
                        Agendar visita
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gradient-to-r from-amber-600 to-amber-700 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    ¿Necesitas ayuda rápida?
                  </h3>
                  <p className="text-amber-100 mb-4">
                    Respondo mensajes de WhatsApp durante el horario de estudio.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="bg-white text-amber-600 hover:bg-amber-50 flex-1"
                      asChild
                    >
                      <a href="https://wa.me/34123456789?text=Hola, tengo una consulta sobre tus obras">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-amber-600 flex-1"
                      asChild
                    >
                      <a href="tel:+34123456789">
                        <Phone className="mr-2 h-4 w-4" />
                        Llamar
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-stone-600">
              Respuestas a las consultas más comunes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Palette className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">
                      ¿Realizas encargos personalizados?
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Sí, acepto encargos personalizados. El proceso incluye una
                      consulta inicial, bocetos y seguimiento durante la
                      creación.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Eye className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">
                      ¿Puedo ver las obras antes de comprar?
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Por supuesto. Puedes visitar mi estudio con cita previa o
                      solicitar fotos adicionales de cualquier obra que te
                      interese.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">
                      ¿Realizan envíos a toda España?
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Sí, enviamos a toda España con embalaje profesional y
                      seguro. Envío gratuito en pedidos superiores a €500.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">
                      ¿Cuánto tiempo toma un encargo?
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Depende de la complejidad, pero generalmente entre 2-6
                      semanas. Te mantendré informado del progreso durante todo
                      el proceso.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
