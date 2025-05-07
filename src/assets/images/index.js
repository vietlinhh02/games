// Các hàm tạo hình ảnh placeholder ma mị
const generatePlaceholder = (width, height, text, type = 'standard') => {
  let svg = '';
  
  if (type === 'horror') {
    // Phong cách ma mị với giọt máu và hiệu ứng vết nứt
    svg =
     `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <radialGradient id="bloodGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stop-color="#660000" />
            <stop offset="90%" stop-color="#220000" />
          </radialGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ff0000" />
            <stop offset="100%" stop-color="#990000" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bloodGradient)"/>
        <rect width="100%" height="100%" fill="rgba(0,0,0,0.4)" filter="url(#noise)"/>
        <path d="M${width*0.2},${height*0.2} L${width*0.8},${height*0.3} L${width*0.7},${height*0.8} L${width*0.3},${height*0.7} Z" stroke="#550000" stroke-width="5" fill="none" opacity="0.5"/>
        <circle cx="${width*0.8}" cy="${height*0.7}" r="${width*0.02}" fill="#ff0000" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="${width*0.2}" cy="${height*0.3}" r="${width*0.01}" fill="#ff0000" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <text 
          x="50%" 
          y="50%" 
          font-family="Playfair Display, serif" 
          font-size="${width * 0.06}px" 
          text-anchor="middle" 
          dominant-baseline="middle"
          fill="url(#textGradient)"
          filter="url(#noise)"
          transform="rotate(-2)"
          stroke="#330000"
          stroke-width="1px">
          ${text}
        </text>
      </svg>
    `;
  } else if (type === 'maze') {
    // Phong cách mê cung
    svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <radialGradient id="mazeGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
            <stop offset="0%" stop-color="#113355" />
            <stop offset="100%" stop-color="#001122" />
          </radialGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#aaddff" />
            <stop offset="100%" stop-color="#6688aa" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#mazeGradient)"/>
        <path d="M${width*0.1},${height*0.1} L${width*0.9},${height*0.1} L${width*0.9},${height*0.9} L${width*0.1},${height*0.9} Z" stroke="#447788" stroke-width="2" fill="none" opacity="0.6"/>
        <path d="M${width*0.3},${height*0.3} L${width*0.7},${height*0.3} L${width*0.7},${height*0.7} L${width*0.3},${height*0.7} Z" stroke="#447788" stroke-width="2" fill="none" opacity="0.6"/>
        <path d="M${width*0.1},${height*0.3} L${width*0.3},${height*0.3}" stroke="#447788" stroke-width="2" opacity="0.6"/>
        <path d="M${width*0.7},${height*0.3} L${width*0.9},${height*0.3}" stroke="#447788" stroke-width="2" opacity="0.6"/>
        <path d="M${width*0.1},${height*0.7} L${width*0.3},${height*0.7}" stroke="#447788" stroke-width="2" opacity="0.6"/>
        <path d="M${width*0.7},${height*0.7} L${width*0.9},${height*0.7}" stroke="#447788" stroke-width="2" opacity="0.6"/>
        <rect width="100%" height="100%" fill="rgba(0,0,0,0.2)" filter="url(#noise)"/>
        <text 
          x="50%" 
          y="50%" 
          font-family="Playfair Display, serif" 
          font-size="${width * 0.05}px" 
          text-anchor="middle" 
          dominant-baseline="middle"
          fill="url(#textGradient)"
          filter="url(#noise)">
          ${text}
        </text>
      </svg>
    `;
  } else if (type === 'ocean') {
    // Phong cách biển đen
    svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#000033" />
            <stop offset="100%" stop-color="#000011" />
          </linearGradient>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#0066aa" stop-opacity="0.2" />
            <stop offset="50%" stop-color="#0099dd" stop-opacity="0.3" />
            <stop offset="100%" stop-color="#0066aa" stop-opacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#oceanGradient)"/>
        <rect width="100%" height="100%" fill="rgba(0,0,0,0.3)" filter="url(#noise)"/>
        
        <path d="M0,${height*0.7} Q${width*0.25},${height*0.6} ${width*0.5},${height*0.7} T${width},${height*0.7}" fill="url(#waveGradient)" opacity="0.5">
          <animate attributeName="d" values="M0,${height*0.7} Q${width*0.25},${height*0.6} ${width*0.5},${height*0.7} T${width},${height*0.7};M0,${height*0.7} Q${width*0.25},${height*0.8} ${width*0.5},${height*0.7} T${width},${height*0.7};M0,${height*0.7} Q${width*0.25},${height*0.6} ${width*0.5},${height*0.7} T${width},${height*0.7}" dur="10s" repeatCount="indefinite" />
        </path>
        
        <path d="M0,${height*0.8} Q${width*0.25},${height*0.7} ${width*0.5},${height*0.8} T${width},${height*0.8}" fill="url(#waveGradient)" opacity="0.3">
          <animate attributeName="d" values="M0,${height*0.8} Q${width*0.25},${height*0.7} ${width*0.5},${height*0.8} T${width},${height*0.8};M0,${height*0.8} Q${width*0.25},${height*0.9} ${width*0.5},${height*0.8} T${width},${height*0.8};M0,${height*0.8} Q${width*0.25},${height*0.7} ${width*0.5},${height*0.8} T${width},${height*0.8}" dur="8s" repeatCount="indefinite" />
        </path>
        
        <text 
          x="50%" 
          y="50%" 
          font-family="Playfair Display, serif" 
          font-size="${width * 0.05}px" 
          text-anchor="middle" 
          dominant-baseline="middle"
          fill="#aaddff"
          filter="url(#noise)">
          ${text}
        </text>
      </svg>
    `;
  } else if (type === 'farm') {
    // Phong cách trang trại ảo ảnh
    svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <linearGradient id="farmGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#225500" />
            <stop offset="100%" stop-color="#113300" />
          </linearGradient>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#660000" />
            <stop offset="100%" stop-color="#330000" />
          </linearGradient>
        </defs>
        <rect width="100%" height="${height*0.6}" fill="url(#skyGradient)"/>
        <rect width="100%" height="${height*0.4}" y="${height*0.6}" fill="url(#farmGradient)"/>
        <rect width="100%" height="100%" fill="rgba(0,0,0,0.2)" filter="url(#noise)"/>
        
        <path d="M${width*0.7},${height*0.6} L${width*0.9},${height*0.6} L${width*0.8},${height*0.5} Z" fill="#332200" stroke="#221100" />
        <path d="M${width*0.4},${height*0.6} L${width*0.6},${height*0.6} L${width*0.5},${height*0.5} Z" fill="#332200" stroke="#221100" />
        <path d="M${width*0.1},${height*0.6} L${width*0.3},${height*0.6} L${width*0.2},${height*0.5} Z" fill="#332200" stroke="#221100" />
        
        <circle cx="${width*0.8}" cy="${height*0.2}" r="${width*0.05}" fill="#ff3300" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.6;0.8" dur="4s" repeatCount="indefinite" />
        </circle>
        
        <text 
          x="50%" 
          y="50%" 
          font-family="Playfair Display, serif" 
          font-size="${width * 0.05}px" 
          text-anchor="middle" 
          dominant-baseline="middle"
          fill="#ffeecc"
          filter="url(#noise)">
          ${text}
        </text>
      </svg>
    `;
  } else if (type === 'tower') {
    // Phong cách tòa tháp
    svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <linearGradient id="towerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#440044" />
            <stop offset="100%" stop-color="#220022" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#towerGradient)"/>
        <rect width="100%" height="100%" fill="rgba(0,0,0,0.3)" filter="url(#noise)"/>
        
        <path d="M${width*0.4},${height*0.8} L${width*0.4},${height*0.3} L${width*0.6},${height*0.3} L${width*0.6},${height*0.8} Z" fill="#330033" stroke="#550055" stroke-width="2" />
        <path d="M${width*0.35},${height*0.3} L${width*0.65},${height*0.3} L${width*0.5},${height*0.1} Z" fill="#440044" stroke="#550055" stroke-width="2" />
        
        <circle cx="${width*0.5}" cy="${height*0.5}" r="${width*0.03}" fill="#ff00ff" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <text 
          x="50%" 
          y="50%" 
          font-family="Playfair Display, serif" 
          font-size="${width * 0.04}px" 
          text-anchor="middle" 
          dominant-baseline="middle"
          fill="#ff00ff"
          filter="url(#noise)">
          ${text}
        </text>
      </svg>
    `;
  } else if (type === 'team') {
    // Phong cách thành viên đội
    svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <radialGradient id="teamGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stop-color="#333333" />
            <stop offset="100%" stop-color="#111111" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#teamGradient)"/>
        <rect width="100%" height="100%" fill="rgba(0,0,0,0.3)" filter="url(#noise)"/>
        
        <circle cx="${width*0.5}" cy="${height*0.3}" r="${width*0.15}" fill="#222222" stroke="#444444" stroke-width="2" />
        <path d="M${width*0.5},${height*0.45} Q${width*0.5},${height*0.8} ${width*0.5},${height*0.8}" stroke="#444444" stroke-width="8" stroke-linecap="round" />
        
        <text 
          x="50%" 
          y="30%" 
          font-family="Playfair Display, serif" 
          font-size="${width * 0.1}px" 
          text-anchor="middle" 
          dominant-baseline="middle"
          fill="#ff4d4d">
          ${text.split(' ')[0]}
        </text>
        
        <text 
          x="50%" 
          y="85%" 
          font-family="Playfair Display, serif" 
          font-size="${width * 0.06}px" 
          text-anchor="middle" 
          dominant-baseline="middle"
          fill="#dddddd">
          ${text.split(' ').length > 1 ? text.split(' ').slice(1).join(' ') : ''}
        </text>
      </svg>
    `;
  } else {
    // Standard placeholder
    svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#111" />
            <stop offset="100%" stop-color="#333" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <text 
          x="50%" 
          y="50%" 
          font-family="Playfair Display, serif" 
          font-size="${width * 0.06}px" 
          text-anchor="middle" 
          dominant-baseline="middle"
          fill="#ff4d4d">
          ${text}
        </text>
      </svg>
    `;
  }
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

// Hero background
export const heroBackground = generatePlaceholder(1200, 800, 'Alice & Darkness', 'horror');

// Game screenshots
export const gameplayImage = generatePlaceholder(600, 400, 'Gameplay', 'horror');
export const level1Image = generatePlaceholder(600, 400, 'Alice and Darkness', 'horror');
export const level2Image = generatePlaceholder(600, 400, 'Mê Cung Ký Ức', 'maze');
export const level3Image = generatePlaceholder(600, 400, 'Biển Ký Ức', 'ocean');
export const level4Image = generatePlaceholder(600, 400, 'Nông Trại Ảo Ảnh', 'farm');
export const level5Image = generatePlaceholder(600, 400, 'Tòa Tháp Watcher', 'tower');

// Team members
export const teamMember1 = generatePlaceholder(300, 300, '👾 Trang', 'team');
export const teamMember2 = generatePlaceholder(300, 300, '🎮 Đạt', 'team');
export const teamMember3 = generatePlaceholder(300, 300, '📝 Nhung', 'team');
export const teamMember4 = generatePlaceholder(300, 300, '💻 Viết Linh', 'team');
export const teamMember5 = generatePlaceholder(300, 300, '👾 Trang', 'team'); 