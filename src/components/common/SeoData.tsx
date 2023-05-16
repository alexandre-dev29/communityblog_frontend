import React from "react";
import { IPost } from "../../interfaces/posts";
import Head from "next/head";

import { FRONT_URL, SITE_NAME } from "../../constants/constants";

interface ISeoData {
  isAPost: boolean;
  postData?: IPost;
  siteDescription: string;
  authorOfTheSite: string;
}

const SeoData = ({
  isAPost,
  postData,
  siteDescription,
  authorOfTheSite,
}: ISeoData) => {
  const keywords = postData?.Tags.map((value) => value.tagName);
  return (
    <div>
      {/* if it is a post*/}
      {isAPost ? (
        <Head>
          <title>{`${postData?.postTitle} | by ${
            postData?.author.fullName
          } | ${new Date(
            `${postData?.publishedAt}`
          ).toUTCString()} | ${SITE_NAME}`}</title>
          <meta data-rh="true" charSet="utf-8" />
          <meta
            data-rh="true"
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=6"
          />
          <meta
            data-rh="true"
            property="og:site_name"
            content={`${SITE_NAME}`}
          />
          <meta name="keywords" content={`${keywords?.join(",")}`} />

          <meta
            name="robots"
            content="index,follow,max-image-preview:large"
            data-rh="true"
          />
          <meta name="referrer" content="unsafe-url" data-rh="true" />
          <meta property="og:type" content="article" data-rh="true" />
          <meta
            name="author"
            content={`${postData?.author.fullName}`}
            data-rh="true"
          />
          <meta
            property="twitter:title"
            content={`${postData?.postDescription}`}
            data-rh="true"
          />
          <meta name="twitter:site" content={`@${SITE_NAME}`} data-rh="true" />
          <meta
            property="twitter:description"
            content={`${postData?.postDescription}`}
            data-rh="true"
          />
          <meta
            name="twitter:image:src"
            content={`${postData?.postMainImage}`}
            data-rh="true"
          />
          <meta
            name="twitter:card"
            content="summary_large_image"
            data-rh="true"
          />
          <meta name="twitter:label1" content="Reading time" data-rh="true" />
          <meta
            name="twitter:data1"
            content={`${postData?.postReadTime} min read`}
            data-rh="true"
          />
          <meta
            name="twitter:tile:template:testing"
            content="2"
            data-rh="true"
          />
          <meta
            name="twitter:tile:image"
            content={`${postData?.postMainImage}`}
            data-rh="true"
          />
          <meta
            name="twitter:tile:info1:icon"
            content="Person"
            data-rh="true"
          />
          <meta
            name="twitter:tile:info1:text"
            content={`${postData?.author.fullName}`}
            data-rh="true"
          />
          <meta
            name="twitter:tile:info2:icon"
            content="Calendar"
            data-rh="true"
          />
          <meta
            name="twitter:tile:info2:text"
            content={`${new Date(`${postData?.publishedAt}`).toUTCString()}`}
            data-rh="true"
          />
          <meta
            name="twitter:cta"
            content={`Read on ${SITE_NAME}`}
            data-rh="true"
          />
          <meta
            property="article:published_time"
            content={`${postData?.publishedAt}`}
            data-rh="true"
          />
          <meta
            name="title"
            content={`${postData?.postTitle}`}
            data-rh="true"
          />
          <meta
            property="og:title"
            content={`${postData?.postTitle}`}
            data-rh="true"
          />
          <meta
            name="description"
            content={`${postData?.postDescription}`}
            data-rh="true"
          />
          <meta
            property="og:description"
            content={`${postData?.postDescription}`}
            data-rh="true"
          />
          <meta
            property="og:url"
            content={`${FRONT_URL}/post/${postData?.postSlug}`}
            data-rh="true"
          />
          <meta
            property="al:web:url"
            content={`${FRONT_URL}/post/${postData?.postSlug}`}
            data-rh="true"
          />
          <meta
            property="og:image"
            content={`${postData?.postMainImage}`}
            data-rh="true"
          />
          <meta
            property="article:author"
            content={`${FRONT_URL}/author/${postData?.author.id}`}
            data-rh="true"
          />
        </Head>
      ) : (
        <Head>
          <title>{SITE_NAME}</title>
          <meta name="description" content={`${siteDescription}`} />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=6"
          />
          <meta name="author" content={authorOfTheSite} />
        </Head>
      )}
    </div>
  );
};

export default SeoData;
