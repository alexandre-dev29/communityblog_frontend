import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { BlurImage } from "@components/common/CustomImage";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const MdxComponents = {
  Head: Head,
  Link: Link,
  Image: Image,
  img: (props: any) => <BlurImage src={props.src} props={props} />,
};

export default MdxComponents;
