import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductListingPage = () => {
  return (
    <div className="flex gap-8">    
      <aside className="w-1/4">
        <div className="p-4 border rounded-lg bg-gray-50 h-full">
            <h2 className="text-xl font-bold">Hot Deals</h2>            
        </div>
      </aside>


      <section className="w-3/4">
        <div className="bg-blue-300 h-64 mb-8 rounded-lg"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductListingPage;