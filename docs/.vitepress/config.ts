import { resolve } from "path";
import { defineConfig } from "vitepress";
import { defaultSidebar } from "./defaultSidebar";
import { generateFileSidebar } from "./file-sidebar";

const r = (p: string) => resolve(__dirname, p);

export default defineConfig({
  base: "/blog-home/",
  title: "hsp-blog",
  description: "composition api form validator for vue",
  // appearance: false,
  lastUpdated: true,

  markdown: {
    // TODO
    anchor: {},
    toc: { level: [1, 2, 3] },
    theme: {
      light: "min-dark",
      dark: "one-dark-pro",
    },
    lineNumbers: true,
  },
  themeConfig: {
    outline: [1, 3],
    sidebar: defaultSidebar,
    nav: [
      ...defaultSidebar.slice(1, 5),
      {
        text: "官网",
        items: [
          {
            text: "vitepress",
            link: "https://vitepress.dev/"
          },
          {
            text: "vue",
            link: "https://cn.vuejs.org/"
          },
          {
            text: "vite",
            link: "https://vitejs.cn/"
          }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/HiWhsp" },
    ],
    footer: {
      copyright: "Copyright © 2022-present hsp",
    },
    editLink: {
      pattern: "https://github.com/HiWhsp",
      text: "Edit this page on Gitlab",
    },
    lastUpdatedText: "Last Updated",
    // localeLinks: {
    //   text: "English",
    //   items: [{ text: "", link: "https://vitepress.dev/" }],
    // },
  },
});
