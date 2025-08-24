import React from "react";
import { useSearchParams } from "react-router";
import { productData, SearchData } from "../data";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || " ";


  const filteredProducts = productData.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
  );


  const filteredSites = SearchData.filter(
    (item) =>
      item.domain.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Search Results for: <span className="text-blue-600">{query}</span>
      </h1>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Product Results</h2>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="my-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <img
                src={item.image}
                alt={item.name}
                className="w-64 h-48 object-cover"
              />
              <p className="font-bold mt-2">Price: ${item.price}</p>
            </div>
          ))
        ) : (
          <p>No product data found</p>
        )}
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Site Results</h2>
        {filteredSites.length > 0 ? (
          filteredSites.map((site) => (
            <div key={site.id} className="my-4">
              <h3 className="text-xl font-semibold">{site.domain}</h3>
              <p className="text-gray-600 hover:underline hover:text-blue-600" >{site.url}</p>
              <p className="font-bold mt-2 text-gray-600">Description: {site.description}</p>
            </div>
          ))
        ) : (
          <p>No site data found</p>
        )}
      </section>
    </div>
  );
}
