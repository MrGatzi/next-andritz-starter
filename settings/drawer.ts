import { LayoutSettings } from "./types";
import { Icons } from "@andritz/hwf2/utils";

export const drawer: Omit<LayoutSettings["drawer"], "width" | "open"> = {
  items: [
    {
      text: "Projects",
      path: "/projects",
      type: "icon",
      icon: Icons.Folder,
      iconStyle: { fontSize: "1.75rem" },
    },
    // {
    //   text: "Settings",
    //   path: "/settings",
    //   type: "icon",
    //   icon: Icons.Settings,
    //   iconStyle: { fontSize: "1.75rem" },
    // },
    {
      text: "Info",
      path: "/info",
      type: "icon",
      icon: Icons.Info,
      iconStyle: { fontSize: "1.75rem" },
    },
  ],
  footer: "",
};
