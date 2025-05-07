import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Fade, Slide } from 'react-awesome-reveal';
import { gameplayImage } from '../assets/images';

const AboutSection = styled.section`
  padding: 100px 2rem;
  background-color: #0a0a0a;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #fff;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #ff4d4d;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const ImageContent = styled(motion.div)`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(255, 77, 77, 0.3);
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom right, rgba(255, 77, 77, 0.3), transparent);
    pointer-events: none;
  }
`;

const Description = styled.p`
  color: #aaa;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const FeatureItem = styled(motion.li)`
  color: #ddd;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: '◉';
    color: #ff4d4d;
    margin-right: 10px;
    font-size: 1.2rem;
  }
`;

const About = () => {
  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <AboutSection id="about">
      <Fade triggerOnce>
        <SectionTitle>GIỚI THIỆU</SectionTitle>
      </Fade>
      
      <ContentWrapper>
        <Slide direction="left" triggerOnce>
          <TextContent>
            <Description>
              Alice & Darkness là game bắn súng sinh tồn hành động với bối cảnh đấu trường đổ nát giữa khu công nghiệp bỏ hoang.
              Người chơi sẽ phải tiêu diệt kẻ địch, tồn tại đến phút cuối cùng và khám phá bí ẩn đằng sau Arena.
            </Description>
            
            <Description>
              Với hệ thống AI học hành vi người chơi, vòng co Fog of Madness đầy căng thẳng và cốt truyện hấp dẫn, 
              Alice & Darkness hứa hẹn mang đến trải nghiệm game chưa từng có.
            </Description>
            
            <FeatureList>
              {['AI học hành vi người chơi', 'Vòng co (Fog of Madness)', 'Hệ thống vũ khí độc đáo', 'Cốt truyện xuyên suốt 5 màn chơi', 'Nhiều kết thúc khác nhau'].map((feature, i) => (
                <FeatureItem
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={featureVariants}
                >
                  {feature}
                </FeatureItem>
              ))}
            </FeatureList>
          </TextContent>
        </Slide>
        
        <Slide direction="right" triggerOnce>
          <ImageContent
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img src={gameplayImage} alt="Alice & Darkness Gameplay" />
          </ImageContent>
        </Slide>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About; 