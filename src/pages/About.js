import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background: #0a192f;
  color: white;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  color: #64ffda;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Section = styled(motion.div)`
  margin-bottom: 2rem;
`;

const Paragraph = styled(motion.p)`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const TechList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

const TechItem = styled(motion.li)`
  color: #64ffda;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  &:before {
    content: "▹";
    margin-right: 10px;
  }
`;

function About() {
  return (
    <AboutContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mim
        </Title>
        
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Paragraph>
            Sou Plácido, profissional de Tecnologia da Informação com foco em desenvolvimento web e soluções tecnológicas inteligentes. Atualmente atuo no setor de engenharia da Absolut Technologies, onde trabalho com elaboração de projetos técnicos e integração de sistemas de áudio e vídeo.
          </Paragraph>

          <Paragraph>
            Tenho experiência prática com as seguintes tecnologias:
          </Paragraph>

          <TechList>
            <TechItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              JavaScript
            </TechItem>
            <TechItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              React
            </TechItem>
            <TechItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              Node.js
            </TechItem>
            <TechItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              Python
            </TechItem>
          </TechList>

          <Paragraph>
            Além disso, tenho conhecimento em automação de atendimentos, desenvolvimento de backends escaláveis e otimização de sistemas. Também ofereço serviços de montagem de setups, formatação, segurança digital e consultoria para pequenos negócios através do meu projeto SetupSmart.
          </Paragraph>

          <Paragraph>
            Sou movido por desafios e pela busca constante de aprendizado. Gosto de unir criatividade e técnica para entregar soluções que realmente façam a diferença.
          </Paragraph>
        </Section>
      </Content>
    </AboutContainer>
  );
}

export default About;