import React from "react";
import Head from "next/head";
import { Product } from "../../components/Product";
import { brands } from "../../database/Brands";
import { products } from "../../database/Products";

// -------------------------------------------------------------
const Category = ({ brand, similarProducts }) => {
  return (
    <div>
      {/* head */}
      <Head>
        <title>PopStore - {brand.category}</title>
      </Head>

      {/* banner */}
      <div className="hero-banner-container">
        <img
          src={brand.image}
          alt={brand.category}
          title={brand.category}
          className="hero-banner-image"
        ></img>
      </div>

      {/* titulo */}
      <div className="products-heading">
        <h2>Todos los Productos</h2>
      </div>

      {/* productos */}
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
  );
};

// -------------------------------------------------------------
export const getServerSideProps = ({ params }) => {
  let brand = null;
  for (let i = 0; i < brands.length; i++) {
    if (brands[i].category === params.category) {
      brand = brands[i];
      break;
    }
  }
  const similarProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === params.category) {
      similarProducts[similarProducts.length] = products[i];
    }
  }
  if (brand === null) {
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }
  return {
    props: {
      brand,
      similarProducts,
    },
  };
};

// -------------------------------------------------------------
export default Category;
