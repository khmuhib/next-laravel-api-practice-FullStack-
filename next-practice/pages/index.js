import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {Nav} from "../components/Nav";


export default function Home() {
  return (
    <div>
    <Nav></Nav>
    <Head>
      <title>index</title>
      <meta name="description" content="This is meta content"></meta>
      <meta name="keywords" content="html, css, java"></meta>
    </Head>
    <div style={{textAlign: "center"}}>
      <h1 className="aaa">This is Index</h1>
      <Image src='/pic.jpg' height="100" width="100" alt="img"></Image>
      {/* <Image src='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600' height="100" width="100" alt="image"></Image> */}

    </div>

    </div>
  );
}
