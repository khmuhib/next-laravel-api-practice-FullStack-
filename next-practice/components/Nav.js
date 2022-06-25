import React from "react";
import Link from "next/Link";

export const Nav = () => {
  return (
    <div>
      <nav>
        <ul className="menu-bar">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog (server Site Data Rander)</Link>
          </li>
          <li>
            <Link href="/person">User (server Site Data Rander)</Link>
          </li>
          <li>
            <Link href="/student">Student (Client Site Data Rander)</Link>
          </li>
          <li>
            <Link href="/users">My Data (Internal File Data Load)</Link>
          </li>
          <li>
            <Link href="/test">My Own API</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
