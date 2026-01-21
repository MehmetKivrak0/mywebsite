import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  // NOTE: Dış linkler HeaderLink/MobileHeaderLink içinde <a> ile açılıyor
  { labels: { tr: "GitHub Repom", en: "GitHub Repo" }, href: "https://github.com/MehmetKivrak0?tab=repositories" },
  { labels: { tr: "Instagram Postları", en: "Instagram Posts" }, href: "https://www.instagram.com/webde_dp/" },
  { labels: { tr: "Hakkımda", en: "About" }, href: "/about" },
  { labels: { tr: "İletişim", en: "Contact" }, href: "/contact" },
];
