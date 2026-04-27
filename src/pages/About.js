import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: ${props => props.theme.colors.background};
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled(motion.h2)`
  color: ${props => props.theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: block;
    width: 200px;
    height: 1px;
    background: rgba(100, 255, 218, 0.2);
    margin-left: 1rem;
  }
`;

const TextContent = styled(motion.div)`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.1rem;
  line-height: 1.7;

  p {
    margin-bottom: 1.5rem;
  }

  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem 1rem;
  margin-top: 1.5rem;
  padding: 0;
  list-style: none;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TechItem = styled(motion.li)`
  position: relative;
  padding-left: 1.5rem;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textSecondary};

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.primary};
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  max-width: 300px;
  margin: 0 auto;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid ${props => props.theme.colors.primary};
    top: 20px;
    left: 20px;
    z-index: -1;
    border-radius: 4px;
    transition: ${props => props.theme.transitions.default};
  }

  &:hover::after {
    top: 15px;
    left: 15px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 4px;
  filter: grayscale(100%) contrast(1);
  transition: ${props => props.theme.transitions.default};

  &:hover {
    filter: none;
  }
`;

function About() {
  const technologies = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'TypeScript',
    'Zendesk Admin',
    'Customer Experience',
    'ITSM / ITIL',
    'SLA Management'
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Layout>
      <AboutContainer>
        <Content>
          <div>
            <SectionTitle
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Sobre Mim
            </SectionTitle>
            
            <TextContent
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                Olá! Meu nome é <span>Placido Francisco da Silva Junior</span> e sou um apaixonado por transformar processos através da tecnologia.
              </p>
              <p>
                Atualmente, sou <span>Gestor na Orbe Insights</span>, onde lidero o desenvolvimento de soluções de conciliação inteligente para escritórios contábeis, 
                focando em reduzir gargalos operacionais e escalar a produtividade através de automação.
              </p>
              <p>
                Além da gestão na Orbe, continuo impulsionando a <span>Naxel Tech</span>, provendo infraestrutura de TI estratégica para novos negócios.
              </p>
              <p>
                Com sólida experiência em <span>Suporte Técnico e Customer Experience</span>, especializei-me na implementação e gestão de ferramentas de suporte como <span>Zendesk</span>, otimizando o atendimento através de fluxos de trabalho inteligentes, automações e análise de métricas (SLA, CSAT, NPS).
              </p>
              
              <TechList
                as={motion.ul}
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {technologies.map((tech, index) => (
                  <TechItem key={index} variants={itemVariants}>{tech}</TechItem>
                ))}
              </TechList>
            </TextContent>
          </div>

          <ImageWrapper
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ProfileImage src="/logo192.png" alt="Profile" />
          </ImageWrapper>
        </Content>
      </AboutContainer>
    </Layout>
  );
}

export default About;
