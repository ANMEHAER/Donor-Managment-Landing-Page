document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
});

// intro-section-js 
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.learn-link');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      console.log('Link clicked: ' + link.textContent);
    });
  });
});

///////////////////////////////////
const fundTrack = document.querySelector('.fund-carousel-track');
const fundPrevBtn = document.querySelector('.fund-prev-btn');
const fundNextBtn = document.querySelector('.fund-next-btn');
let fundIndex = 0;

function fundGetGap() {
  if (window.innerWidth <= 576) return 16;
  if (window.innerWidth <= 768) return 20;
  if (window.innerWidth <= 992) return 30;
  if (window.innerWidth <= 1200) return 40;
  return 54;
}

function fundGetVisibleCards() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 992) return 2;
  return 2.5;
}

function fundSlide() {
  const fundCard = document.querySelector('.fund-card');
  if (!fundCard) return;
  const gap = fundGetGap();
  const fundCardWidth = fundCard.offsetWidth + gap;
  fundTrack.style.transform = `translateX(-${fundIndex * fundCardWidth}px)`;
}

fundNextBtn?.addEventListener('click', () => {
  const totalCards = document.querySelectorAll('.fund-card').length;
  if (fundIndex < totalCards - fundGetVisibleCards()) fundIndex++;
  fundSlide();
});

fundPrevBtn?.addEventListener('click', () => {
  if (fundIndex > 0) fundIndex--;
  fundSlide();
});

fundSlide();
window.addEventListener('resize', fundSlide);

// footer-section-js 

function setupAccordion() {
  // Select ALL column containers
  const collapsibleCols = document.querySelectorAll('.footer-columns > .col');

  collapsibleCols.forEach(col => {
    const heading = col.querySelector('h4');

    if (heading) {
      heading.addEventListener('click', () => {
        // We check the screen size inside the handler to support responsive resizing
        if (window.matchMedia('(max-width: 768px)').matches) {
          // Toggle the 'open' class on the parent column to trigger CSS transitions
          col.classList.toggle('open');
        }
      });
    }
  });

  // On window resize, ensure desktop view cleans up mobile classes
  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 769px)').matches) {
      collapsibleCols.forEach(col => {
        // Ensure 'open' class is removed on desktop so content is always visible via CSS reset
        col.classList.remove('open');
        // Also reset any active background state
        col.style.backgroundColor = 'transparent';
      });
    }
  });

  // Optional: Add active state using mouse events for better feel on mobile touch/click
  collapsibleCols.forEach(col => {
    const heading = col.querySelector('h4');
    if (heading) {
      heading.addEventListener('mousedown', () => {
        if (window.matchMedia('(max-width: 768px)').matches) {
          heading.style.backgroundColor = '#f0f0f0'; // Slight immediate visual feedback
        }
      });
      heading.addEventListener('mouseup', () => {
        if (window.matchMedia('(max-width: 768px)').matches) {
          // Use setTimeout to allow the accordion animation to start before resetting the color
          setTimeout(() => {
            heading.style.backgroundColor = 'transparent';
          }, 50);
        }
      });
      // Handle mouse leave/touch cancel
      heading.addEventListener('mouseleave', () => {
        if (window.matchMedia('(max-width: 768px)').matches) {
          heading.style.backgroundColor = 'transparent';
        }
      });
    }
  });
}

// Run the setup when the content is loaded
document.addEventListener('DOMContentLoaded', setupAccordion);




