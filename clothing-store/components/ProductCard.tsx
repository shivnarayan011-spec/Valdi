import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="aspect-square relative overflow-hidden" style={{ backgroundColor: product.image }}>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 group-hover:to-black/20 transition-all duration-300" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            <div className="flex gap-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
