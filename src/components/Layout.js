import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageWrapper = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
`;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Layout = ({ children }) => {
  return (
    <PageWrapper
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </PageWrapper>
  );
};

export default Layout;