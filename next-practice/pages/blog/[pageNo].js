import React from "react";
import { useRouter } from "next/router";
import { Nav } from "../../components/Nav";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElen) => {
    return {
      params: {
        pageNo: curElen.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function pageNo({data}) {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    <>
      <Nav></Nav>

      <div className="blog-card" key={data.id}>
        <h3>{data.id}</h3>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    </>
  );
}
