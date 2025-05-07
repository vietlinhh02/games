import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Fade, Slide } from 'react-awesome-reveal';

const FooterSection = styled.footer`
  padding: 3rem 2rem;
  background-color: #0a0a0a;
  border-top: 1px solid rgba(255, 77, 77, 0.3);
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ff4d4d;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(255, 77, 77, 0.7);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const FooterNavItem = styled(motion.a)`
  color: #ccc;
  text-decoration: none;
  font-size: 1rem;
  
  &:hover {
    color: #ff4d4d;
  }
`;

const Copyright = styled.p`
  color: #777;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const SocialIcon = styled(motion.a)`
  color: #ccc;
  font-size: 1.5rem;
  text-decoration: none;
  
  &:hover {
    color: #ff4d4d;
  }
`;

const CTASection = styled.div`
  background: rgba(255, 77, 77, 0.1);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 77, 77, 0.3);
  max-width: 600px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CTATitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const CTAText = styled.p`
  color: #aaa;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  background: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(255, 77, 77, 0.5);
  
  &:hover {
    background: #ff3333;
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContent>
        <Fade triggerOnce>
          <Logo>ALICE & DARKNESS</Logo>
        </Fade>
        
        <Slide direction="down" triggerOnce>
          <FooterNav>
            <FooterNavItem 
              href="#about"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Giới Thiệu
            </FooterNavItem>
            <FooterNavItem 
              href="#gameplay"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Gameplay
            </FooterNavItem>
            <FooterNavItem 
              href="#levels"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Các Màn Chơi
            </FooterNavItem>
            <FooterNavItem 
              href="#team"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Nhóm Phát Triển
            </FooterNavItem>
          </FooterNav>
        </Slide>
        
        <Fade triggerOnce>
          <SocialLinks>
            <SocialIcon 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-facebook"></i>
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-instagram"></i>
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-discord"></i>
            </SocialIcon>
          </SocialLinks>
        </Fade>
        
        <Slide direction="up" triggerOnce>
          <CTASection>
            <CTATitle>Sẵn sàng bước vào Arena?</CTATitle>
            <CTAText>
              Trở thành người thử nghiệm đầu tiên và nhận những phần quà độc quyền từ game!
            </CTAText>
            <CTAButton 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ĐĂNG KÝ NGAY
            </CTAButton>
          </CTASection>
        </Slide>
        
        <Fade delay={300} triggerOnce>
          <Copyright>
            &copy; {new Date().getFullYear()} Alice & Darkness. Tất cả quyền được bảo lưu.
          </Copyright>
        </Fade>
      </FooterContent>
    </FooterSection>
  );
};

export default Footer; 