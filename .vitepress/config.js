import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";

const brandId = "eodashboard"; // for now

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig(brandId),
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes("-"),
      },
    },
  },
  vite:{
    envPrefix:["VITE_", "EODASH_"],
    server:{
      allowedHosts: true
    }
  },
  themeConfig: {
    
    nav: [
      { text: "Home", link: "/" },
      { text: "Dashboard", link: "/explore" },
      { text: "Stories", link: "/stories" },
    ],
  },
});
