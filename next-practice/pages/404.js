import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function ErrorPage() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <h1>This is 404 page</h1>
      {/* <Link href="/">
        <a>Go To Home</a>
      </Link> */}
      <a onClick={() => router.push("/")}>Go to home</a>
    </div>
  );
}
