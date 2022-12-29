import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { BiSearchAlt2 } from "react-icons/bi";
import { MainBanner } from "../components/MainBanner";
import { Product } from "../components/Product";
import { FooterBanner } from "../components/FooterBanner";
import { products } from "../database/Products";
import { banner } from "../database/Banner";
import { footerBanner } from "../database/FooterBanner";

// -------------------------------------------------------------------
const Home = ({ banner }) => {
  // -------------------------------------------------------------------
  const [search, setSearch] = useState("");

  return (
    <>
      {/* head */}
      <Head>
        <title>PopStore - Home</title>
      </Head>
      {/* main banner */}
      <MainBanner banner={banner} />

      {/* informacion */}
      <div className="products-heading">
        <h2>Productos Principales</h2>
        <p>Las mejores marcas te esperan</p>
      </div>

      {/* buscador */}
      <div className="navbar-buscador">
        <input
          type="text"
          placeholder="Funko POP! WWE: Becky Lynch"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <Link href={`/search/${search}`}>
          <p>
            <BiSearchAlt2 />
          </p>
        </Link>
      </div>

      {/* productos */}
      <div className="products-container">
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>

      {/* footer banner */}
      <FooterBanner footerBanner={footerBanner} />
    </>
  );
};

// -------------------------------------------------------------------
export const getServerSideProps = () => {
  if (banner === null || footerBanner === null) {
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }
  return {
    props: {
      banner,
      footerBanner,
    },
  };
};

// -------------------------------------------------------------------
export default Home;
