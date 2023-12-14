import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/blog-1.png";
import blog2 from "../../public/images/articles/blog-2.png";
import blog3 from "../../public/images/articles/blog-3.png";
import blog4 from "../../public/images/articles/blog-4.png";
import blog5 from "../../public/images/articles/blog-5.png";
import blog6 from "../../public/images/articles/blog-6.png";
import blog7 from "../../public/images/articles/blog-7.png";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li
      className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light"
    >
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Simple Portfolio Built with Nextjs | Articles Page</title>
        <meta
          name="description"
          content="I am Harsh Goyal, excited to showcase my work in front of you"
        />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change the World!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={blog1}
              title="Accessible Websites: Too simple yet too complex"
              time="3 min read"
              summary="Let's take a step towards inclusive applications and dive deeper into accessibility. Click to know more about accessibility."
              link="https://coderthatwrites.hashnode.dev/accessible-websites-too-simple-yet-too-complex"
            />

            <FeaturedArticle
              img={blog2}
              title="Add SSL to your AWS EC2 Node.js backend giving it a subdomain"
              time="4 min read"
              summary="With all the expertise in development, you never know the kind of errors you might ran into by not properly deploying your code. Hosting can be tough especially with the lack of resources or the knowledge of it. We will try to get behind the hosting steps to figure out a way to secure your hosted EC2 backend along with giving it a subdomain. "
              link="https://coderthatwrites.hashnode.dev/add-ssl-to-your-aws-ec2-nodejs-backend-giving-it-a-subdomain"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            All Articles
          </h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="Redux Reducer: Making the actions work"
              img={blog4}
              date="November 16, 2021"
              link="https://coderthatwrites.hashnode.dev/redux-reducers"
            />
            <Article
              title="Redux Actions: Beginner's Guide"
              img={blog3}
              date="November 14, 2021"
              link="https://coderthatwrites.hashnode.dev/redux-actions-beginners-guide"
            />
            <Article
              title="5 console.log() tips: Not plain and boring anymore"
              img={blog5}
              date="November 13, 2021"
              link="https://coderthatwrites.hashnode.dev/5-consolelog-tips-not-plain-and-boring-anymore"
            />
            <Article
              title="Cool Javascript Tricks to Speed Up Your Work"
              img={blog6}
              date="November 9, 2021"
              link="https://coderthatwrites.hashnode.dev/javascript-tricks"
            />
            <Article
              title="Binary Search: How Finding Pages Of a Book Makes a Great Algorithm"
              img={blog7}
              date="November 7, 2021"
              link="https://coderthatwrites.hashnode.dev/binary-search-how-finding-pages-of-a-book-makes-a-great-algorithm"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
