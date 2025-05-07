import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Fade, Slide } from 'react-awesome-reveal';
import { teamMember1, teamMember2, teamMember3, teamMember4, teamMember5 } from '../assets/images';

const TeamSection = styled.section`
  padding: 100px 2rem;
  background-color: #111;
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

const TeamDescription = styled.p`
  color: #aaa;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const TeamMember = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 77, 77, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 77, 77, 0.8);
    box-shadow: 0 15px 30px rgba(255, 77, 77, 0.2);
  }
`;

const MemberImage = styled.div`
  height: 250px;
  background-color: #333;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${TeamMember}:hover & img {
    transform: scale(1.1);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  }

  .member-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2rem;
    z-index: 2;
    color: #ff4d4d;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const MemberContent = styled.div`
  padding: 1.5rem;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  color: #ff4d4d;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const MemberRole = styled.p`
  color: #ddd;
  font-size: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const MemberDescription = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Team = () => {
  const teamMembers = [
    {
      name: "Trang",
      role: "Thiết kế nhân vật & vũ khí",
      description: "Chịu trách nhiệm thiết kế vũ khí, map đấu trường và code AI học hành vi của kẻ địch.",
      icon: "👾",
      image: teamMember1
    },
    {
      name: "Đạt",
      role: "Lập trình gameplay",
      description: "Phát triển hệ thống vòng co (Fog of Madness) và hiệu ứng hoảng loạn.",
      icon: "🎮",
      image: teamMember2
    },
    {
      name: "Nhung",
      role: "Thiết kế cốt truyện",
      description: "Thiết kế intro các màn chơi, cảnh mưa, lời thoại của Watcher và hiệu ứng đặc biệt.",
      icon: "📝",
      image: teamMember3
    },
    {
      name: "Viết Linh",
      role: "Lập trình hệ thống",
      description: "Code hệ thống vật phẩm, lời thoại và hiệu ứng trong các màn chơi.",
      icon: "💻",
      image: teamMember4
    },
    {
      name: "Trang",
      role: "Thiết kế puzzle & AI",
      description: "Thiết kế câu đố logic và phát triển AI phản ánh hành vi người chơi.",
      icon: "🧩",
      image: teamMember5
    }
  ];

  return (
    <TeamSection id="team">
      <Fade triggerOnce>
        <SectionTitle>NHÓM PHÁT TRIỂN</SectionTitle>
        <TeamDescription>
          Alice & Darkness được phát triển bởi nhóm sinh viên đam mê game, mang đến trải nghiệm game độc đáo kết hợp
          các yếu tố hành động, sinh tồn và tâm lý.
        </TeamDescription>
      </Fade>
      
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <Slide direction="up" delay={index * 100} triggerOnce key={index}>
            <TeamMember
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <MemberImage>
                <img src={member.image} alt={member.name} />
                <div className="member-icon">{member.icon}</div>
              </MemberImage>
              <MemberContent>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberDescription>{member.description}</MemberDescription>
              </MemberContent>
            </TeamMember>
          </Slide>
        ))}
      </TeamGrid>
    </TeamSection>
  );
};

export default Team; 