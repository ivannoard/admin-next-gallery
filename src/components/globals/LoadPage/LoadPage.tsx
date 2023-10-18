import { motion } from "framer-motion";
import { ChildrenComponent } from "../../../utils/types";
const LoadPage = ({ children }: ChildrenComponent) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default LoadPage;
