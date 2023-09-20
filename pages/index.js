import { Fragment } from "react";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started With NextJS",
      image: "image.webp",
      excerpt:
        "NextJS is the react framework for production - it makes building fullstack React Apps",
      date: "2023-09-10",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Started With NextJS",
      image: "image.webp",
      excerpt:
        "NextJS is the react framework for production - it makes building fullstack React Apps",
      date: "2023-09-10",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Started With NextJS",
      image: "image.webp",
      excerpt:
        "NextJS is the react framework for production - it makes building fullstack React Apps",
      date: "2023-09-10",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting Started With NextJS",
      image: "image.webp",
      excerpt:
        "NextJS is the react framework for production - it makes building fullstack React Apps",
      date: "2023-09-10",
    },
  ];
  
function HomePage() {
  
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY} />
    </Fragment>
  );
}

export default HomePage;
