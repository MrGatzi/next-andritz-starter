import { appSettings } from "@/app.settings";
import { createTheme } from "@mui/material/styles";

const { palette } = createTheme();

const primaryColor = palette.augmentColor({
  color: { main: appSettings.mainColor },
});

const secondaryColor = palette.augmentColor({
  color: { main: appSettings.secondaryColor },
});

export const theme = createTheme({
  typography: {
    body1: { color: secondaryColor.dark },
    fontFamily:
      '"Roboto","Segoe UI","GeezaPro","DejaVu Serif","sans-serif","-apple-system","BlinkMacSystemFont"',
    h1: {
      fontSize: "44px",
      fontWeight: "700",
      color: primaryColor.dark,
      marginBottom: "15px",
      letterSpacing: ".01em",
      width: "100%",
      lineHeight: "1.2em",
      "@media (max-width:768px)": {
        fontSize: "36px",
      },
      "@media (max-width:480px)": {
        fontSize: "28px",
      },
    },
    h2: {
      fontSize: "20px",
      fontWeight: "600",
      color: primaryColor.dark,
      lineHeight: "1.25em",
      // marginBottom: "25px",
      marginBottom: 0,
      "@media (max-width:768px)": {
        fontSize: "24px",
      },
      "@media (max-width:480px)": {
        fontSize: "20px",
      },
    },
    h3: {
      fontSize: "20px",
      fontWeight: "400",
      color: secondaryColor.dark,
      marginBottom: "10px",
      lineHeight: "1.35em",
      "@media (max-width:768px)": {
        fontSize: "24px",
      },
      "@media (max-width:480px)": {
        fontSize: "20px",
      },
    },
    h4: {
      fontSize: "24px",
      fontWeight: "600",
      color: secondaryColor.light,
      marginBottom: "25px",
      letterSpacing: "0.1em",
      "@media (max-width:768px)": {
        fontSize: "20px",
      },
      "@media (max-width:480px)": {
        fontSize: "20px",
      },
    },
    h5: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#FFF",
      marginBottom: "20px",
      textTransform: "uppercase",
    },
    h6: {
      fontSize: "20px",
      fontWeight: "400",
      color: primaryColor.main,
      marginBottom: "15px",
    },
  },
  palette: {
    primary: primaryColor,
    secondary: secondaryColor,
  },
});
