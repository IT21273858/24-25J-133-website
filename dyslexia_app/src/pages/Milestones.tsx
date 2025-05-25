
import { motion } from "framer-motion";

const milestones = [
  { title: "Project Proposal", date: "Jan 2024", marks: "10%" },
  { title: "Progress Presentation 1", date: "March 2024", marks: "15%" },
  { title: "Progress Presentation 2", date: "May 2024", marks: "15%" },
  { title: "Final Assessment", date: "July 2024", marks: "50%" },
  { title: "Viva", date: "July 2024", marks: "10%" },
];

const Milestones = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto h-screen text-black">
      <h1 className="text-3xl font-semibold mb-6 text-blue-600">Project Milestones</h1>
      <div className="grid gap-4">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            className="border p-4 rounded-lg shadow bg-white"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h2 className="text-xl font-semibold">{m.title}</h2>
            <p>Date: {m.date}</p>
            <p>Marks: {m.marks}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
