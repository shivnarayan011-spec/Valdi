import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const trendingProducts = products.slice(4, 8);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-playfair)] text-gray-900 mb-6">
              Elevate Your Style
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover premium clothing and accessories crafted for the modern individual
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors font-medium text-lg"
              >
                Shop Now
              </Link>
              <Link
                href="/shop?category=women"
                className="bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-50 transition-colors font-medium text-lg border-2 border-gray-900"
              >
                New Arrivals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/shop?category=women"
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-pink-100 to-pink-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold font-[var(--font-playfair)] text-gray-900 mb-2">
                    Women
                  </h3>
                  <p className="text-gray-700 font-medium">Explore Collection</p>
                </div>
              </div>
            </Link>
            <Link
              href="/shop?category=men"
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-blue-100 to-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold font-[var(--font-playfair)] text-gray-900 mb-2">
                    Men
                  </h3>
                  <p className="text-gray-700 font-medium">Explore Collection</p>
                </div>
              </div>
            </Link>
            <Link
              href="/shop?category=accessories"
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-amber-100 to-amber-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold font-[var(--font-playfair)] text-gray-900 mb-2">
                    Accessories
                  </h3>
                  <p className="text-gray-700 font-medium">Explore Collection</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-[var(--font-playfair)] text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg">
              Handpicked selections from our latest collection
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-[var(--font-playfair)] text-gray-900 mb-4">
              Trending Now
            </h2>
            <p className="text-gray-600 text-lg">
              Most popular items this season
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold font-[var(--font-playfair)] mb-4">LUXE</h3>
              <p className="text-gray-400">
                Premium fashion for the modern individual
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/shop?category=women" className="hover:text-white transition-colors">Women</Link></li>
                <li><Link href="/shop?category=men" className="hover:text-white transition-colors">Men</Link></li>
                <li><Link href="/shop?category=accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Luxe Clothing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
