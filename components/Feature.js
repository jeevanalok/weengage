import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const pmsfeatures = [
  "Smart Room Management",
  "Easy Booking Management",
  "Centralized Guest Information",
  "Automated Billing & Payments",
  "Inventory Management",
];
const loyaltyfeatures = [
  "Personalized Offers based on guest preferences",
  "Real-time Rewards to enhance guest satisfaction",
  "Customizable Loyalty Tiers to keep guests coming back",
];

const channelfeatures = [
  "Real-Time Rate Updates",
  "Inventory Sync Across Platforms",
  "Maximized Occupancy",
  "Booking Engine",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black-600 leading-normal text-center">
        Features
      </h1>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p-2 y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-2" variants={scrollAnimation}>
            <Image
              src="/assets/pms.svg"
              alt="VPN Illustrasi"
              layout="responsive"
              
              quality={100}
              height={674}
              width={1200}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-start justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              Smart PMS
            </h3>
            <p className="my-2 text-black-500">
              Simplify your hotel's operations with a seamless, integrated
              Property Management System. Our PMS ensures smooth front and
              back-office processes, giving your team more time to focus on what
              matters – your guests.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8 hover:cursor-pointer">
              {pmsfeatures.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list my-5"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p-2 y-8 my-12 ">
        <ScrollAnimationWrapper className="md:order-first order-last">
          <motion.div
            className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12 "
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              AI-Powered Guest Rewards & Loyalty Platform
            </h3>
            <p className="my-2 text-black-500">
              Elevate your guest experience by offering personalized rewards and
              loyalty programs driven by cutting-edge AI technology. Our
              platform ensures each guest feels valued, encouraging repeat
              visits and long-term loyalty.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8 hover:cursor-pointer">
              {loyaltyfeatures.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list my-5"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/reward.jpg"
              alt="reward"
              layout="responsive"
              quality={100}
              height={544}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>

      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p-2 y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/analytics.svg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={514}
              width={800}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-start justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              Channel Manager
            </h3>
            <p className="my-2 text-black-500">
              Maximize your hotel’s visibility with our advanced Channel
              Management solution. We ensure your property is seamlessly
              connected across all major booking platforms, helping you stay
              ahead of the competition.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8 hover:cursor-pointer">
              {channelfeatures.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list my-5"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
