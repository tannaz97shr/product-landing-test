import { motion } from "framer-motion";

const features = [
  {
    title: "High-Fidelity Sound",
    description:
      "Experience immersive and crystal-clear audio for a premium listening experience.",
  },
  {
    title: "Premium Build Quality",
    description:
      "Crafted with durable, high-end materials for long-lasting use.",
  },
  {
    title: "Wireless & Long Battery Life",
    description:
      "Enjoy uninterrupted playback for hours with advanced battery technology.",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-[--color-grey-light] py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[--color-black] mb-8">
          Why Choose Our Headphones?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-[--color-white] rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[--color-black-light]">
                {feature.title}
              </h3>
              <p className="text-[--color-border-grey] mt-2">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
