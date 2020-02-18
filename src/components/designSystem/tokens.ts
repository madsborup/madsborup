import '../../../static/fonts/inter.css'

const BASELINE = 16;
const BORDER_RADIUS = 4;
const CONTENT_WIDTH = 800;

const SCALES = {
  XXSMALL: 0.25,
  XSMALL: 0.5,
  SMALL: 0.75,
  MEDIUM: 1,
  LARGE: 1.5,
  XLARGE: 2,
  XXLARGE: 2.5
};

export default {
  colors: {
    white: "#FFFFFF",
    background: "#F3F3F5",
    border: "#E1E1E5",
    hover: "#F8F9F9",
    headings: "#151514",
    text: "#333",
    textMuted: "#a3a3a3",
    primary: "#007aff",
    primaryMuted: "#EAF2FE",
    primaryBorder: "#abc6f1",
    secondary: "#5FAAFC"
  },
  font: {
    family: `'Inter', sans-serif`,
    size: {
      xsmall: `${SCALES.XSMALL + 0.2}rem`,
      small: `${SCALES.SMALL}rem`,
      regular: `${SCALES.MEDIUM}rem`,
      h1: `${SCALES.XXLARGE}rem`,
      h2: `${SCALES.LARGE}rem`,
      h3: `${SCALES.MEDIUM + 0.25}rem`,
      h4: `${SCALES.MEDIUM + 0.05}rem`,
      h5: `${SCALES.SMALL + 0.2}rem`
    },
    letterSpacing: {
      heading: `-0.2px`
    }
  },
  spacing: {
    xxsmall: `${SCALES.XXSMALL * BASELINE}`,
    xsmall: `${SCALES.XSMALL * BASELINE}`,
    small: `${SCALES.SMALL * BASELINE}`,
    medium: `${SCALES.MEDIUM * BASELINE}`,
    large: `${SCALES.LARGE * BASELINE}`,
    xlarge: `${SCALES.XLARGE * BASELINE}`
  },
  BORDER_RADIUS,
  CONTENT_WIDTH
};
