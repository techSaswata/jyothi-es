'use client';

// Intersection Observer for scroll reveal animations
export function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Add 'active' class when element is in view
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        // Optional: remove the class when out of view for repeat animations
        // entry.target.classList.remove('active');
      }
    });
  }, {
    root: null, // viewport
    threshold: 0.1, // 10% of the item visible
    rootMargin: '0px 0px -50px 0px' // slightly earlier reveal
  });

  // Target all elements with the 'reveal' class
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    observer.observe(el);
  });

  return observer;
}

// Parallax effect for elements with the 'parallax' class
export function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  if (parallaxElements.length === 0) return;
  
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const offset = element.offsetTop;
      const yPos = -(scrollTop * speed) / 10;
      
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Initial calculation
  handleScroll();
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

// Mouse tracking effect for elements with the 'mouse-track' class
export function initMouseTracking() {
  const trackElements = document.querySelectorAll('.mouse-track');
  
  if (trackElements.length === 0) return;
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    
    trackElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const intensity = element.dataset.intensity || 0.05;
      
      const moveX = (clientX - centerX) * intensity;
      const moveY = (clientY - centerY) * intensity;
      
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };
}

// Animated counter for numbers
export function initCounters() {
  const counters = document.querySelectorAll('.counter');
  
  if (counters.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.dataset.count);
        const duration = parseInt(target.dataset.duration || 2000);
        let count = 0;
        const step = Math.ceil(countTo / (duration / 30)); // 30 FPS
        
        const updateCount = () => {
          count += step;
          if (count >= countTo) {
            target.textContent = countTo.toLocaleString();
            return;
          }
          
          target.textContent = count.toLocaleString();
          setTimeout(updateCount, 30);
        };
        
        updateCount();
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
  
  return observer;
}

// Typewriter effect
export function initTypewriter(element, text, speed = 50, callback = null) {
  if (!element) return;
  
  let i = 0;
  element.textContent = '';
  
  const typeNextChar = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeNextChar, speed);
    } else if (callback) {
      callback();
    }
  };
  
  typeNextChar();
}

// Particle background effect
export function initParticles(canvasId, color = '#1a56db', count = 100) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Set canvas to fill parent element
  const resize = () => {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  };
  
  window.addEventListener('resize', resize);
  resize();
  
  // Create particles
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      color,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25
    });
  }
  
  // Draw particles
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX = -particle.speedX;
      }
      
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY = -particle.speedY;
      }
    });
    
    requestAnimationFrame(draw);
  };
  
  draw();
  
  return () => {
    window.removeEventListener('resize', resize);
    // Cancel animation frame if needed
  };
}

// Create animated dots background pattern
export function initAnimatedDots() {
  const elements = document.querySelectorAll('.bg-animated-dots');
  
  if (elements.length === 0) return;
  
  elements.forEach(element => {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Make canvas fill parent element
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    
    element.appendChild(canvas);
    
    const resize = () => {
      canvas.width = element.offsetWidth;
      canvas.height = element.offsetHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Create dots
    const dotSize = 1;
    const spacing = 20;
    const rows = Math.ceil(canvas.height / spacing);
    const cols = Math.ceil(canvas.width / spacing);
    
    // Create animation frame
    let frame = 0;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const posX = x * spacing;
          const posY = y * spacing;
          
          // Add some oscillation
          const oscillation = Math.sin((frame + x * y) / 30) * 1.5;
          const size = dotSize + Math.max(0, oscillation);
          
          ctx.beginPath();
          ctx.arc(posX, posY, size, 0, Math.PI * 2);
          ctx.fillStyle = '#1a56db';
          ctx.globalAlpha = 0.2 + Math.abs(oscillation) / 10;
          ctx.fill();
        }
      }
      
      frame++;
      requestAnimationFrame(animate);
    };
    
    animate();
  });
  
  return () => {
    // Cleanup would ideally remove canvases, but since this is meant
    // to run for the lifetime of the page, we'll skip it
  };
}

// Create animated grid background pattern
export function initAnimatedGrid() {
  const elements = document.querySelectorAll('.bg-animated-grid');
  
  if (elements.length === 0) return;
  
  elements.forEach(element => {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Make canvas fill parent element
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    
    element.appendChild(canvas);
    
    const resize = () => {
      canvas.width = element.offsetWidth;
      canvas.height = element.offsetHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Grid properties
    const cellSize = 30;
    const rows = Math.ceil(canvas.height / cellSize);
    const cols = Math.ceil(canvas.width / cellSize);
    
    // Create animation frame
    let frame = 0;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = '#1a56db';
      ctx.lineWidth = 0.5;
      
      for (let y = 0; y <= rows; y++) {
        // Horizontal lines
        const yPos = y * cellSize;
        const waveOffset = Math.sin(frame / 100 + y / 10) * 2;
        
        ctx.beginPath();
        ctx.moveTo(0, yPos + waveOffset);
        
        for (let x = 0; x <= cols; x++) {
          const xPos = x * cellSize;
          const yWave = yPos + Math.sin(frame / 100 + x / 10 + y / 5) * 2;
          
          ctx.lineTo(xPos, yWave);
        }
        
        ctx.globalAlpha = 0.2;
        ctx.stroke();
      }
      
      for (let x = 0; x <= cols; x++) {
        // Vertical lines
        const xPos = x * cellSize;
        const waveOffset = Math.cos(frame / 100 + x / 10) * 2;
        
        ctx.beginPath();
        ctx.moveTo(xPos + waveOffset, 0);
        
        for (let y = 0; y <= rows; y++) {
          const yPos = y * cellSize;
          const xWave = xPos + Math.cos(frame / 100 + y / 10 + x / 5) * 2;
          
          ctx.lineTo(xWave, yPos);
        }
        
        ctx.globalAlpha = 0.2;
        ctx.stroke();
      }
      
      frame++;
      requestAnimationFrame(animate);
    };
    
    animate();
  });
  
  return () => {
    // Cleanup would remove canvases
  };
}

// Initialize hover effects
export function initHoverEffects() {
  // Hover lift effect
  const liftElements = document.querySelectorAll('.hover-lift');
  liftElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'translateY(-5px)';
      element.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      element.style.boxShadow = '0 10px 20px -10px rgba(0, 0, 0, 0.12)';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translateY(0)';
      element.style.boxShadow = '';
    });
  });
  
  // Hover glow effect
  const glowElements = document.querySelectorAll('.hover-glow');
  glowElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.boxShadow = '0 0 15px rgba(26, 86, 219, 0.4)';
      element.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
      element.style.transform = 'scale(1.02)';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.boxShadow = '';
      element.style.transform = 'scale(1)';
    });
  });
  
  // Hover scale effect
  const scaleElements = document.querySelectorAll('.hover-scale');
  scaleElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'scale(1.1)';
      element.style.transition = 'transform 0.3s ease';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)';
    });
  });
}

// Initialize all animations
export function initAllAnimations() {
  const scrollReveal = initScrollReveal();
  const parallax = initParallax();
  const mouseTracking = initMouseTracking();
  const counters = initCounters();
  const animatedDots = initAnimatedDots();
  const animatedGrid = initAnimatedGrid();
  const hoverEffects = initHoverEffects();
  
  return () => {
    // Clean up functions if needed
    if (scrollReveal) scrollReveal.disconnect();
    if (parallax) parallax();
    if (mouseTracking) mouseTracking();
    if (counters) counters.disconnect();
    // Other cleanups would go here
  };
}