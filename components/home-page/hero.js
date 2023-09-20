import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/my-image.jpeg"
          alt="My image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Oratile Mokgoatlheng</h1>
      <p>Welcome to my Software Engineering portfolio!</p>
    </section>
  );
}
export default Hero;
