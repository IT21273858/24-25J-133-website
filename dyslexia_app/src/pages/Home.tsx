
import { motion } from "framer-motion";
import heroImage from "../assets/pexels-tirachard.jpg";

const Home = () => {
  return (
    <div className="relative text-white h-[80vh] flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="bg-gray-500 opacity-40 absolute inset-0"></div>
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">Empowering Dyslexic Learners</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Our AI-powered mobile solution transforms the learning journey for children with dyslexia, improving reading, memory, and visual processing skills.
        </p>
        <a href="/about" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow-lg">
          Learn More
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
