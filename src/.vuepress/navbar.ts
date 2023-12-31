import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文档",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "条例",
        icon: "lightbulb",
        prefix: "law/",
        children: ["confederation"],
      },
      {
        text: "社区",
        icon: "lightbulb",
        prefix: "communities/",
        children: ["sakura"],
      },
    ],
  },
  {
    text: "白名单申请",
    icon: "book",
    link: "https://wj.qq.com/s2/12618735/9fb0/",
  },
  {
    text: "社区申请",
    icon: "book",
    link: "https://wj.qq.com/s2/12620134/b688/",
  },
]);
