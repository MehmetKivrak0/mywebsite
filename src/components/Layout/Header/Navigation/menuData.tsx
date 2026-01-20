import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  // NOTE: Dış linkler HeaderLink/MobileHeaderLink içinde <a> ile açılıyor
  { labels: { tr: "GitHub Repo", en: "GitHub Repo" }, href: "https://github.com/" },
  { labels: { tr: "Instagram Gönderileri", en: "Instagram Posts" }, href: "https://www.instagram.com/" },
  { labels: { tr: "Hakkımda", en: "About" }, href: "/about" },
  { labels: { tr: "İletişim", en: "Contact" }, href: "/contact" },
];
