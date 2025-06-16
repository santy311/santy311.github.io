// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Typing animation for the hero section
const typingText = document.querySelector(".typing-text");
const text = "Web3 Developer & Blockchain Engineer";
let charIndex = 0;

function typeText() {
  if (charIndex < text.length) {
    typingText.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  }
}

// Start typing animation when page loads
window.addEventListener("load", () => {
  typingText.textContent = "";
  typeText();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Parallax effect for the gradient sphere
document.addEventListener("mousemove", (e) => {
  const sphere = document.querySelector(".gradient-sphere");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  sphere.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
});

// Navbar background change on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 11, 14, 0.95)";
  } else {
    navbar.style.background = "rgba(10, 11, 14, 0.8)";
  }
});

// Add hover effect to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Add particle effect to the hero section
function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";

  // Random position
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  // Random size
  const size = Math.random() * 3 + 1;

  // Random opacity
  const opacity = Math.random() * 0.5 + 0.1;

  // Set styles
  particle.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: var(--accent-color);
        border-radius: 50%;
        opacity: ${opacity};
        pointer-events: none;
    `;

  document.querySelector(".hero").appendChild(particle);

  // Remove particle after animation
  setTimeout(() => {
    particle.remove();
  }, 3000);
}

// Create particles periodically
setInterval(createParticle, 200);

// Add this CSS to your style.css file
const style = document.createElement("style");
style.textContent = `
    .particle {
        animation: float 3s ease-in-out infinite;
    }
    
    @keyframes float {
        0% {
            transform: translateY(0) scale(1);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
