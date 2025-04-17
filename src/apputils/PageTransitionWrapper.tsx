import { motion } from "framer-motion";

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      {children}
    </motion.div>
  );
}
