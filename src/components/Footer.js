import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

const FooterContainer = styled.footer`
  padding: 4rem 1rem;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.5rem;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  font-family: ${props => props.theme.fonts.mono};
`;

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <Logo />
      <SocialLinks>
        <SocialIcon href="https://github.com/PlacidoFjr" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/placido-francisco-da-silva-junior-a09765242/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/placido_sjr/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="mailto:placidojunior34@gmail.com">
          <FaEnvelope />
        </SocialIcon>
      </SocialLinks>
      <Copyright>
          © {currentYear} Placido Francisco da Silva Junior. Todos os direitos reservados.
        </Copyright>
    </FooterContainer>
  );
}

export default Footer;
