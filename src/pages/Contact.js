import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background: #0a192f;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactForm = styled(motion.form)`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
`;

const Input = styled.input`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #64ffda;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #64ffda;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.2);
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #64ffda;
  color: #64ffda;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Title = styled(motion.h1)`
  color: #64ffda;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_42txvgd',
        'template_1q1ogx4',
        e.target,
        '3hJVCbwQwqXVfEjM2'
      );
      
      setStatus('Mensagem enviada com sucesso!');
      e.target.reset();
    } catch (error) {
      console.error('Erro:', error);
      setStatus('Erro ao enviar mensagem. Tente novamente.');
    }

    setLoading(false);
  };

  return (
    <ContactContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Entre em Contato
      </Title>
      
      <ContactForm
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Input 
          type="text" 
          name="name" 
          placeholder="Seu Nome" 
          required 
        />
        <Input 
          type="email" 
          name="email" 
          placeholder="Seu Email" 
          required 
        />
        <Input 
          type="text" 
          name="subject" 
          placeholder="Assunto" 
          required 
        />
        <TextArea 
          name="message" 
          placeholder="Sua Mensagem"
          required 
        />
        <Button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {loading ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
        {status && <p style={{ color: '#64ffda', textAlign: 'center' }}>{status}</p>}
      </ContactForm>
    </ContactContainer>
  );
}

export default Contact;