"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import headshot from "@/assets/images/Headshot.jpg";
import github from "@/assets/icons/github.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import { motion } from "motion/react";
import julee from "@/assets/images/julee.jpg";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="px-33 py-30">
        <div className="w-full h-121 flex justify-between items-center">
          {/* Introduction */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              {/* Animated Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }} // Start invisible and slightly offset
                animate={{ opacity: 1, x: 0 }} // Fade in and slide to final position
                transition={{ duration: 0.7, delay: 0.2 }} // Smooth timing and slight delay
              >
                <h1 className="text-5xl font-medium">
                  Hi, I'm{" "}
                  <span className="text-julee-blue font-bold">Justin Lee.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }} // Start invisible and slightly offset
                animate={{ opacity: 1, x: 0 }} // Fade in and slide to final position
                transition={{ duration: 0.7, delay: 0.4 }} // Smooth timing and slight delay
              >
                <h2 className="text-3xl text-julee-grey">
                  &mdash; front-end developer, cal student, dog and cat
                  enthusiast
                </h2>
              </motion.div>
            </div>

            {/* Social Media Links */}
            <motion.div
              className="flex gap-10"
              initial={{ opacity: 0, x: -50 }} // Start invisible and slightly offset
              animate={{ opacity: 1, x: 0 }} // Fade in and slide to final position
              transition={{ duration: 0.7, delay: 0.7 }} // Smooth timing and slight delay
            >
              {/* Social Media Icons */}
              <a href="https://github.com/jjstnlee" target="_blank">
                <Image src={github} alt="GitHub" width={62} height={62} />
              </a>
              <a href="https://www.linkedin.com/in/jjstnlee/" target="_blank">
                <Image src={linkedin} alt="LinkedIn" width={62} height={62} />
              </a>
            </motion.div>
          </div>

          {/* Headshot */}
          <Image
            src={julee}
            alt="julee"
            width={600}
            height={600}
            style={{ objectFit: "cover" }}
            className="w-[425px] h-[386px] rounded-2xl"
          />
        </div>
      </div>
    </>
  );
}
