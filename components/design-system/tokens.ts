export const videoAccessColors = {
  bg: {
    primary: "#FAF7F2",
    secondary: "#F7F0E6",
    tertiary: "#F8F0E6",
    white: "#FFFFFF",
  },
  surface: {
    sand: "#C8B89A",
    tan: "#DED2C1",
    lightTan: "#EADFD5",
    warm: "#F5ECE3",
  },
  text: {
    primary: "#21140A",
    secondary: "#3B200F",
    tertiary: "#5A5A5A",
    muted: "#6B5C52",
    warmGray: "#7C6C5E",
    inverse: "#FFFFFF",
  },
  accent: {
    primary: "#C05840",
    hover: "#A04632",
    warm: "#C4704B",
  },
  status: {
    success: "#4E9B70",
    successBg: "#EBF5EE",
    error: "#C05840",
    errorBg: "#F9ECE9",
    warning: "#C4704B",
    info: "#1F252D",
  },
  border: {
    default: "#C8B89A",
    light: "#DED2C1",
    lighter: "#EADFD5",
  },
  dark: {
    primary: "#1F252D",
    bg: "#1F150C",
  },
} as const;

export const videoAccessSpacing = [
  4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120,
] as const;

export const videoAccessRadii = {
  sm: 4,
  md: 6,
  lg: 8,
} as const;
