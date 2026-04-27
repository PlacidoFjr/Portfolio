import { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import Layout from '../components/Layout';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled(motion.h2)`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.1rem;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 500px;
`;

const ContactForm = styled(motion.form)`
  width: 100%;
  max-width: 600px;
  background: ${props => props.theme.colors.backgroundLight};
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 1rem;
  background: ${props => props.theme.colors.background};
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 4px;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  transition: ${props => props.theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background: rgba(100, 255, 218, 0.05);
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.1);
  }

  &:invalid:not(:placeholder-shown) {
    border-color: #dc3545;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background: ${props => props.theme.colors.background};
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 4px;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: ${props => props.theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background: rgba(100, 255, 218, 0.05);
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.1);
  }

  &:invalid:not(:placeholder-shown) {
    border-color: #dc3545;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1.2rem;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.mono};
  font-weight: 500;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1rem;
  transition: ${props => props.theme.transitions.default};

  &:hover:not(:disabled) {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  width: 100%;
  max-width: 600px;
  
  ${props => props.type === 'success' ? `
    background: rgba(40, 167, 69, 0.1);
    color: #28a745;
    border: 1px solid rgba(40, 167, 69, 0.2);
  ` : `
    background: rgba(220, 53, 69, 0.1);
    color: #dc3545;
    border: 1px solid rgba(220, 53, 69, 0.2);
  `}
`;

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        'service_42txvgd',
        'template_1q1ogx4',
        formRef.current,
        '3hJVCbwQwqXVfEjM2'
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <ContactContainer>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Entre em Contato
        </SectionTitle>
        
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Estou sempre aberto a novas oportunidades e parcerias. 
          Sinta-se à vontade para me enviar uma mensagem!
        </Subtitle>

        <ContactForm
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FormGroup>
            <Label htmlFor="user_name">Nome</Label>
            <Input 
              type="text" 
              id="user_name" 
              name="user_name" 
              required 
              placeholder="Seu nome"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="user_email">E-mail</Label>
            <Input 
              type="email" 
              id="user_email" 
              name="user_email" 
              required 
              placeholder="seu@email.com"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Mensagem</Label>
            <TextArea 
              id="message" 
              name="message" 
              required 
              placeholder="Como posso ajudar?"
            />
          </FormGroup>

          <SubmitButton 
            type="submit" 
            disabled={loading}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? 'Enviando...' : (
              <>
                Enviar Mensagem <FaPaperPlane />
              </>
            )}
          </SubmitButton>
        </ContactForm>

        <AnimatePresence>
          {status === 'success' && (
            <StatusMessage 
              type="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <FaCheckCircle /> Mensagem enviada com sucesso! Entrarei em contato em breve.
            </StatusMessage>
          )}
          {status === 'error' && (
            <StatusMessage 
              type="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <FaExclamationCircle /> Ops! Algo deu errado. Por favor, tente novamente mais tarde.
            </StatusMessage>
          )}
        </AnimatePresence>
      </ContactContainer>
    </Layout>
  );
}

export default Contact;
