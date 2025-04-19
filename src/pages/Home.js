import styled from 'styled-components';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Link } from 'react-router-dom';
import { FaGithub, FaFolder, FaEnvelope } from 'react-icons/fa';
import { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 1rem;
  position: relative;
  background: #0a192f;
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  color: #64ffda;
  margin-bottom: 1rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.2rem, 4vw, 2rem);
  color: #8892b0;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.2rem);
  max-width: 600px;
  margin: 0 auto 2rem auto; /* Center the text block */
  color: #ccd6f6; /* Lighter color for better visibility */
  line-height: 1.5; /* Improved line spacing */
  font-weight: 400; /* Slightly bolder */
  text-align: center; /* Garantir alinhamento do texto */
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

const IconButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #64ffda;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  padding: 0.8rem 1.5rem;
  border: 2px solid #64ffda;
  border-radius: 4px;
  transition: all 0.3s ease;
  background: transparent;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(100, 255, 218, 0.1);
  }
`;

function Home() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    background: {
      opacity: 0
    },
    particles: {
      color: {
        value: "#64ffda",
      },
      links: {
        color: "#64ffda",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
      size: {
        value: 3,
      },
      opacity: {
        value: 0.3,
      },
    },
  };

  return (
    <HomeContainer>
      <ParticlesBackground init={particlesInit} options={particlesConfig} />
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Name
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Plácido Junior
        </Name>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          💻 Desenvolvedor Full Stack | Consultor em TI
        </Title>
        <Description
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Transformando ideias em soluções digitais com React, Node.js e Python.
        </Description>
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <IconButton 
            href="https://github.com/PlacidoFjr" 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> GitHub
          </IconButton>
          <IconButton 
            as={Link} 
            to="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFolder /> Projetos
          </IconButton>
          <IconButton 
            as={Link} 
            to="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope /> Contato
          </IconButton>
        </ButtonContainer>
      </Content>
    </HomeContainer>
  );
}

export default Home;