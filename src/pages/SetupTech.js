import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheck, FaLaptop, FaNetworkWired, FaTools, 
         FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaPaperPlane, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

const SetupTechContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background: #0a192f;
  color: white;
  overflow-x: hidden; // Adicionado para evitar scroll horizontal
`;

const Content = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  text-align: center;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  svg {
    font-size: 3rem;
    color: #64ffda;
    margin-right: 1rem;
  }
`;

const LogoText = styled.span`
  font-size: clamp(2rem, 5vw, 3rem);
  color: #64ffda;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  color: #64ffda;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: #8892b0;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 800px;
  margin: 0 auto 2rem;
  color: #ccd6f6;
  line-height: 1.6;
  text-align: center;
`;

const ServicesSection = styled(motion.section)`
  width: 100%;
  margin: 3rem 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid rgba(100, 255, 218, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  svg {
    font-size: 2.5rem;
    color: #64ffda;
    margin-bottom: 1.5rem;
  }
`;

const ServiceTitle = styled.h3`
  color: #ccd6f6;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const ServiceDescription = styled.p`
  color: #8892b0;
  line-height: 1.5;
`;

const BenefitsSection = styled(motion.section)`
  width: 100%;
  margin: 3rem 0;
  position: relative;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, minmax(200px, 1fr));
  }
`;

const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid #64ffda;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: rgba(100, 255, 218, 0.05);
    transform: translateY(-5px);
  }
  
  svg.benefit-icon {
    color: #64ffda;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    align-self: center;
  }
`;

const BenefitTitle = styled.h4`
  color: #ccd6f6;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  text-align: center;
`;

const BenefitDescription = styled.p`
  color: #8892b0;
  font-size: 0.9rem;
  line-height: 1.4;
  text-align: center;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(10, 25, 47, 0.8);
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
  
  &.prev {
    left: 10px;
  }
  
  &.next {
    right: 10px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactSection = styled(motion.section)`
  width: 100%;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  color: #ccd6f6;
  
  svg {
    color: #64ffda;
    margin-right: 1rem;
    font-size: 1.3rem;
  }
`;

const QRCode = styled.a`
  margin-top: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  display: block;
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
  
  img {
    width: 200px;
    height: auto;
    border-radius: 8px;
  }
`;

const SectionTitle = styled.h2`
  color: #64ffda;
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 1rem;
  text-align: center;
`;

const Footer = styled.footer`
  width: 100%;
  background: rgba(10, 15, 25, 0.95);
  padding: 4rem 2rem 2rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  box-sizing: border-box;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background-color: #0a1017;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  color: #64ffda;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background: #64ffda;
  }
`;

const FooterText = styled.p`
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #8892b0;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #64ffda;
    transform: translateY(-3px);
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  color: #8892b0;
  margin-bottom: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #64ffda;
  }
  
  svg {
    margin-right: 0.8rem;
    color: #64ffda;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 4px;
  color: #ccd6f6;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
  }
  
  &::placeholder {
    color: rgba(204, 214, 246, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 4px;
  color: #ccd6f6;
  font-size: 0.9rem;
  min-height: 100px;
  resize: vertical;
  margin-bottom: 0.5rem;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
  }
  
  &::placeholder {
    color: rgba(204, 214, 246, 0.5);
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #8892b0;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  font-size: 0.9rem;
`;

function SetupTech() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const benefitsRef = useRef(null);
  
  const benefits = [
    {
      icon: <FaCheck size={24} className="benefit-icon" />,
      title: "Tecnologia certa para o seu negócio",
      description: "Soluções personalizadas que atendem exatamente às necessidades da sua empresa."
    },
    {
      icon: <FaCheck size={24} className="benefit-icon" />,
      title: "Atendimento ágil e eficiente",
      description: "Suporte técnico rápido e eficaz para resolver seus problemas sem demora."
    },
    {
      icon: <FaCheck size={24} className="benefit-icon" />,
      title: "Mais foco na produtividade",
      description: "Equipamentos e sistemas otimizados para maximizar o desempenho da sua equipe."
    },
    {
      icon: <FaCheck size={24} className="benefit-icon" />,
      title: "Economia de tempo e custos",
      description: "Soluções que reduzem gastos desnecessários e otimizam seus investimentos em TI."
    },
    {
      icon: <FaCheck size={24} className="benefit-icon" />,
      title: "Satisfação garantida",
      description: "Compromisso com a qualidade e resultados que superam suas expectativas."
    }
  ];
  
  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? benefits.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentSlide(prev => (prev === benefits.length - 1 ? 0 : prev + 1));
  };
  
  useEffect(() => {
    if (benefitsRef.current) {
      const items = benefitsRef.current.querySelectorAll('.carousel-item');
      items.forEach((item, index) => {
        item.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
      });
    }
  }, [currentSlide]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <SetupTechContainer>
      <Content
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo 
            href="https://wa.me/5571981525641?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20SetupTech" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaTools size={40} />
            <LogoText>SETUPTECH</LogoText>
          </Logo>
          <Subtitle>TECNOLOGIA INTELIGENTE PARA EMPRESAS</Subtitle>
          <Description>
            Consultoria e montagem de PCs para empresas que estão começando.
            A SetupTech ajuda o seu negócio a iniciar com desempenho, economia e suporte profissional.
          </Description>
        </Header>

        <ServicesSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionTitle>Soluções inteligentes para empresas que estão começando</SectionTitle>
          <ServicesGrid>
            <ServiceCard
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <FaTools />
              <ServiceTitle>Consultoria de TI</ServiceTitle>
              <ServiceDescription>
                Planejamento e recomendação de equipamentos e rede para o seu negócio.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <FaLaptop />
              <ServiceTitle>Montagem de Computadores</ServiceTitle>
              <ServiceDescription>
                Montagem personalizada e instalação de sistemas adaptados às suas necessidades.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <FaNetworkWired />
              <ServiceTitle>Rede e Internet</ServiceTitle>
              <ServiceDescription>
                Configuração de rede local e internet do escritório para máxima eficiência.
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </ServicesSection>

        <BenefitsSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionTitle>Por que escolher a gente?</SectionTitle>
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>
                {benefit.icon}
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>
                  {benefit.description}
                </BenefitDescription>
              </BenefitItem>
            ))}
          </BenefitsGrid>
        </BenefitsSection>

        <ContactSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SectionTitle>Fale conosco!</SectionTitle>
          <QRCode 
            href="https://wa.me/5571981525641?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20SetupTech" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ margin: '1rem auto 2rem' }}
          >
            <img src="/imagens/setup-tech.png" alt="SetupTech Logo" />
          </QRCode>
          <ContactInfo>
            <ContactItem>
              <FaPhone />
              <span>71 98152-5641</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>placidojunior34@gmail.com</span>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>Bahia</span>
            </ContactItem>
          </ContactInfo>
        </ContactSection>
      </Content>
    </SetupTechContainer>
  );
}

export default SetupTech;