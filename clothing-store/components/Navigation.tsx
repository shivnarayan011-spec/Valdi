'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function Navigation() {
  const { getCartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold font-[var(--font-playfair)] text-gray-900">
              LUXE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Shop
            </Link>
            <Link
              href="/shop?category=men"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Men
            </Link>
            <Link
              href="/shop?category=women"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Women
            </Link>
            <Link
              href="/shop?category=accessories"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Accessories
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Cart
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-gray-900"
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/shop?category=men"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Men
            </Link>
            <Link
              href="/shop?category=women"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Women
            </Link>
            <Link
              href="/shop?category=accessories"
              className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accessories
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
