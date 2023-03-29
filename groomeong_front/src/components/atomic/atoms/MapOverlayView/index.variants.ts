import { Variants } from "framer-motion";

export const OverlayViewVariants: Variants = {
  initial: {
    y: 0,
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    y: "-160%",
    x: "-54%",
    opacity: 1,
    scale: 1,
  },
};

export const DividerVariants: Variants = {
  initial: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: {
      delay: 0.5,
    },
  },
};

export const TitleWrapperVariants: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2 },
  },
};

export const ContentWrapperVariants: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: .3} 
  }
}
