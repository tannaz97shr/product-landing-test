import { motion } from "framer-motion";
import { Button } from "../UI/Button";
import { P } from "../UI/Typography";

const HeroSection = () => {
  return (
    <div
      className="relative flex w-full h-[510px] bg-cover bg-center bg-no-repeat 
      md:h-[620px] lg:h-[650px]
      bg-[url('/assets/newProduct/mobile.jpg')] md:bg-[url('/assets/newProduct/tablet.jpg')] lg:bg-[url('/assets/newProduct/desktop.jpg')]"
    >
      {/* Background Animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      />

      <div className="relative flex flex-col m-auto items-center lg:items-start lg:ml-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm uppercase text-border-grey tracking-[10px]"
        >
          New Product
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white font-bold text-[36px] md:text-[56px] mt-4"
        >
          XX99 Mark II
          <br />
          HeadphoneS
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <P className="text-border-grey mt-6 text-center lg:text-left mx-6 max-w-80 lg:ml-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </P>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button href={`/products/xx99-mark-one-headphones`} className="mt-6">
            See Product
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
