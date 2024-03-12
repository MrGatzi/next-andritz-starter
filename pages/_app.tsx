import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
//import { AuthenticationProvider } from "@andritz/hwf2/providers";
import { LayoutProvider } from "@andritz/hwf2/providers/LayoutProvider";
import { useHideSplashScreen } from "@/components/SplashScreen";
import { settings } from "@/settings";
import React from "react";

const { layout, theme } = settings;
const HomeI = () => <span>🏠</span>;
export default function App({ Component, pageProps }: AppProps) {
  useHideSplashScreen();
  return (
    <ThemeProvider theme={theme}>
      <LayoutProvider
        menuItemsData={[ { text: "Home", icon: HomeI, onClick: () => alert("Home!") },]}
        baseSideBarWidth={240}
        logoSrc= "img/logo.svg"
        footer={{ text: `Andritz Hydro © ${new Date().getFullYear()}`, }}
      >
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" />
    </LayoutProvider>
    </ThemeProvider >
  );
}
