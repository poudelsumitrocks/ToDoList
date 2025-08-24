import React from "react";
import { productData } from "../data";
import { useParams } from "react-router";

export default function ProductDetails() {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id));
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-64 h-64" />
      <p className="text-lg">{product.description}</p>
      <p className="text-xl font-bold">Price: ${product.price}</p>

    </div>
  );
}
