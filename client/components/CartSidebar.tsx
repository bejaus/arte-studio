import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CartSidebar() {
  const {
    items,
    isOpen,
    total,
    itemCount,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-200">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-amber-600" />
              <h2 className="text-lg font-semibold text-stone-800">
                Carrito de Compras
              </h2>
              {itemCount > 0 && (
                <Badge className="bg-amber-600 text-white">{itemCount}</Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeCart}
              className="p-2 hover:bg-stone-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              /* Empty Cart */
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <div className="p-4 bg-stone-100 rounded-full mb-4">
                  <ShoppingBag className="h-12 w-12 text-stone-400" />
                </div>
                <h3 className="text-lg font-medium text-stone-800 mb-2">
                  Tu carrito está vacío
                </h3>
                <p className="text-stone-600 mb-6">
                  Descubre nuestra colección de arte y añade las obras que más
                  te gusten
                </p>
                <Button
                  onClick={closeCart}
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  Explorar Galería
                </Button>
              </div>
            ) : (
              /* Cart Items */
              <div className="p-6 space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="border border-stone-200">
                    <CardContent className="p-4">
                      <div className="flex space-x-4">
                        {/* Artwork Image */}
                        <div className="w-20 h-24 bg-gradient-to-br from-stone-200 to-stone-300 rounded-lg flex-shrink-0" />

                        {/* Item Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-stone-800 truncate">
                            {item.title}
                          </h4>
                          <p className="text-sm text-stone-600">
                            {item.category}
                          </p>
                          <p className="text-lg font-semibold text-stone-800 mt-1">
                            €{item.price.toLocaleString()}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-2 mt-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Clear Cart Button */}
                {items.length > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearCart}
                    className="w-full text-red-600 border-red-200 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Vaciar Carrito
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Footer with Total and Checkout */}
          {items.length > 0 && (
            <div className="border-t border-stone-200 p-6 bg-stone-50">
              <div className="space-y-4">
                {/* Total */}
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span className="text-stone-800">Total:</span>
                  <span className="text-amber-600">
                    €{total.toLocaleString()}
                  </span>
                </div>

                {/* Checkout Buttons */}
                <div className="space-y-2">
                  <Button
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    size="lg"
                    asChild
                  >
                    <Link to="/checkout" onClick={closeCart}>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Proceder al Pago
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-stone-300 text-stone-700"
                    onClick={closeCart}
                  >
                    Continuar Comprando
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Security Note */}
                <p className="text-xs text-stone-500 text-center">
                  Pago seguro • Envío gratuito en pedidos superiores a €500
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
