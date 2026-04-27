import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  z-index: 1001;
`;

const SvgWrapper = styled(motion.div)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.span`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.mono};
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 1px;

  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const Logo = () => {
  return (
    <LogoContainer to="/">
      <SvgWrapper
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagon Background */}
          <motion.path
            d="M50 5L93.3 30V80L50 105L6.7 80V30L50 5Z"
            stroke="#64ffda"
            strokeWidth="5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {/* Stylized P */}
          <motion.path
            d="M40 35V70 M40 35H55C60 35 63 38 63 43C63 48 60 51 55 51H40"
            stroke="#64ffda"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          />

          {/* Glowing Dot */}
          <motion.circle
            cx="63"
            cy="70"
            r="5"
            fill="#64ffda"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: 2, duration: 0.5 }}
          />
        </svg>
      </SvgWrapper>
      <LogoText>
        PLACIDO<span>.</span>JR
      </LogoText>
    </LogoContainer>
  );
};

export default Logo;
