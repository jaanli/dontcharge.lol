import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dontcharge.lol",
  description:
    "Like http://three.sentenc.es/ but for video conference calls (Zoom, Google Meet, etc) to norm and form behavior change",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [{ text: "Markdown Examples", link: "/examples" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/jaanli/dontcharge.lol" },
    ],
  },
});
