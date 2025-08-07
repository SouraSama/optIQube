Shery.mouseFollower();
Shery.makeMagnet(".menuicon");

const tl = gsap.timeline();

tl.from(
  ".sicon",
  {
    scrollTrigger: {
      trigger: ".icons-section",
      scroller: "body",
      start: "top top",
      end: "top -100%",
      //   markers: true,
      scrub: 2,
      pin: true,
    },
    duration: 1,
    opacity: 0,
    ease: "power1.out",
    rotate: 360,
    scale: 0,
  },
  {}
);

gsap.from(
  ".head-anim",
  {
    scrollTrigger: {
      trigger: ".icons-section",
      scroller: "body",
      start: "top top",
      end: "top -100%",
        // markers: true,
      scrub: 2,
      // pin: true,
    },
    duration: 1,
    opacity: 0,
    ease: "power1.out",
    // rotate: 360,
    scale: 0,
  },
);

tl.from(
  ".sicon2",
  {
    scrollTrigger: {
      trigger: ".icons-section2",
      scroller: "body",
      start: "top top",
      end: "top -100%",
      //   markers: true,
      scrub: 2,
      pin: true,
    },
    duration: 1,
    opacity: 0,
    ease: "power1.out",
    rotate: 360,
    scale: 0,
  },
  {}
);


gsap.from(
  ".head-anim2",
  {
    scrollTrigger: {
      trigger: ".icons-section2",
      scroller: "body",
      start: "top top",
      end: "top -100%",
        // markers: true,
      scrub: 2,
      // pin: true,
    },
    duration: 1,
    opacity: 0,
    ease: "power1.out",
    // rotate: 360,
    scale: 0,
  },
);

gsap.from(".scard", {
  duration: 1,
  opacity: 0,
  ease: "power1.out",
  stagger: 0.2, // This will make each card appear with a delay of 0.2 seconds
  scrollTrigger: {
    trigger: ".card-section",
    scroller: "body",
    start: "top 70%",
    end: "top 50%",
    // markers: true,
    scrub: 1,
  },
});
// Animate each letter of the logo with slide-in from left
gsap.from(".logo-letter", {
  x: -40,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  stagger: 0.15, // delay between letters
  delay: 0.4     // delay after page load
});

// Animate each icon staggered with a float-in effect
gsap.from(".hero-icon", {
  opacity: 0,
  x: -30,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
  delay: 0.4
});

// Hover bounce effect for each icon
document.querySelectorAll(".hero-icon").forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    gsap.to(icon, {
      y: -6,
      scale: 1.1,
      duration: 0.3,
      ease: "power1.out",
    });
  });

  icon.addEventListener("mouseleave", () => {
    gsap.to(icon, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power1.inOut",
    });
  });
});
// Rotate the full orbit zone
gsap.to(".orbit-zone", {
  rotate: 360,
  duration: 20,
  ease: "linear",
  repeat: -1
});

// Pulse the logo
gsap.to(".logo-center", {
  scale: 1.05,
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

// Animate hero text in from right
gsap.from(".hero-title", {
  x: 40,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.4
});

gsap.from(".hero-subtext", {
  x: 40,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 0.8
});

// Logo pulse (subtle shine)
gsap.to(".logo-center", {
  scale: 1.05,
  duration: 2.5,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

// Orbiting each icon individually in REVERSE direction
gsap.to(".orbit1", {
  rotate: -360,
  transformOrigin: "center center",
  duration: 12,
  ease: "linear",
  repeat: -1
});

gsap.to(".orbit2", {
  rotate: -360,
  transformOrigin: "center center",
  duration: 15,
  ease: "linear",
  repeat: -1
});

gsap.to(".orbit3", {
  rotate: -360,
  transformOrigin: "center center",
  duration: 18,
  ease: "linear",
  repeat: -1
});
gsap.registerPlugin(MotionPathPlugin);