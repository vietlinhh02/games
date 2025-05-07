import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade, Slide } from 'react-awesome-reveal';
import { level1Image, level2Image, level3Image, level4Image, level5Image } from '../assets/images';

const LevelsSection = styled.section`
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

const LevelTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const LevelTab = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  background: ${props => props.active ? '#ff4d4d' : 'transparent'};
  color: #fff;
  border: 2px solid ${props => props.active ? '#ff4d4d' : 'rgba(255, 77, 77, 0.3)'};
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#ff4d4d' : 'rgba(255, 77, 77, 0.2)'};
    border-color: #ff4d4d;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
  }
`;

const LevelContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 77, 77, 0.2);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const LevelContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const LevelImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
    pointer-events: none;
  }
`;

const LevelInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LevelTitle = styled.h3`
  font-size: 2.2rem;
  color: #ff4d4d;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #ff4d4d;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const LevelQuote = styled.blockquote`
  font-style: italic;
  color: #ddd;
  border-left: 3px solid #ff4d4d;
  padding-left: 1rem;
  margin: 1.5rem 0;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const LevelDescription = styled.p`
  color: #aaa;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const LevelSectionTitle = styled.h4`
  color: #ff4d4d;
  font-size: 1.3rem;
  margin: 1.5rem 0 1rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #ff4d4d;
    margin-right: 10px;
    transform: rotate(45deg);
  }
`;

const LevelDetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
`;

const LevelDetailItem = styled(motion.li)`
  color: #ddd;
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  
  &:before {
    content: '◉';
    color: #ff4d4d;
    margin-right: 10px;
    font-size: 1.2rem;
  }
`;

const TabIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
`;

const TabDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#ff4d4d' : 'rgba(255, 77, 77, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#ff4d4d' : 'rgba(255, 77, 77, 0.5)'};
  }
`;

