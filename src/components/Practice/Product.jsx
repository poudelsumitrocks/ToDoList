import React from "react";
import { productData } from "../../data";
import { Link } from "react-router";

export default function Product() {
  return (
    <div className="p-6 grid grid-cols-2 gap-6">
      {productData.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow">
          <Link to={`/product/${product.id}`}>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="truncate">{product.description}</p>
            <p className="font-bold">Price: ${product.price}</p>
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
