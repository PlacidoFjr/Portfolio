import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaFolder, FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiPython } from 'react-icons/si';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background: #0a192f;
  color: white;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center; /* Centraliza o texto */
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: #64ffda;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 1.3;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 2rem 0;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.5rem;
  justify-content: center; /* Centraliza os ícones */
`;

const IconLink = styled.a`
  color: #8892b0;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #64ffda;
    transform: translateY(-2px);
  }
`;

const SkillsSection = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(100, 255, 218, 0.1);
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  color: #8892b0;
  font-size: 0.9rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const projects = [
  {
    title: 'SetupTech',
    description: 'Consultoria e montagem de PCs para empresas que estão começando. A SetupTech ajuda o seu negócio a começar com o pé direito!',
    image: '/imagens/setup-tech.png',
    github: 'https://github.com/PlacidoFjr',
    live: '/setuptech'  // Atualizado para apontar para a nova página
  },
  {
    title: 'Suporte Técnico TI',
    description: 'Parou, travou o Junior chegou!! Atendimento especializado com suporte remoto 24/7 e presencial quando necessário.',
    image: '/imagens/suporte-tecnico.png',
    github: 'https://github.com/PlacidoFjr',
    live: 'https://suportepjr.vercel.app/'
  },
  {
    title: 'Burguer Website',
    description: 'O sabor vai até você! Nossa paixão por hambúrgueres artesanais nos inspira a criar combinações únicas e deliciosas.',
    image: '/imagens/burguer-site.png',
    github: 'https://github.com/PlacidoFjr',
    live: 'https://site-burguer-dbk33xl65-placidofjrs-projects.vercel.app/'
  }
];

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
];

// Corrigir a estrutura do componente Projects para usar o ProjectCard importado
function Projects() {
  return (
    <ProjectsContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        Meus Projetos
      </motion.h1>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <p>{project.description}</p>
            {project.location && (
              <ProjectDetails>
                <DetailItem>
                  <FaMapMarkerAlt />
                  <span>{project.location}</span>
                </DetailItem>
                {project.contact && (
                  <DetailItem>
                    <FaPhone />
                    <span>{project.contact}</span>
                  </DetailItem>
                )}
                {project.services && (
                  <div style={{ marginTop: '1rem' }}>
                    {project.services.map((service, idx) => (
                      <DetailItem key={idx} style={{ marginTop: '0.5rem' }}>
                        <span>• {service}</span>
                      </DetailItem>
                    ))}
                  </div>
                )}
              </ProjectDetails>
            )}
            <ProjectLinks>
              {project.github && project.github !== '#' && (
                <IconLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </IconLink>
              )}
              {project.live && project.live !== '#' && (
                <IconLink href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </IconLink>
              )}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <SkillsSection>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', color: '#64ffda' }}
        >
          Minhas Habilidades
        </motion.h2>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <skill.icon size={40} color={skill.color} />
              <span>{skill.name}</span>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>
    </ProjectsContainer>
  );
}

export default Projects;