import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Layout from '../components/Layout';
import { projects } from '../data/projects';
import { skills } from '../data/skills';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background:
    radial-gradient(circle at 85% 12%, rgba(232, 180, 93, 0.08), transparent 26rem),
    ${props => props.theme.colors.background};
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

const Intro = styled(motion.p)`
  max-width: 660px;
  margin: -1.8rem auto 3rem;
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
  line-height: 1.7;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(232, 180, 93, 0.12);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 24px 55px -30px rgba(0, 0, 0, 0.9);
    border-color: ${props => props.theme.colors.primary};
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid rgba(232, 180, 93, 0.12);
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

const ProjectNumber = styled.span`
  display: block;
  margin-bottom: 0.7rem;
  color: ${props => props.theme.colors.textSecondary};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.08em;
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
  background: rgba(232, 180, 93, 0.1);
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
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
  border: 1px solid rgba(232, 180, 93, 0.12);
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
          Projetos selecionados
        </SectionTitle>
        <Intro
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Uma seleção de produtos, pesquisas e experiências digitais em que tecnologia foi aplicada para resolver necessidades concretas.
        </Intro>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage src={project.image} alt={project.title} loading="lazy" />
              <ProjectContent>
                <ProjectNumber>PROJETO {String(index + 1).padStart(2, '0')}</ProjectNumber>
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
                    <IconLink aria-label={`Ver código de ${project.title} no GitHub`} href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <FaGithub />
                    </IconLink>
                  )}
                  {project.live && project.live !== '#' && (
                    <IconLink aria-label={`Abrir ${project.title}`} href={project.live} target="_blank" rel="noopener noreferrer" title="Ver projeto">
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
            Tecnologias e competências
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
