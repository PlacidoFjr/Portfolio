import styled from 'styled-components';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${props => props.theme.colors.background};
  overflow: hidden;
  padding: 2rem;
`;

const ParticlesBackground = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  width: 100%;
`;

const Greeting = styled(motion.p)`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.mono};
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 1.5rem;
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  color: ${props => props.theme.colors.white};
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(2rem, 6vw, 4rem);
  color: ${props => props.theme.colors.textSecondary};
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  color: ${props => props.theme.colors.textSecondary};
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 3rem;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2rem;
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  font-weight: 500;
  font-family: ${props => props.theme.fonts.mono};
  transition: ${props => props.theme.transitions.default};

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.8rem;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Home() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    background: { opacity: 0 },
    particles: {
      color: { value: "#64ffda" },
      links: {
        color: "#64ffda",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      number: {
        value: 80,
        density: { enable: true, area: 800 }
      },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  };

  return (
    <Layout>
      <HomeContainer>
        <ParticlesBackground
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />
        
        <Content variants={containerVariants}>
          <Greeting variants={itemVariants}>
            Olá, meu nome é
          </Greeting>
          
          <Name variants={itemVariants}>
            Placido Junior.
          </Name>
          
          <Subtitle variants={itemVariants}>
            Gestor na Orbe Insights & Especialista em TI.
          </Subtitle>
          
          <Description variants={itemVariants}>
            Sou o Placido Francisco da Silva Junior, profissional de tecnologia focado em 
            gestão operacional e desenvolvimento de soluções inteligentes para o mercado contábil e corporativo.
          </Description>
          
          <ButtonGroup variants={itemVariants}>
            <PrimaryButton to="/projects">
              Ver meus projetos <FaArrowRight />
            </PrimaryButton>
          </ButtonGroup>

          <SocialLinks variants={itemVariants}>
            <SocialIcon href="https://github.com/PlacidoFjr" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/placido-francisco-da-silva-junior-a09765242/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/placido_sjr/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram />
            </SocialIcon>
          </SocialLinks>
        </Content>
      </HomeContainer>
    </Layout>
  );
}

export default Home;
