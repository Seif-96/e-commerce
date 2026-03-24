import { getAllProducts } from '@/api/services/routemisr.service';
import ProdictCart from '@/app/_Components/Home/ProductCart/ProdictCart';
import React from 'react';
export default async function page() {
  const allProducts = await getAllProducts();
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 text-sm text-gray-500">Showing {allProducts?.length} products</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allProducts?.map((product) => (
            <ProdictCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
