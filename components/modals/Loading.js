import Logo from "components/Logo";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <motion.div
            animate={{ scale: [0, 1], filter: ["blur(10px)", "blur(0px)"] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="relative overflow-hidden"
          >
            <Logo />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
