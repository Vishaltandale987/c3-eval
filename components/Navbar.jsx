import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div
    style={{
        "display":"flex",
        "gap":"30px",
        "fontFamily":"sans-serif",
        "fontWeight":"bold",
        "fontSize":"25px",
        "padding":"10px",
        "backgroundColor":"black",
        "boxShadow":"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    }}>
      <h1>Navbar</h1>
      <Link href="/">
        <Button colorScheme='facebook'>Vishal Tandale</Button>
      </Link>
      <Link href="/experience">
        <Button colorScheme='facebook'>Experience</Button>
      </Link>
      <Link href="/project">
        <Button colorScheme='facebook'>Projects</Button>
      </Link>

 
    </div>
  );
}

export default Navbar;
