export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const fadeInSmall = {
  hidden: { opacity: 0.5 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const scaleIn = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const scaleInSmall = {
  hidden: { scale: 0.5 },
  show: {
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const grayedOut = {
  hidden: { opacity: 0.5, filter: "grayscale(100%)" },
  show: {
    opacity: 1,
    filter: "grayscale(0%)",
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};
