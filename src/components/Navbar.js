import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const Logo = styled(Link)`
  color: #64ffda;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Fira Code', monospace;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: #8892b0;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem;
  font-weight: 500;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.3rem;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #64ffda;
    &::after {
      width: 100%;
    }
  }
`;

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projetos', path: '/projects' },
  { name: 'Sobre', path: '/about' },
  { name: 'Contato', path: '/contact' },
  { name: 'SetupTech', path: '/setuptech' }
];

function Navbar() {
  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContent>
        <Logo to="/">PJ</Logo>
        <NavLinks>
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.path}>
              {link.name}
            </NavLink>
          ))}
        </NavLinks>
      </NavContent>
    </Nav>
  );
}

export default Navbar;