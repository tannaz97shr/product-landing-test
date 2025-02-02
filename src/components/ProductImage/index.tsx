import { motion } from "framer-motion";

const ProductImage = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="flex justify-center"
  >
    <img
      src="/product-image.jpg"
      alt="Product"
      className="max-w-sm sm:max-w-md md:max-w-lg w-full rounded-lg shadow-lg"
    />
  </motion.div>
);

export default ProductImage;
