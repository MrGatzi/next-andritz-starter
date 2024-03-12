import { Theme } from "@mui/material";
import { LayoutSettings } from "@andritz/hwf2/layout";



export type ApplicationSettings = {
  title: string;
  description: string;
};

export type AppSettings = {
  application: ApplicationSettings;
  layout: LayoutSettings;
  theme: Theme;
};
