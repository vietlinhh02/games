import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GameplaySection = styled.section`
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
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 77, 77, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 77, 77, 0.8);
    box-shadow: 0 15px 30px rgba(255, 77, 77, 0.2);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #ff4d4d;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
`;

const FeatureDescription = styled.p`
  color: #aaa;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
`;

const Gameplay = () => {
  const features = [
    {
      icon: '👁️',
      title: 'AI Học Hành Vi',
      description: 'Kẻ địch sẽ bắt chước cách chơi của bạn. Nếu bạn dùng súng bắn tỉa, chúng sẽ ẩn nấp và phản công từ xa.'
    },
    {
      icon: '🌫️',
      title: 'Fog of Madness',
      description: 'Mỗi 2 phút, khu vực an toàn thu hẹp lại, gây hiệu ứng hoảng loạn, giảm tầm nhìn và tăng độ khó.'
    },
    {
      icon: '⚡',
      title: 'Vũ Khí Độc Đáo',
      description: 'Từ súng điện gây sốc làm kẻ địch bất động đến lựu đạn axit phá hủy giáp và bẫy phân tử gây sát thương theo thời gian.'
    },
    {
      icon: '🎯',
      title: 'Mục Tiêu Sinh Tồn',
      description: 'Tiêu diệt 30 kẻ địch trong 10 phút và sống sót đến khi vòng an toàn co lại hoàn toàn.'
    },
    {
      icon: '🧠',
      title: 'Chiến Đấu Tâm Lý',
      description: 'Đối mặt với "bản sao" của chính mình - kẻ mang tính cách xấu xa nhất của bạn. Chiến đấu hoặc thuyết phục để thay đổi số phận.'
    },
    {
      icon: '🌱',
      title: 'Xây Dựng Nông Trại',
      description: 'Trong màn cuối, bạn sẽ phải trồng cây, xây nhà, và chống lại cơn mưa axit để tìm ra kẻ phản bội trong nhóm.'
    }
  ];

  return (
    <GameplaySection id="gameplay">
      <SectionTitle>GAMEPLAY</SectionTitle>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesContainer>
    </GameplaySection>
  );
};

export default Gameplay; 