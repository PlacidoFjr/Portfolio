import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #0a192f;
  color: #8892b0;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;