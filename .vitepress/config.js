import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Antarctica InSync Dashboard",
  description: "Antarctica InSync Dashboard",
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
