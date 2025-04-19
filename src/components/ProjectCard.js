import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #64ffda;
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
`;

const ProjectTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
`;

function ProjectCard({ title, description, imageUrl }) {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectImage src={imageUrl} alt={title} />
      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectContent>
    </Card>
  );
}

export default ProjectCard;