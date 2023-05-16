import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Image } from "antd";

const MdxComponents = {
  Head: Head,
  Link: Link,
  Image: Image,
  img: (props: any) => <Image {...props} />,
};

export default MdxComponents;
