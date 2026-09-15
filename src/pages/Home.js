import styled from 'styled-components';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const HomeContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${props => props.theme.colors.background};
  overflow: hidden;
  padding: 7rem 2rem 3rem;
`;

const ParticlesBackground = styled(Particles)`
  position: absolute;
  inset: 0;
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
  font-size: clamp(2.8rem, 8vw, 5rem);
  color: ${props => props.theme.colors.white};
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.h2)`
  max-width: 850px;
  font-size: clamp(1.8rem, 5vw, 3.6rem);
  color: ${props => props.theme.colors.textSecondary};
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  color: ${props => props.theme.colors.textSecondary};
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.7;
  max-width: 680px;
  margin-bottom: 2.5rem;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  font-weight: 500;
  font-family: ${props => props.theme.fonts.mono};

  &:hover {
    background: rgba(100, 255, 218, 0.08);
    transform: translateY(-3px);
  }

  svg { transition: transform 0.3s ease; }
  &:hover svg { transform: translateX(5px); }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.6rem;
  margin-top: 3.5rem;
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.65rem;

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function Home() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    fullScreen: { enable: false },
    particles: {
      color: { value: '#64ffda' },
      links: { color: '#64ffda', distance: 150, enable: true, opacity: 0.16, width: 1 },
      move: { enable: true, speed: 0.6, outModes: { default: 'out' } },
      number: { value: 48, density: { enable: true, area: 900 } },
      opacity: { value: 0.24 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 2.5 } },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'grab' } },
      modes: { grab: { distance: 130, links: { opacity: 0.45 } } },
    },
    detectRetina: true,
  };

  return (
    <Layout>
      <HomeContainer>
        <ParticlesBackground id="portfolio-particles" init={particlesInit} options={particlesConfig} aria-hidden="true" />
        <Content variants={containerVariants} initial="hidden" animate="visible">
          <Greeting variants={itemVariants}>Olá, meu nome é</Greeting>
          <Name variants={itemVariants}>Placido Junior.</Name>
          <Subtitle variants={itemVariants}>
            Desenvolvedor Full Stack e Gestor da Naxel.
          </Subtitle>
          <Description variants={itemVariants}>
            Bacharel em Ciência da Computação, com experiência em desenvolvimento web, suporte técnico N1/N2 e infraestrutura.
            Trabalho com aplicações, APIs, automações e soluções de IA voltadas a problemas reais.
          </Description>
          <ButtonGroup variants={itemVariants}>
            <PrimaryButton to="/projects">Ver meus projetos <FaArrowRight /></PrimaryButton>
          </ButtonGroup>
          <SocialLinks variants={itemVariants}>
            <SocialIcon aria-label="GitHub" href="https://github.com/PlacidoFjr" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIcon>
            <SocialIcon aria-label="LinkedIn" href="https://www.linkedin.com/in/placido-francisco-da-silva-junior-a09765242/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
            <SocialIcon aria-label="Instagram" href="https://www.instagram.com/placido_sjr/" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialIcon>
          </SocialLinks>
        </Content>
      </HomeContainer>
    </Layout>
  );
}

export default Home;
