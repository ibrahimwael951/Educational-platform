export const animation = {
  viewport: { once: true, amount: 0.5 },
  whileInView: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
export const opacity = {
  initial: { opacity: 0 },
};
export const fromRight = {
  initial: { x: -60, opacity: 0 },
};
export const fromLeft = {
  initial: { x: 60, opacity: 0 },
};
export const fadeUp = {
  initial: { y: 60, opacity: 0 }, 
};
export const fadeDown = {
  initial: { y: 60, opacity: 0 },
};

export const hoverScale ={
  whileHover:{  scale: 1.05},
  whileTap:{scale:0.95 }
}
export const hoverFontSize = {
  whileHover: { fontSize: "24px" },
  whileTap:{scale:0.9 }
}