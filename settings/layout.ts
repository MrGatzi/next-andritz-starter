import { application } from "./application";
import { drawer } from "./drawer";
import { LayoutSettings } from "@andritz/hwf2/layout";
import React from "react";

const HomeI = () => React.createElement("span", null, "🏠");
export const layout: LayoutSettings = {
  menuItemsData: [
    { text: "Home", icon: HomeI, onClick: () => alert("Home!") },
  ],
  baseSideBarWidth: 500,
  logoSrc: "img/logo.svg",
  footer: {
    text: `Andritz Hydro © ${new Date().getFullYear()}`,
  },
  children:  undefined
  /*head: {
    title: application.title,
    description: application.description,
  },
  topbar: {
    title: application.title,
    avatar: {
      size: 50,
      profilePage: true,
    },
    titlePath: "/project",
  },
  drawer: {
    width: { closed: 60, open: 240 },
    open: false,
    items: drawer.items,
    footer: drawer.footer,
  },
  general: {
    spacing: {
      content: 2,
    },
  },*/
};
