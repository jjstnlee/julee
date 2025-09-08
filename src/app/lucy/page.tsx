"use client";

import Navbar from "@/components/Navbar";
import { motion } from "motion/react";
import paw from "@/assets/icons/paw.svg";
import Image from "next/image";
import lucy1 from "@/assets/images/lucy1.jpg";
import lucy2 from "@/assets/images/lucy2.jpg";
import lucy3 from "@/assets/images/lucy3.jpg";
import lucy4 from "@/assets/images/lucy4.jpg";
import lucy5 from "@/assets/images/lucy5.jpg";
import lucy6 from "@/assets/images/lucy6.jpg";
import lucy7 from "@/assets/images/lucy7.jpg";
import lucy8 from "@/assets/images/lucy8.jpg";
import lucy9 from "@/assets/images/lucy9.jpg";
import lucy10 from "@/assets/images/lucy10.jpg";
import lucy11 from "@/assets/images/lucy11.jpg";
import lucy12 from "@/assets/images/lucy12.jpg";

const lucyPhotos = [
  lucy1,
  lucy2,
  lucy3,
  lucy4,
  lucy5,
  lucy6,
  lucy7,
  lucy8,
  lucy9,
  lucy10,
  lucy11,
  lucy12,
];

export default function LucyPage() {
  return (
    <>
      <Navbar />

      <div className="px-33 py-40 flex flex-col gap-13">
        <div className="flex flex-col gap-4">
          {/* Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Start invisible and slightly offset
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to final position
            transition={{ duration: 0.7, delay: 0.2 }} // Smooth timing and slight delay
          >
            <h1 className="text-5xl font-medium flex gap-4">
              Meet <span className="text-julee-blue font-bold">Lucy</span>
              <Image src={paw} alt="paw" width={47} height={47} />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }} // Start invisible and slightly offset
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to final position
            transition={{ duration: 0.7, delay: 0.4 }} // Smooth timing and slight delay
          >
            <h2 className="text-3xl text-julee-grey">my best friend.</h2>
          </motion.div>
        </div>

        {/* Photo Gallery */}
        <div className="flex flex-wrap gap-5">
          {lucyPhotos.map((photo, index) => (
            <Image
              key={index}
              src={photo}
              alt={`Lucy ${index + 1}`}
              width={500}
              height={600}
              className="w-[23%] h-fit object-scale-down rounded-2xl"
            />
          ))}
        </div>
      </div>
    </>
  );
}
