import React from "react";
import Link from "next/link";

export const Product = ({ product }) => {
  return (
    <div>
      <Link href={`/product/${product.id}`}>
        <div className="product-card">
          <img
            src={`${product.image}`}
            width={250}
            height={250}
            className="product-image"
            alt={product.name}
            title={product.name}
          ></img>
          <p className="product-name">{product.name}</p>
          <p className="product-price">USD {product.price}</p>
        </div>
      </Link>
    </div>
  );
};
