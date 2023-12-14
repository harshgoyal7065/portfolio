import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Frontend Engineer"
              company="Josh Technology Group"
              companyLink="https://www.joshtechnologygroup.com/"
              time="Sep'23-Present"
              work="Worked with the JP Morgan & Chase Team to deliver microsites for their car-related business with VueJs, NodeJS and SSR with NuxtJS"
            />

            <Details
              position="Frontend Intern"
              company="Josh Technology Group"
              companyLink="https://www.joshtechnologygroup.com/"
              time="Mar'23 - Sep'23"
              work="Worked with the JP Morgan & Chase Team to deliver microsites for their car-related business with VueJs, NodeJS and SSR with NuxtJS"
            />

            <Details
              position="Software Developer Intern"
              company="Cardekho Rupyy"
              companyLink="https://www.rupyy.com/"
              time="Aug'22 - Jan'23"
              work="Worked on building microsite with help of PHP for the IDFC bank collaboration with Rupyy"
            />

            <Details
              position="Frontend Developer Intern"
              company="Kylo Apps"
              companyLink="https://kyloapps.com/"
              time="May'22 - Jun'22"
              work="Worked on frontend of 6 client companies improving their designs using React and Redux. Integrated REST APIs for 4 projects to complete the admin dashboard of the companies."
            />

            <Details
              position="Full Stack App Developer"
              company="Sprink.online"
              companyLink="https://www.sprink.online/"
              time="Jan'22 - Apr'22"
              work="Implemented the notifications and register user functionality using PHP and MySQL. Directed UI changes and integrated APIs for Order Screens using React Native and Redux Saga."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
