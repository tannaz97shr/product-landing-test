"use client";

import { motion } from "framer-motion";
import { ICategoryItem } from "../../types/general";
import { CategoryItems } from "../Header/Menu";

const menuVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const FooterMenu = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={menuVariants}
      className="mt-12 text-sm font-bold tracking-wide uppercase flex flex-col items-center 
      md:flex-row"
    >
      <motion.a
        href={"/"}
        variants={itemVariants}
        whileHover={{ scale: 1.1, color: "#D87D4A" }}
        className="mb-4 hover:text-orange-dark"
      >
        Home
      </motion.a>

      {CategoryItems.map((item: ICategoryItem) => (
        <motion.a
          key={item.name}
          href={item.href}
          variants={itemVariants}
          whileHover={{ scale: 1.1, color: "#D87D4A" }}
          className="mb-4 md:ml-8 hover:text-orange-dark"
        >
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FooterMenu;
