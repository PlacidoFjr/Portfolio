import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCheck, 
  FaLaptop, 
  FaNetworkWired, 
  FaTools, 
  FaRocket, 
  FaShieldAlt, 
  FaSync 
} from 'react-icons/fa';
import Layout from '../components/Layout';

const NaxelTechContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.white};
  overflow-x: hidden;
`;

const Content = styled(motion.div)`
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 5rem;
`;

const LogoWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Badge = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-family: ${props => props.theme.fonts.mono};
  margin-bottom: 1rem;
`;

const LogoText = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  color: ${props => props.theme.colors.primary};
  font-weight: 800;
  letter-spacing: -2px;
  margin: 0;
  text-transform: uppercase;
`;

const Subtitle = styled.h2`
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: ${props => props.theme.colors.white};
  font-weight: 700;
  margin-top: 1rem;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 800px;
  margin: 1.5rem auto 3rem;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  padding: 1.2rem 2.5rem;
  border-radius: 4px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px -10px ${props => props.theme.colors.primary};
    background: #52d1b2;
  }
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 6rem;
`;

const ServiceCard = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundLight};
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: ${props => props.theme.transitions.default};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-10px);
  }

  .icon-wrapper {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1.5rem;
  }

  h3 {
    color: ${props => props.theme.colors.white};
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.colors.textSecondary};
    line-height: 1.6;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 6rem;
`;

const BenefitCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 12px;
  border-top: 4px solid ${props => props.theme.colors.primary};
  
  h3 {
    color: ${props => props.theme.colors.white};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }
  
  p {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${props => props.theme.colors.textSecondary};
  
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem;
  }
`;

function NaxelTech() {
  const services = [
    {
      icon: <FaTools />,
      title: "Análise e Mapeamento",
      description: "Levantamento rigoroso de requisitos de hardware e software para dimensionamento preciso do seu escritório."
    },
    {
      icon: <FaLaptop />,
      title: "Curadoria de Hardware",
      description: "Seleção de ativos de rede e estações de trabalho focada em longevidade, performance e custo-benefício."
    },
    {
      icon: <FaNetworkWired />,
      title: "Projeto de Rede",
      description: "Arquitetura de rede Wi-Fi e cabeamento estruturado para ambientes corporativos de alta performance."
    }
  ];

  const benefits = [
    {
      icon: <FaSync />,
      title: "Zero Downtime",
      description: "Sistemas projetados para continuidade, eliminando paradas operacionais que custam caro ao seu negócio."
    },
    {
      icon: <FaShieldAlt />,
      title: "Segurança Nativa",
      description: "Proteção de dados integrada desde a concepção do projeto, garantindo conformidade e tranquilidade."
    },
    {
      icon: <FaRocket />,
      title: "Foco Total",
      description: "Sua equipe foca no core business enquanto cuidamos de toda a complexidade da infraestrutura técnica."
    }
  ];

  return (
    <Layout>
      <NaxelTechContainer>
        <Content
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header>
            <Badge>Disponível para novos projetos</Badge>
            <LogoWrapper href="https://naxel-tech.vercel.app/" target="_blank" rel="noopener noreferrer">
              <LogoText>NAXEL TECH</LogoText>
            </LogoWrapper>
            <Subtitle>INFRAESTRUTURA DE TI PARA NOVOS ESCRITÓRIOS.</Subtitle>
            <Description>
              Consultoria estratégica para empresas que buscam alta performance desde o primeiro dia. 
              Projetamos, implementamos e gerenciamos sua tecnologia.
            </Description>
            <CTAButton href="https://wa.me/5571981525641" target="_blank">
              PLANEJE SUA ESTRUTURA
            </CTAButton>
          </Header>

          <section>
            <SectionTitle>Soluções 360º em Infraestrutura</SectionTitle>
            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="icon-wrapper">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </section>

          <section>
            <SectionTitle>Vantagem Competitiva</SectionTitle>
            <BenefitsGrid>
              {benefits.map((benefit, index) => (
                <BenefitCard key={index}>
                  <h3>{benefit.icon} {benefit.title}</h3>
                  <p>{benefit.description}</p>
                </BenefitCard>
              ))}
            </BenefitsGrid>
          </section>

          <section style={{ textAlign: 'center' }}>
            <SectionTitle>Tecnologia que impulsiona o seu negócio</SectionTitle>
            <ContactInfo>
              <ContactItem>
                <FaPhone /> <span>71 98152-5641</span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope /> <span>contato@naxel.tech</span>
              </ContactItem>
              <ContactItem>
                <FaMapMarkerAlt /> <span>Bahia, Brasil</span>
              </ContactItem>
            </ContactInfo>
            <div style={{ marginTop: '3rem' }}>
              <CTAButton href="https://naxel-tech.vercel.app/" target="_blank">
                VISITAR SITE OFICIAL
              </CTAButton>
            </div>
          </section>
        </Content>
      </NaxelTechContainer>
    </Layout>
  );
}

export default NaxelTech;
