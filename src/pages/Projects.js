import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Layout from '../components/Layout';
import { projects } from '../data/projects';
import { skills } from '../data/skills';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: ${props => props.theme.colors.background};
`;

const SectionTitle = styled(motion.h2)`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background: ${props => props.theme.colors.primary};
    margin: 1rem auto;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(100, 255, 218, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
    border-color: ${props => props.theme.colors.primary};
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
  padding: 0;
  list-style: none;
`;

const Tag = styled.li`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.75rem;
  background: rgba(100, 255, 218, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: auto;
`;

const IconLink = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: 1.3rem;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const SkillsSection = styled.section`
  max-width: 1000px;
  margin: 6rem auto 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: 12px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: ${props => props.theme.transitions.default};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: scale(1.05);
  }

  span {
    color: ${props => props.theme.colors.text};
    font-size: 0.9rem;
    font-family: ${props => props.theme.fonts.mono};
  }
`;

function Projects() {
  return (
    <Layout>
      <ProjectsContainer>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meus Projetos
        </SectionTitle>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                {project.tags && (
                  <TagList>
                    {project.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                )}
                <ProjectLinks>
                  {project.github && project.github !== '#' && (
                    <IconLink href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <FaGithub />
                    </IconLink>
                  )}
                  {project.live && project.live !== '#' && (
                    <IconLink href={project.live} target="_blank" rel="noopener noreferrer" title="Ver Projeto">
                      <FaExternalLinkAlt />
                    </IconLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <SkillsSection>
          <SectionTitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Minhas Habilidades
          </SectionTitle>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <skill.icon size={40} color={skill.color} />
                <span>{skill.name}</span>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsSection>
      </ProjectsContainer>
    </Layout>
  );
}

export default Projects;
