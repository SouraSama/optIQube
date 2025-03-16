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
