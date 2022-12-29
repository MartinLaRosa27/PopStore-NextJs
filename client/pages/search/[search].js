import React from "react";
import Head from "next/head";
import { Product } from "../../components/Product";
import { products } from "../../database/Products";

// -------------------------------------------------------------
const Search = ({ similarProducts, search }) => {
  return (
    <div>
      {/* head */}
      <Head>
        <title>PopStore - {search}</title>
      </Head>

      {similarProducts.length > 0 ? (
        <div>
          {/* titulo */}
          <div className="products-heading">
            <h2>Resultados de la búsqueda de "{search}"</h2>
          </div>

          {/* resultados */}
          <div className="all-products-category">
            {similarProducts.map((product) => {
              return (
                <div className="elemento-category" key={product.id}>
                  <Product product={product} key={product.id} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="products-heading">
          {/* titulo */}
          <h2>No se encontraron resultados la búsqueda de "{search}"</h2>
        </div>
      )}
    </div>
  );
};

// -------------------------------------------------------------
export const getServerSideProps = ({ params }) => {
  const search = params.search;
  const similarProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.includes(search)) {
      similarProducts[similarProducts.length] = products[i];
    }
  }
  return {
    props: {
      search,
      similarProducts,
    },
  };
};

// -------------------------------------------------------------
export default Search;