const Levels = () => {
  const [activeLevel, setActiveLevel] = useState(1);
  
  const levels = [
    {
      id: 1,
      title: "Alice & Darkness",
      quote: "Chào mừng đến với Alice & Darkness. Chỉ có 1 người sống sót. Hãy chứng minh bạn xứng đáng!",
      description: "Một đấu trường đổ nát giữa khu công nghiệp bỏ hoang. Tiêu diệt 30 kẻ địch trong 10 phút và sống sót đến khi vòng an toàn co lại hoàn toàn. Đây là nơi chỉ có luật của kẻ mạnh và sự sống còn, không khoan nhượng.",
      details: [
        "Bối cảnh: Tường bê tông nứt vỡ, dây điện rũ xuống, đống sắt vụn cháy xém.",
        "Trời mưa tầm tã, sấm sét liên tục, ánh đèn neon vỡ phát ra tia sáng đỏ chớp tắt.",
        "Mỗi 2 phút, khu vực an toàn thu hẹp lại, gây hiệu ứng hoảng loạn.",
        "Kẻ địch sẽ bắt chước cách chơi của người dùng, phân tích từng hành động."
      ],
      mechanics: [
        "AI học hỏi: Kẻ địch sẽ ghi nhớ và bắt chước các mô hình tấn công của người chơi.",
        "Hệ thống thời tiết: Mưa giảm tầm nhìn, sấm sét có thể giật điện người chơi gần cột điện.",
        "Vòng co Fog of Madness: Không chỉ thu hẹp arena mà còn gây hiệu ứng ảo giác.",
        "Tài nguyên hạn chế: Đạn dược, thuốc hồi phục chỉ xuất hiện ở những khu vực nguy hiểm."
      ],
      rewards: [
        "Vũ khí đặc biệt: Dao Guillotine - vũ khí cận chiến với khả năng chém đứt chi.",
        "Trang bị: Mặt nạ độc - giúp nhìn rõ trong Fog of Madness.",
        "Kỹ năng: Rage Mode - tăng sức mạnh tỉ lệ thuận với máu bị mất.",
        "Mở khóa: Hồi ức của Watcher - Mảnh 1/5 để hiểu rõ về tổ chức điều hành trò chơi."
      ],
      image: level1Image
    },
    {
      id: 2,
      title: "Mê Cung Ký Ức",
      quote: "Để thoát khỏi đây, bạn phải giải mã quá khứ. Hãy cẩn thận... ký ức có thể giết bạn.",
      description: "Một mê cung hình học kỳ lạ, nơi mọi bức tường đều phản chiếu ký ức của nhân vật. Giải 3 câu đố để mở cánh cổng tiếp theo, mỗi lời giải sẽ mở ra một mảnh ghép về quá khứ bí ẩn của nhân vật chính.",
      details: [
        "Tường làm bằng gương vỡ, sàn là ma trận ánh sáng xanh lá và tím thay đổi theo bước chân.",
        "Câu đố 1: Ghép hình ký ức - sắp xếp các mảnh gương vỡ để tạo thành một ký ức hoàn chỉnh.",
        "Câu đố 2: Giải mã nhật ký - nhật ký của một nhân vật đã chết chứa mật mã về lối thoát.",
        "Câu đố 3: Kích hoạt cơ quan - di chuyển các hình khối để tạo đường đi cho tia sáng ký ức."
      ],
      mechanics: [
        "Hiệu ứng tâm lý: Căng thẳng tăng dần theo thời gian, gây ảo giác và ảo thanh.",
        "Phản chiếu ký ức: Những mảnh gương vỡ sẽ phát lại các khoảnh khắc trong quá khứ của người chơi.",
        "Thời gian phi tuyến: Đôi khi người chơi sẽ bước vào không gian mà thời gian chạy ngược.",
        "Độ khó tăng dần: Mỗi câu đố giải xong sẽ làm mê cung phức tạp hơn, thêm các lớp mới."
      ],
      rewards: [
        "Vũ khí đặc biệt: Gương Vỡ - Dùng mảnh gương làm vũ khí ném, có thể bật từ tường.",
        "Trang bị: Kính Thấu Thị - Nhìn xuyên tường trong phạm vi giới hạn.",
        "Kỹ năng: Dịch Chuyển - Khả năng nhảy qua gương đến vị trí khác trong mê cung.",
        "Mở khóa: Hồi ức của Watcher - Mảnh 2/5, tiết lộ về thí nghiệm tâm lý của tổ chức."
      ],
      image: level2Image
    },
    {
      id: 3,
      title: "Biển Ký Ức",
      quote: "Bạn sợ điều gì nhất? Hãy đối mặt với nó... hoặc bị nhấn chìm.",
      description: "Một biển ký ức đen tối, nơi mọi con sóng đều là hình ảnh từ quá khứ của nhân vật. Chiến đấu với bản sao của chính mình — kẻ mang tính cách xấu xa nhất của người chơi, phản ánh mọi lựa chọn từ đầu game đến giờ.",
      details: [
        "Sóng biển phát ra ánh sáng mờ ảo xanh biếc, phản chiếu ký ức đau thương của người chơi.",
        "Nếu người chơi hung hăng, bản sao sẽ tấn công liên tục không ngừng nghỉ.",
        "Nếu người chơi ích kỷ, bản sao sẽ lừa gạt và phản bội, tạo ra các cạm bẫy giả.",
        "Người chơi có thể chọn chiến đấu hoặc thuyết phục bản sao thay đổi qua hệ thống đối thoại sâu."
      ],
      mechanics: [
        "AI phân tích tâm lý: Bản sao sẽ phân tích mọi lựa chọn trước đó của người chơi để tìm điểm yếu.",
        "Hệ thống đối thoại: Người chơi có thể thuyết phục bản sao thay vì chiến đấu, mở ra kết thúc khác.",
        "Cơ chế sóng: Sóng liên tục dâng cao, tạo áp lực thời gian, buộc người chơi phải quyết định nhanh.",
        "Thích ứng hình thái: Bản sao có thể thay đổi hình dạng dựa trên lựa chọn của người chơi."
      ],
      rewards: [
        "Vũ khí đặc biệt: Móng Vuốt Thủy Triều - Vũ khí cận chiến có khả năng điều khiển nước.",
        "Trang bị: Áo Choàng Phản Chiếu - Phản lại một phần sát thương nhận vào.",
        "Kỹ năng: Dung Hợp - Khả năng hấp thụ phẩm chất tốt từ bản sao nếu thuyết phục thành công.",
        "Mở khóa: Hồi ức của Watcher - Mảnh 3/5, tiết lộ về mục đích của Alice & Darkness."
      ],
      image: level3Image
    },
    {
      id: 4,
      title: "Nông Trại Ảo Ảnh",
      quote: "Bạn có 15 phút để xây dựng nông trại. Nhưng hãy cẩn thận... kẻ phản bội đang ẩn nấp.",
      description: "Một nông trại tươi sáng giữa thế giới u ám, nơi mọi thứ đều mang vẻ lạc quan giả tạo. Trồng cây, xây nhà, thu hoạch tài nguyên và chống lại cơn mưa axit. Đây là bài kiểm tra về khả năng quản lý tài nguyên và phát hiện mối đe dọa.",
      details: [
        "Cảnh đồng lúa vàng óng, cây cối xanh mướt, nhưng phía xa là bầu trời đỏ rực với sấm chớp đáng sợ.",
        "Mỗi 3 phút, mưa axit rơi, gây sát thương liên tục nếu không có nhà trú ẩn hoặc dụng cụ bảo vệ.",
        "Kẻ phản bội ngầm phá hoại (đốt cây, ăn trộm hạt giống, phá nhà) và có thể là bất kỳ NPC nào.",
        "Người chơi phải phát hiện và xử lý kẻ phản bội trước khi quá muộn, qua việc quan sát hành vi."
      ],
      mechanics: [
        "Hệ thống sinh thái: Cây cối phát triển theo thời gian thực, cần được chăm sóc để sinh lợi.",
        "Cơ chế thời tiết: Mưa axit tăng cường độ theo thời gian, cuối cùng có thể phá hủy mọi công trình.",
        "AI xã hội: NPC có mối quan hệ và hành vi phức tạp, người chơi cần quan sát để tìm kẻ phản bội.",
        "Xây dựng phòng thủ: Người chơi có thể xây dựng hệ thống bẫy và phòng thủ chống lại kẻ phản bội."
      ],
      rewards: [
        "Vũ khí đặc biệt: Liềm Gặt - Vũ khí cận chiến với khả năng thu hoạch tài nguyên nhanh.",
        "Trang bị: Áo Khoác Chống Axit - Bảo vệ khỏi mưa axit và các chất độc hại.",
        "Kỹ năng: Nông Dân Kiệt Xuất - Tăng tốc độ xây dựng và thu hoạch tài nguyên.",
        "Mở khóa: Hồi ức của Watcher - Mảnh 4/5, tiết lộ về quá trình chọn lựa thí sinh."
      ],
      image: level4Image
    },
    {
      id: 5,
      title: "Tòa Tháp Watcher",
      quote: "Bạn đã đến đây. Hãy chọn... hy sinh hay thống trị?",
      description: "Tòa tháp của tổ chức The Watcher — nơi điều khiển mọi trò chơi và tâm trí của nhân vật. Đột nhập vào phòng điều khiển và đưa ra lựa chọn cuối cùng, quyết định số phận của tất cả người tham gia và chính bản thân mình.",
      details: [
        "Kiến trúc hỗn loạn: Phối hợp các yếu tố từ 4 màn trước, tạo thành mê cung phi logic, thách thức trí nhớ.",
        "Sử dụng 4 vật phẩm từ các màn trước để mở khóa hệ thống điều khiển trung tâm của The Watcher.",
        "The Watcher xuất hiện dưới dạng một thực thể đa hình thái, có thể biến thành bất kỳ nhân vật nào đã gặp.",
        "Sau khi đánh bại The Watcher, người chơi phải đưa ra lựa chọn: Phá hủy hệ thống, Thay thế Watcher hoặc Xây dựng thế giới mới."
      ],
      mechanics: [
        "Tổng hợp cơ chế: Kết hợp tất cả cơ chế từ các màn trước, đòi hỏi người chơi sử dụng mọi kỹ năng đã học.",
        "Hệ thống phán xét: Mọi lựa chọn từ đầu game đến giờ sẽ ảnh hưởng đến các tương tác với The Watcher.",
        "Đa kết thúc: 7 kết thúc khác nhau tùy thuộc vào lựa chọn cuối cùng và cách hành xử suốt game.",
        "Boss biến đổi: The Watcher thay đổi hình thái và chiến thuật dựa trên cách chơi của người chơi."
      ],
      rewards: [
        "Kết thúc 1: Người Hủy Diệt - Phá hủy hệ thống, giải thoát tất cả người tham gia.",
        "Kết thúc 2: Người Kế Vị - Trở thành Watcher mới, điều hành trò chơi theo cách riêng.",
        "Kết thúc 3: Người Kiến Tạo - Xây dựng thế giới mới, tạo ra một hệ thống công bằng hơn.",
        "Kết thúc bí mật: Chỉ mở khóa nếu thu thập đủ 5/5 mảnh hồi ức của Watcher và đáp ứng điều kiện đặc biệt."
      ],
      image: level5Image
    }
  ];
  
  const currentLevel = levels.find(level => level.id === activeLevel);
  
  const detailVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };
  
  return (
    <LevelsSection id="levels">
      <Fade triggerOnce>
        <SectionTitle>MÀN CHƠI</SectionTitle>
      </Fade>
      
      <LevelTabs>
        {levels.map(level => (
          <LevelTab
            key={level.id}
            active={activeLevel === level.id}
            onClick={() => setActiveLevel(level.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {level.title}
          </LevelTab>
        ))}
      </LevelTabs>
      
      <AnimatePresence mode="wait">
        <LevelContent
          key={activeLevel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <LevelContentGrid>
            <LevelImageWrapper>
              <img src={currentLevel.image} alt={currentLevel.title} />
            </LevelImageWrapper>
            
            <LevelInfoContainer>
              <LevelTitle>{currentLevel.title}</LevelTitle>
              <LevelQuote>"{currentLevel.quote}"</LevelQuote>
              <LevelDescription>{currentLevel.description}</LevelDescription>
              
              <LevelSectionTitle>Đặc điểm</LevelSectionTitle>
              <LevelDetailsList>
                {currentLevel.details.map((detail, index) => (
                  <LevelDetailItem
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={detailVariants}
                  >
                    {detail}
                  </LevelDetailItem>
                ))}
              </LevelDetailsList>
              
              <LevelSectionTitle>Cơ chế đặc biệt</LevelSectionTitle>
              <LevelDetailsList>
                {currentLevel.mechanics.map((mechanic, index) => (
                  <LevelDetailItem
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={detailVariants}
                  >
                    {mechanic}
                  </LevelDetailItem>
                ))}
              </LevelDetailsList>
              
              <LevelSectionTitle>Phần thưởng</LevelSectionTitle>
              <LevelDetailsList>
                {currentLevel.rewards.map((reward, index) => (
                  <LevelDetailItem
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={detailVariants}
                  >
                    {reward}
                  </LevelDetailItem>
                ))}
              </LevelDetailsList>
            </LevelInfoContainer>
          </LevelContentGrid>
        </LevelContent>
      </AnimatePresence>
      
      <TabIndicator>
        {levels.map(level => (
          <TabDot 
            key={level.id} 
            active={activeLevel === level.id}
            onClick={() => setActiveLevel(level.id)}
          />
        ))}
      </TabIndicator>
    </LevelsSection>
  );
};

export default Levels; 