const theme = {
  colors: {
    primary: "#0070f3",
  },
  fonts: {
    H6: "Nanum GarMaesGeur",
    primary: "Arial, sans-serif",
  },
  fontSizes: {
    small: "12px",
    medium: "14px",
    large: "16px",
  },
  fontWeights: {
    normal: "normal",
    bold: "bold",
  },
  lineHeights: {
    small: "1.2",
    medium: "1.5",
    large: "1.75",
  },
  space: {
    xsmall: "4px",
    small: "8px",
    medium: "16px",
    large: "32px",
    xlarge: "64px",
  },
  sizes: {
    xsmall: "4px",
    small: "8px",
    medium: "16px",
    large: "32px",
    xlarge: "64px",
  },
  radii: {
    small: "2px",
    medium: "4px",
    large: "8px",
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, 0.125)",
    medium: "0 0 8px rgba(0, 0, 0, 0.125)",
    large: "0 0 24px rgba(0, 0, 0, 0.125)",
  },
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  buttons: {
    primary: {
      color: "white",
      backgroundColor: "primary",
    },
  },
  text: {
    heading: {
      fontFamily: "primary",
      lineHeight: "large",
      fontWeight: "bold",
    },
    display: {
      fontFamily: "primary",
      fontSize: "large",
      fontWeight: "bold",
      lineHeight: "large",
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
  links: {
    nav: {
      p: 2,
      color: "inherit",
      textDecoration: "none",
      fontWeight: "bold",
      "&.active": {
        color: "primary",
      },
    },
  },
  forms: {
    label: {
      display: "block",
      mb: 1,
    },
    input: {
      display: "block",
      width: "100%",
      p: 2,
      fontSize: "inherit",
      lineHeight: "inherit",
      border: "1px solid",
      borderColor: "gray",
      borderRadius: "default",
      "&:focus": {
        outline: "none",
        boxShadow: "outline",
      },
    },
    select: {
      display: "block",
      width: "100%",
      p: 2,
      fontSize: "inherit",
      lineHeight: "inherit",
      border: "1px solid",
      borderColor: "gray",
      borderRadius: "default",
      "&:focus": {
        outline: "none",
        boxShadow: "outline",
      },
    },
  },
};

export default theme;
