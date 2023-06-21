import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Lair Server",
  description: "Lair Server 的官方网站",

  theme,
});
