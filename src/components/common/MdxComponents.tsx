import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const MdxComponents = {
  Head: Head,
  Link: Link,
  Image: Image,
  img: (props: any) => (
    <Image
      height={530}
      width={1879}
      style={{ borderRadius: "10px" }}
      {...props}
    />
  ),
};

export default MdxComponents;
