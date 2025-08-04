document.addEventListener("DOMContentLoaded", () => {
  // cards

  gsap.registerPlugin(ScrollTrigger);

  const cards = gsap.utils.toArray('.feature-card');
  const section = document.querySelector('.section');
  const canvas = document.querySelector('#iphone-canvas');
  const ctx = canvas.getContext('2d');
  
 
// Iphone Animation


  // Set initial canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const framesPerCard = 60;
  const totalCards = cards.length;
  const totalFrames = framesPerCard * totalCards;

  // Preload images array
  const images = [];
  let imagesLoaded = 0;

  // Generate frame URL
  const currentFrame = (index) => 
    `assets/img/Iphone/${index.toString().padStart(4, '0')}.png`;

  // Preload images
  function preloadImages() {
    return new Promise((resolve) => {
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        img.src = currentFrame(i); // Adjust path & naming here
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === totalFrames) {
            resolve();
          }
        };
        img.onerror = () => {
          console.warn('Failed to load image:', img.src);
          imagesLoaded++;
          if (imagesLoaded === totalFrames) {
            resolve();
          }
        };
        images.push(img);
      }
    });
  }

  // Render function
  function drawFrame(index) {
    const img = images[index];
    if (!img || img.naturalWidth === 0) return; // Check if the image is broken
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }


  // Resize canvas while maintaining aspect ratio
  function resizeCanvas() {
    const aspectRatio = 1458 / 820;
    const windowAspectRatio = window.innerWidth / window.innerHeight;

    if (windowAspectRatio > aspectRatio) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerWidth / aspectRatio;
    } else {
      canvas.height = window.innerHeight;
      canvas.width = window.innerHeight * aspectRatio;
    }
    preloadImages(0, totalFrames - 1);
    ScrollTrigger.refresh(); // Recalculate trigger positions
  }
  window.addEventListener('resize', resizeCanvas);

  // Animate after images loaded
preloadImages().then(() => {
  const obj = { frame: 0 };

  gsap.to(obj, {
    frame: totalFrames - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: "#features",
      start: "top top",
      end: "+=" + (totalFrames * 8), // More frames = longer scroll
      scrub: 0.5,
      pin: true,
    },
    onUpdate: () => {
      const f = Math.floor(obj.frame);
      drawFrame(f);

      // Activate correct card
      const activeIndex = Math.min(totalCards - 1, Math.floor(f / framesPerCard));
      cards.forEach((card, i) => {
        card.classList.toggle('active', i === activeIndex);
      });
    }
  });

  drawFrame(0);
});
})





  /////////////////////
  //ALTERNATIVE ANIMATION
  /////////////////////
   // // one card at a time centered
  // cards.forEach((card, index) => {
  //   let direction = index % 2 === 0 ? 100 : -100;
    
  //   ScrollTrigger.create({
  //     trigger: card,
  //     start: "center center",
  //     end: "200%",
  //     toggleActions: "play none none reset",
  //     pin: true,
  //     pinSpacing: false,
  //     markers: true,
  //     onEnter: () => {
  //       gsap.to(cards, { 
  //         opacity: 0,
  //         y: direction, 
  //         zIndex: 0,
  //         durration: 1,
  //         pinSpacing: false,
  //         pin: true 
  //       }); // Hide all cards
  //       gsap.to(card, { 
  //         opacity: 1,
  //         y: 0, 
  //         zIndex: 10,
  //         pinSpacing: false,
  //         pin: true 
  //       }); // Show current card
  //     },
  //     onEnterBack: () => {
  //       gsap.to(cards, { 
  //         opacity: 0,
  //         y: direction, 
  //         zIndex: 0,
  //         durration: 1,
  //         pinSpacing: false,
  //         pin: true  
  //       }); // Hide all cards
  //       gsap.to(card, { 
  //         opacity: 1,
  //         y: 0, 
  //         zIndex: 10,
  //         pinSpacing: false,
  //         pin: true  
  //       }); // Show current card
  //     },
  //     onLeave: () => 
  //       gsap.to(card, { 
  //         opacity: 0, 
  //         y: direction, 
  //         zIndex: 0,
  //         durration: 1,
  //         pinSpacing: false,
  //         pin: true 
  //     }),
  //     onLeaveBack: () => 
  //       gsap.to(card, { 
  //         opacity: 0, 
  //         y: direction, 
  //         zIndex: 0,
  //         durration: 1,
  //         pinSpacing: false,
  //         pin: true 
  //     }),
      

  //   })
  // });
