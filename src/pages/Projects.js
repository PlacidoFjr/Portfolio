import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Layout from '../components/Layout';
import { projects } from '../data/projects';
import { skills } from '../data/skills';

const ProjectsContainer = styled.main`
  min-height: 100vh;
  padding: 8.5rem 2rem 5rem;
  background:
    radial-gradient(ellipse at 14% 4%, rgba(100, 255, 218, 0.065), transparent 32rem),
    ${props => props.theme.colors.background};
`;

const Content = styled.div`
  width: min(100%, 1160px);
  margin: 0 auto;
`;

const Intro = styled.header`
  max-width: 760px;
  margin: 0 0 2.5rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: clamp(2.4rem, 5vw, 4.25rem);
  line-height: 1.08;
  letter-spacing: -0.045em;
  font-weight: 700;
  max-width: 12ch;

  &::after {
    content: '';
    display: block;
    width: 4rem;
    height: 3px;
    margin-top: 1.15rem;
    border-radius: 3px;
    background: ${props => props.theme.colors.primary};
  }
`;

const IntroCopy = styled.p`
  max-width: 610px;
  margin-top: 1.2rem;
  color: ${props => props.theme.colors.textSecondary};
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.75;
`;

const ProjectControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  margin: 2.6rem 0 1.35rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(204, 214, 246, 0.14);

  @media (max-width: 680px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.85rem;
  }
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const FilterButton = styled.button`
  min-height: 40px;
  padding: 0.55rem 0.9rem;
  border: 1px solid ${props => props.$active ? 'rgba(100, 255, 218, 0.7)' : 'rgba(204, 214, 246, 0.16)'};
  border-radius: 999px;
  background: ${props => props.$active ? 'rgba(100, 255, 218, 0.12)' : 'transparent'};
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.textSecondary};
  font: 500 0.88rem ${props => props.theme.fonts.main};
  transition: background 160ms ease, border-color 160ms ease, color 160ms ease;

  &:hover {
    border-color: rgba(100, 255, 218, 0.55);
    color: ${props => props.theme.colors.primary};
  }
`;

const ProjectCount = styled.p`
  flex: 0 0 auto;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.85rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 1.2rem;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProjectCard = styled.article`
  min-width: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(204, 214, 246, 0.12);
  border-radius: 15px;
  background: linear-gradient(145deg, rgba(17, 34, 64, 0.98), rgba(14, 31, 55, 0.98));
  transition: border-color 180ms ease, transform 180ms ease, background 180ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(100, 255, 218, 0.42);
    background: ${props => props.theme.colors.backgroundLight};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover { transform: none; }
  }
`;

const ProjectImageFrame = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${props => props.$background || '#102941'};
  border-bottom: 1px solid rgba(204, 214, 246, 0.1);
`;

const ProjectImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${props => props.$fit || 'cover'};
  transition: transform 240ms ease;

  ${ProjectCard}:hover & { transform: scale(1.025); }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    ${ProjectCard}:hover & { transform: none; }
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25rem 1.3rem 1.15rem;
`;

const ProjectCategory = styled.p`
  margin-bottom: 0.4rem;
  color: ${props => props.theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.025em;
`;

const ProjectTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: 1.18rem;
  line-height: 1.35;
  font-weight: 650;
`;

const ProjectDescription = styled.p`
  margin-top: 0.65rem;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.91rem;
  line-height: 1.65;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;
  padding: 0;
  list-style: none;
`;

const Tag = styled.li`
  padding: 0.3rem 0.62rem;
  border: 1px solid rgba(100, 255, 218, 0.13);
  border-radius: 999px;
  background: rgba(100, 255, 218, 0.07);
  color: ${props => props.theme.colors.primarySoft};
  font-size: 0.72rem;
  line-height: 1.25;
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.1rem;
  margin-top: auto;
  padding-top: 1.15rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  min-height: 30px;
  color: ${props => props.theme.colors.text};
  font-size: 0.82rem;
  font-weight: 600;

  svg { color: ${props => props.theme.colors.primary}; }

  &:hover { color: ${props => props.theme.colors.primary}; }
`;

const InProgress = styled.span`
  margin-top: auto;
  padding-top: 1.1rem;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.8rem;
`;

const SkillsSection = styled.section`
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(204, 214, 246, 0.14);
`;

const SkillsHeading = styled.h2`
  color: ${props => props.theme.colors.white};
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  letter-spacing: -0.035em;
`;

const SkillsCopy = styled.p`
  margin-top: 0.5rem;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.95rem;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
  padding: 0;
  list-style: none;
`;

const Skill = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  min-height: 42px;
  padding: 0.55rem 0.8rem;
  border: 1px solid rgba(204, 214, 246, 0.14);
  border-radius: 10px;
  background: rgba(17, 34, 64, 0.68);
  color: ${props => props.theme.colors.text};
  font-size: 0.84rem;

  svg { color: ${props => props.theme.colors.primary}; }
`;

const EmptyState = styled.p`
  grid-column: 1 / -1;
  padding: 2rem;
  border: 1px dashed rgba(204, 214, 246, 0.22);
  border-radius: 14px;
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
`;

const filters = ['Todos', 'Sites', 'Apps', 'Automação', 'Ferramentas'];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const visibleProjects = useMemo(() => (
    activeFilter === 'Todos'
      ? projects
      : projects.filter(project => project.category === activeFilter)
  ), [activeFilter]);

  return (
    <Layout>
      <ProjectsContainer>
        <Content>
          <Intro>
            <Title>Projetos que saem do papel.</Title>
            <IntroCopy>
              Uma seleção de sites, aplicações e ferramentas criadas para resolver problemas reais e tornar ideias úteis no dia a dia.
            </IntroCopy>
          </Intro>

          <ProjectControls>
            <Filters role="group" aria-label="Filtrar projetos">
              {filters.map(filter => (
                <FilterButton
                  key={filter}
                  type="button"
                  $active={activeFilter === filter}
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </FilterButton>
              ))}
            </Filters>
            <ProjectCount aria-live="polite">
              {visibleProjects.length} {visibleProjects.length === 1 ? 'projeto' : 'projetos'}
            </ProjectCount>
          </ProjectControls>

          <ProjectsGrid>
            {visibleProjects.length ? visibleProjects.map(project => (
              <ProjectCard key={project.title}>
                <ProjectImageFrame $background={project.imageBackground}>
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    $fit={project.imageFit}
                  />
                </ProjectImageFrame>
                <ProjectContent>
                  <ProjectCategory>{project.category}</ProjectCategory>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  {project.tags?.length > 0 && (
                    <TagList aria-label={`Tecnologias e áreas de ${project.title}`}>
                      {project.tags.slice(0, 4).map(tag => <Tag key={tag}>{tag}</Tag>)}
                    </TagList>
                  )}
                  {(project.github || project.live) ? (
                    <ProjectLinks>
                      {project.live && project.live !== '#' && (
                        <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Abrir site de ${project.title}`}>
                          <FaExternalLinkAlt aria-hidden="true" /> Ver projeto
                        </ProjectLink>
                      )}
                      {project.github && project.github !== '#' && (
                        <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title} no GitHub`}>
                          <FaGithub aria-hidden="true" /> Código
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  ) : project.tags?.includes('Em desenvolvimento') ? (
                    <InProgress>Em desenvolvimento</InProgress>
                  ) : null}
                </ProjectContent>
              </ProjectCard>
            )) : <EmptyState>Nenhum projeto nesta categoria ainda.</EmptyState>}
          </ProjectsGrid>

          <SkillsSection aria-labelledby="skills-title">
            <SkillsHeading id="skills-title">O que uso para construir</SkillsHeading>
            <SkillsCopy>Tecnologias e ferramentas que fazem parte do meu trabalho.</SkillsCopy>
            <SkillsList>
              {skills.map(skill => (
                <Skill key={skill.name}>
                  <skill.icon size={18} aria-hidden="true" />
                  <span>{skill.name}</span>
                </Skill>
              ))}
            </SkillsList>
          </SkillsSection>
        </Content>
      </ProjectsContainer>
    </Layout>
  );
}

export default Projects;
