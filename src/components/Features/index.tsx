import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Fast & Reliable",
    desc: "Superfast performance with minimal load times.",
  },
  {
    id: 2,
    title: "User-Friendly",
    desc: "Easy-to-use interface designed for everyone.",
  },
  {
    id: 3,
    title: "Affordable",
    desc: "Best pricing for top-quality features.",
  },
];

const Features = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center p-6">
    {features.map((feature, index) => (
      <motion.div
        key={feature.id}
        className="bg-white p-4 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
      >
        <h3 className="text-xl font-semibold">{feature.title}</h3>
        <p className="text-gray-600 mt-2">{feature.desc}</p>
      </motion.div>
    ))}
  </div>
);

export default Features;
