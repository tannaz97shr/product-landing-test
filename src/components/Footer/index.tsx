import { motion } from "framer-motion";
import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
  LogoIcon,
} from "../UI/Icons";
import { P } from "../UI/Typography";
import FooterMenu from "./Menu";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black flex mt-auto text-white flex-col items-center 
      md:items-start md:pl-10 lg:px-40 w-full"
    >
      {/* Orange Top Border Animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-24 border-t-4 border-orange-dark origin-left"
      />

      <div className="lg:flex w-full lg:justify-between">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <LogoIcon className="mt-12 mx-auto md:ml-0" />
        </motion.div>

        <FooterMenu />
      </div>

      {/* Footer Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <P className="text-border-grey text-center md:text-start mt-10 mx-6 md:ml-0 lg:w-[540px]">
          Audiophile is an all-in-one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </P>
      </motion.div>

      {/* Copyright & Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="lg:relative mb-4 flex items-center flex-col mx-6 mt-10 
        md:flex-row md:justify-between md:w-full md:pr-6 md:ml-0"
      >
        <P className="text-border-grey text-center">
          Copyright 2021. All Rights Reserved
        </P>

        {/* Social Media Icons with Hover Scale Effect */}
        <div className="flex gap-4 mt-10 md:mt-0 lg:absolute lg:right-0 lg:top-[-50px]">
          {[
            { icon: <IconFacebook />, href: "#" },
            { icon: <IconInstagram />, href: "#" },
            { icon: <IconTwitter />, href: "#" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.2, color: "#D87D4A" }}
              whileTap={{ scale: 0.9 }}
              className="fill-white hover:fill-orange-dark"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
