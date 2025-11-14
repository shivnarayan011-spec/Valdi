'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const router = useRouter();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-[var(--font-playfair)] text-gray-900 mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-8">Add some items to get started</p>
          <Link
            href="/shop"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here. Thank you for shopping with us!');
    clearCart();
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold font-[var(--font-playfair)] text-gray-900 mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div
                    className="w-32 h-32 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: item.selectedColor }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-transparent to-black/10 rounded-lg" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <div>
                        <Link
                          href={`/product/${item.product.id}`}
                          className="text-lg font-semibold text-gray-900 hover:text-gray-700"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-gray-500 capitalize">{item.product.category}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Size:</span>
                        <span className="text-sm font-medium">{item.selectedSize}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Color:</span>
                        <div
                          className="w-5 h-5 rounded-full border border-gray-300"
                          style={{ backgroundColor: item.selectedColor }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                          className="w-8 h-8 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center"
                        >
                          −
                        </button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                          className="w-8 h-8 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-gray-500">
                            ${item.product.price.toFixed(2)} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold font-[var(--font-playfair)] text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{getCartTotal() >= 100 ? 'FREE' : '$10.00'}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>
                      ${(getCartTotal() + (getCartTotal() >= 100 ? 0 : 10) + getCartTotal() * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {getCartTotal() < 100 && (
                <div className="bg-blue-50 border border-blue-200 text-blue-800 text-sm px-4 py-3 rounded-md mb-6">
                  Add ${(100 - getCartTotal()).toFixed(2)} more for free shipping!
                </div>
              )}

              <button
                onClick={handleCheckout}
                className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors font-medium mb-3"
              >
                Proceed to Checkout
              </button>

              <Link
                href="/shop"
                className="block w-full text-center bg-white text-gray-900 py-3 rounded-md hover:bg-gray-50 transition-colors font-medium border-2 border-gray-900"
              >
                Continue Shopping
              </Link>

              <button
                onClick={clearCart}
                className="w-full text-center text-sm text-gray-500 hover:text-red-600 transition-colors mt-4"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
