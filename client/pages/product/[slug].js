import React, { useState } from "react";
import Head from "next/head";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "../../components/Product";
import { useStateContext } from "../../context/StateContext";
import { products } from "../../database/Products";

// ------------------------------------------------------------
const productDetails = ({ selectedProduct, similarProducts }) => {
  // ------------------------------------------------------------
  const { incrQty, decrQty, qty, onAdd, finalizarCompra } = useStateContext();

  // ------------------------------------------------------------
  const [index, setIndex] = useState(0);

  // ------------------------------------------------------------
  const finCompra = (product) => {
    onAdd(product, qty);
    finalizarCompra();
  };

  // ------------------------------------------------------------
  return (
    <div>
      {/* head */}
      <Head>
        <title>PopStore - {selectedProduct.name}</title>
      </Head>

      {/* info del producto */}
      <div className="product-detail-container">
        <div>
          {/* img */}
          <div className="image-container">
            <img
              src={`${selectedProduct.image[index]}`}
              title={selectedProduct.name}
              alt={selectedProduct.name}
            ></img>
          </div>

          {/* todas las img */}
          <div className="small-images-container">
            {selectedProduct.image.map((img, i) => {
              return (
                <div className="small-image" key={i}>
                  <img src={`${img}`} onMouseEnter={() => setIndex(i)}></img>
                </div>
              );
            })}
          </div>
        </div>

        {/* informacion */}
        <div className="product-detail-desc">
          {/* titulo */}
          <h1>{selectedProduct.name}</h1>
          {/* calificcacion */}
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          {/* detalles */}
          <h4>Detalles: </h4>
          <p>{selectedProduct.details}</p>
          {/* precio */}
          <p className="price">USD {selectedProduct.price}</p>
          {/* cantidad */}
          <div className="quantity-desc">
            <h3>Cantidad: </h3>
            <span className="minus" onClick={() => decrQty()}>
              <AiOutlineMinus />
            </span>
            <span className="num">{qty}</span>
            <span className="plus" onClick={() => incrQty()}>
              <AiOutlinePlus />
            </span>
          </div>
          {/* acciones */}
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(selectedProduct, qty)}
            >
              Agregar al Carrito
            </button>
            <button
              type="button"
              className="buy-now"
              onClick={() => finCompra(selectedProduct)}
            >
              Comprar Ahora
            </button>
          </div>
        </div>
      </div>

      {/* productos similares */}
      <div className="maylike-products-wrapper">
        <h2>Productos Similares</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {similarProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------------------------------------------------------
export const getServerSideProps = ({ params }) => {
  let selectedProduct = null;
  params.slug = parseInt(params.slug);
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === params.slug) {
      selectedProduct = products[i];
      break;
    }
  }
  if (selectedProduct === null) {
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }
  const similarProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === selectedProduct.category) {
      similarProducts[similarProducts.length] = products[i];
    }
  }
  if (similarProducts === null) {
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }
  return {
    props: {
      selectedProduct,
      similarProducts,
    },
  };
};

// ------------------------------------------------------------
export default productDetails;
