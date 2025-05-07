import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ff4d4d;
  text-shadow: 0 0 10px rgba(255, 77, 77, 0.7);
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    color: #ff4d4d;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>ALICE & DARKNESS</Logo>
      <NavMenu>
        <NavItem 
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Giới Thiệu
        </NavItem>
        <NavItem 
          href="#gameplay"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Gameplay
        </NavItem>
        <NavItem 
          href="#levels"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Các Màn Chơi
        </NavItem>
        <NavItem 
          href="#team"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Nhóm Phát Triển
        </NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header; 