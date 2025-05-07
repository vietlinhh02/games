import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Fade, Slide } from 'react-awesome-reveal';
import { heroBackground } from '../assets/images';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), 
              url(${heroBackground}) center/cover no-repeat;
  text-align: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 0 0 20px rgba(255, 77, 77, 0.8);
  
  span {
    color: #ff4d4d;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Tagline = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 800px;
  margin-bottom: 2rem;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  background: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  box-shadow: 0 0 15px rgba(255, 77, 77, 0.5);
  
  &:hover {
    background: #ff3333;
  }
`;

const FloatingLight = styled(motion.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 77, 77, 0.7);
  box-shadow: 0 0 20px rgba(255, 77, 77, 0.9);
`;

// Tạo hiệu ứng bụi ánh sáng
const DustParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: rgba(255, 77, 77, ${props => props.opacity});
  border-radius: 50%;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  box-shadow: 0 0 ${props => props.size * 2}px rgba(255, 77, 77, 0.8);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const Hero = () => {
  // Tạo mảng các hạt bụi với thuộc tính ngẫu nhiên
  const particles = Array.from({ length: 30 }).map((_, index) => ({
    id: index,
    size: Math.random() * 3 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.2,
    duration: Math.random() * 20 + 10
  }));

  return (
    <HeroSection id="hero">
      <DustParticles>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            size={particle.size}
            top={particle.top}
            left={particle.left}
            opacity={particle.opacity}
            animate={{
              y: [0, -100, 100, 0],
              x: [0, 50, -50, 0],
              opacity: [particle.opacity, particle.opacity/2, particle.opacity]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </DustParticles>

      <FloatingLight
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        style={{ top: '20%', left: '10%' }}
      />
      <FloatingLight
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
        style={{ top: '70%', right: '20%' }}
      />
      
      <ContentWrapper>
        <Fade duration={800} triggerOnce>
          <Title>
            ALICE <span>& DARKNESS</span>
          </Title>
        </Fade>
        
        <Slide direction="up" duration={800} delay={300} triggerOnce>
          <Tagline>
            "Chào mừng đến với Alice & Darkness. Hãy khám phá bóng tối và tìm ra sự thật. Bạn đã sẵn sàng chưa?"
          </Tagline>
        </Slide>
        
        <Fade duration={800} delay={600} triggerOnce>
          <CTAButton 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            THAM GIA NGAY
          </CTAButton>
        </Fade>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero; 