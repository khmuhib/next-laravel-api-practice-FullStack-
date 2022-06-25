import React from "react";
import { Nav } from "../components/Nav";
import Head from "next/head";

export default function about() {
  return (
    <div>
      <Nav />
      <Head>
        <title>About</title>
        <meta name="description" content="This is meta About content"></meta>
        <meta name="keywords" content="html, css, java, about"></meta>
      </Head>
      <h1 className="mmm">About</h1>

      <style jsx>
        {`
          .mmm {
            color: yellow;
          }
        `}
      </style>
    </div>
  );
}
