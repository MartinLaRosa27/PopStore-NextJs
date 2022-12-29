import React from "react";
import Head from "next/head";

const error = () => {
  return (
    <div className="error">
      <Head>
        <title>PopStore - ERRROR 404</title>
      </Head>
      <h1>ERROR 404 - No se pudo encontrar esta página</h1>
    </div>
  );
};

export default error;
