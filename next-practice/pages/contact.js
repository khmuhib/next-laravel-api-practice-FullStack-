import React from "react";
import {Nav} from "../components/Nav";
import contactStyles from '../styles/Contact.module.css'

export default function contact() {
  return (
    <div>
      <Nav></Nav>
      <h1 className={contactStyles.ppp}>Contact</h1>
    </div>
  );
}
