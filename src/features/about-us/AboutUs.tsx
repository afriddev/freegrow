import HomeFooter from "@/apputils/HomeFooter";
import HomeNavBar from "@/apputils/HomeNavbar";
import PageTransitionWrapper from "@/apputils/PageTransitionWrapper";
import { motion } from "framer-motion";
import {
  FaRegLightbulb,
  FaUserTie,
  FaHandsHelping,
  FaRegHeart,
  FaCheckCircle,
} from "react-icons/fa"; // Added more icons for potential use or replacement
import { useNavigate } from "react-router-dom";

// Consider using slightly more distinct icons or colors if needed
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Co-Founder",
    bio: "John spearheads FreeGrow’s mission, leveraging a decade of tech leadership to drive innovation and growth.",
    icon: <FaUserTie className="text-indigo-600 w-8 h-8" />, // Slightly adjusted color
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    bio: "Jane crafts intuitive user experiences, blending UX expertise with strategic vision.",
    icon: <FaHandsHelping className="text-green-600 w-8 h-8" />, // Slightly adjusted color
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    bio: "Mike builds FreeGrow’s robust platform, ensuring scalability and performance with deep technical expertise.",
    icon: <FaRegLightbulb className="text-yellow-600 w-8 h-8" />, // Slightly adjusted color
  },
];

const values = [
  {
    title: "Empathy",
    icon: <FaRegHeart className="text-pink-500 w-10 h-10" />,
    description:
      "We prioritize understanding and supporting the unique needs of every user.",
  },
  {
    title: "Innovation",
    icon: <FaRegLightbulb className="text-yellow-500 w-10 h-10" />,
    description:
      "We continuously evolve to deliver cutting-edge solutions for work and collaboration.",
  },
  {
    title: "Collaboration",
    icon: <FaHandsHelping className="text-green-500 w-10 h-10" />,
    description: "We create a space where shared goals drive mutual success.",
  },
  {
    title: "Integrity",
    // Using a different icon for Integrity for better visual distinction
    icon: <FaCheckCircle className="text-blue-500 w-10 h-10" />,
    description:
      "Trust and transparency guide every interaction on our platform.",
  },
];

// Framer Motion Variants for animations
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger animation for child elements
      delayChildren: 0.2,
    },
  },
};

const gridItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <PageTransitionWrapper>
      <div className="flex flex-col ">
        <HomeNavBar />
        <div className="bg-gradient-to-b  to-indigo-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
          {/* Hero Section - More visually engaging */}
          <motion.section
            className="max-w-5xl mx-auto text-center mb-24"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-800 mb-6 font-montserrat tracking-tight">
              About <span className="text-purple-600">FreeGrow</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-roboto leading-relaxed">
              Empowering seamless connections between freelancers, employees,
              clients, and employers on a secure, transparent platform built for
              collaboration and success.
            </p>
          </motion.section>

          {/* Mission Section - Clean and focused */}
          <motion.section
            className="max-w-5xl mx-auto text-center mb-24 bg-white p-10 md:p-12 rounded-xl "
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible" // Animate when scrolled into view
            viewport={{ once: true, amount: 0.3 }} // Trigger animation once, when 30% visible
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-5 font-montserrat">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-roboto leading-relaxed">
              We are dedicated to transforming how work happens by bridging
              talent and opportunity. Our platform fosters trust, transparency,
              and growth for everyone involved.
            </p>
          </motion.section>

          {/* Values Section - Enhanced card design and staggered animation */}
          <motion.section
            className="max-w-7xl mx-auto mb-24"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-12 text-center font-montserrat">
              Our Core Values
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={gridContainerVariants} // Apply container variants for staggering
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white shadow-lg rounded-xl p-8 transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
                  variants={gridItemVariants} // Apply item variants for individual animation
                  whileHover={{ scale: 1.03 }} // Subtle scale on hover
                >
                  {/* Icon Container */}
                  <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-4 rounded-full inline-block mb-5 shadow-sm">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 font-montserrat">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-base font-roboto leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Team Section - Improved card layout and animation */}
          <motion.section
            className="max-w-7xl mx-auto mb-24"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-12 text-center font-montserrat">
              Meet Our Team
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" // Increased gap
              variants={gridContainerVariants}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-lg rounded-xl p-8 text-center transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 border border-gray-100 flex flex-col items-center" // Centering content
                  variants={gridItemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Styled Icon Container */}
                  <div className="mb-5 bg-gray-100 rounded-full p-4 inline-flex items-center justify-center shadow-sm">
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 text-base font-medium mb-4 font-roboto">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-base font-roboto leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Call to Action - Stronger visual presence */}
          <motion.section
            className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white text-center py-16 px-6 rounded-xl shadow-xl max-w-5xl mx-auto"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 font-montserrat">
              Join the FreeGrow Community
            </h2>
            <p className="text-lg sm:text-xl text-indigo-100 mb-10 max-w-3xl mx-auto font-roboto leading-relaxed">
              Ready to thrive? Whether you’re seeking talent or opportunity,
              FreeGrow is your platform. Start your journey today!
            </p>
            <motion.button
              onClick={() => navigate("/signup")}
              className="bg-white text-indigo-700 px-10 py-3 rounded-lg text-lg font-semibold font-montserrat shadow-md focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 ease-in-out"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f3f4f6",
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }} // Enhanced hover effect
              whileTap={{ scale: 0.98 }}
            >
              Get Started Now
            </motion.button>
          </motion.section>
        </div>

        <HomeFooter />
      </div>
    </PageTransitionWrapper>
  );
}
