import {Head} from "next/document";
import React from "react";
import {Nav} from "../../components/Nav";
import Link from "next/Link";

export const getStaticProps = async ()=> {
  const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json();

  return {
    props: {
      data,
    }
  }
}

export default function blog({data}) {
  return (
    <div>
      <Nav></Nav>
      {
        data.slice(0,5).map((curElen)=>{
          return (
            <div className="blog-card" key={curElen.id}>
              <h3>{curElen.id}</h3>
              <Link href={`/blog/${curElen.id}`}>
              <h2>{curElen.title}</h2>
              </Link>
              
            </div>
          )
        })
      }
    </div>
  );
}
