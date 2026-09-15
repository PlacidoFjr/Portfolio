import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaArrowRight, FaCode, FaGithub, FaInstagram, FaLinkedin,
  FaMapMarkerAlt, FaNetworkWired, FaRobot, FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import HeroScene from '../components/HeroScene';

const HomeContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 8rem 2rem 4rem;
  background:
    radial-gradient(circle at 76% 25%, rgba(232, 180, 93, 0.12), transparent 26rem),
    radial-gradient(circle at 20% 85%, rgba(39, 103, 151, 0.18), transparent 32rem),
    ${props => props.theme.colors.background};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding-inline: 1.25rem;
  }
`;

const Grid = styled.div`
  position: relative;
  z-index: 1;
  width: min(1180px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.75fr);
  align-items: center;
  gap: clamp(3rem, 7vw, 7rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Content = styled(motion.div)`
  max-width: 760px;
`;

const Eyebrow = styled(motion.p)`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: ${props => props.theme.colors.primarySoft};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.88rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.4rem;

  &::before {
    content: '';
    width: 28px;
    height: 1px;
    background: ${props => props.theme.colors.primary};
  }
`;

const Name = styled(motion.h1)`
  color: ${props => props.theme.colors.white};
  font-size: clamp(3rem, 7.2vw, 6.7rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 0.93;
  margin-bottom: 1.35rem;

  span {
    display: block;
    color: ${props => props.theme.colors.primary};
  }
`;

const Subtitle = styled(motion.h2)`
  max-width: 720px;
  color: ${props => props.theme.colors.text};
  font-size: clamp(1.25rem, 2.35vw, 2rem);
  font-weight: 500;
  line-height: 1.35;
  margin-bottom: 1.4rem;
`;

const Description = styled(motion.p)`
  max-width: 660px;
  color: ${props => props.theme.colors.textSecondary};
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.75;
  margin-bottom: 1.2rem;
`;

const Location = styled(motion.p)`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: ${props => props.theme.colors.textSecondary};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.83rem;
  margin-bottom: 2rem;

  svg { color: ${props => props.theme.colors.primary}; }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.95rem 1.25rem;
  color: ${props => props.theme.colors.background};
  background: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  font-weight: 700;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 35px -18px rgba(232, 180, 93, 0.9);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.95rem 1.25rem;
  color: ${props => props.theme.colors.text};
  border: 1px solid rgba(169, 183, 200, 0.32);
  border-radius: 10px;
  font-weight: 600;

  &:hover {
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const ProfilePanel = styled(motion.aside)`
  padding: 1.35rem;
  border: 1px solid rgba(232, 180, 93, 0.18);
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(16, 41, 68, 0.9), rgba(8, 24, 43, 0.78));
  box-shadow: 0 30px 80px -42px rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(14px);
`;

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.textSecondary};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Status = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #9ee6b1;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #62d984;
    box-shadow: 0 0 0 5px rgba(98, 217, 132, 0.1);
  }
`;

const Capability = styled(motion.div)`
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 0.9rem;
  align-items: center;
  padding: 1rem;
  border-radius: 14px;
  background: rgba(7, 20, 38, 0.58);

  & + & { margin-top: 0.7rem; }

  svg {
    padding: 0.7rem;
    width: 42px;
    height: 42px;
    color: ${props => props.theme.colors.primary};
    border-radius: 11px;
    background: rgba(232, 180, 93, 0.1);
  }

  strong { display: block; color: ${props => props.theme.colors.text}; margin-bottom: 0.15rem; }
  span { color: ${props => props.theme.colors.textSecondary}; font-size: 0.82rem; }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.1rem;
  margin-top: 1rem;
  padding: 0.7rem 0.2rem 0;
`;

const SocialIcon = styled.a`
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  color: ${props => props.theme.colors.textSecondary};
  border: 1px solid rgba(169, 183, 200, 0.18);
  border-radius: 50%;

  &:hover {
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
};

function Home() {
  const capabilities = [
    { icon: FaCode, title: 'Desenvolvimento Full Stack', text: 'Interfaces, APIs e produtos web' },
    { icon: FaRobot, title: 'IA e automações', text: 'RAG, integrações e processos' },
    { icon: FaNetworkWired, title: 'Suporte e infraestrutura', text: 'Help desk, redes e continuidade' },
  ];

  return (
    <Layout>
      <HomeContainer>
        <HeroScene />
        <Grid>
          <Content variants={containerVariants} initial="hidden" animate="visible">
            <Eyebrow variants={itemVariants}>Desenvolvedor Full Stack · Gestor da Naxel</Eyebrow>
            <Name variants={itemVariants}>Placido <span>Junior.</span></Name>
            <Subtitle variants={itemVariants}>Transformo problemas de negócio em soluções digitais claras, úteis e sustentáveis.</Subtitle>
            <Description variants={itemVariants}>
              Atuo entre desenvolvimento web, automações com IA e infraestrutura de TI. Na Naxel, conecto tecnologia e operação para simplificar processos e fazer negócios avançarem.
            </Description>
            <Location variants={itemVariants}><FaMapMarkerAlt /> Salvador, Bahia · disponível para projetos remotos</Location>
            <ButtonGroup variants={itemVariants}>
              <PrimaryButton to="/projects">Conhecer projetos <FaArrowRight /></PrimaryButton>
              <SecondaryButton href="https://wa.me/5571981525641" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> Conversar comigo</SecondaryButton>
            </ButtonGroup>
          </Content>

          <ProfilePanel initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
            <PanelHeader><span>Áreas de atuação</span><Status>Disponível</Status></PanelHeader>
            {capabilities.map(({ icon: Icon, title, text }, index) => (
              <Capability key={title} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 + index * 0.1 }}>
                <Icon />
                <div><strong>{title}</strong><span>{text}</span></div>
              </Capability>
            ))}
            <SocialLinks>
              <SocialIcon aria-label="GitHub" href="https://github.com/PlacidoFjr" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIcon>
              <SocialIcon aria-label="LinkedIn" href="https://www.linkedin.com/in/placido-francisco-da-silva-junior-a09765242/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
              <SocialIcon aria-label="Instagram" href="https://www.instagram.com/placido_sjr/" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialIcon>
            </SocialLinks>
          </ProfilePanel>
        </Grid>
      </HomeContainer>
    </Layout>
  );
}

export default Home;
