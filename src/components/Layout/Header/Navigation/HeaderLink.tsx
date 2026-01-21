"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem, LanguageCode } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const HeaderLink: React.FC<{ item: HeaderItem; lang: LanguageCode }> = ({ item, lang }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname()
  const isExternal = item.href.startsWith('http://') || item.href.startsWith('https://')
  const label = item.labels[lang]
  const isActive = !isExternal && (path === item.href || (item.href !== '/' && path.startsWith(`${item.href}/`)))
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isExternal ? (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-2 rounded-lg text-base flex font-normal text-white hover:text-LightApricot dark:text-white dark:hover:text-LightApricot hover:bg-white/10 transition-colors"
        >
          {label}
        </a>
      ) : (
        <Link
          href={item.href}
          className={`px-3 py-2 rounded-lg text-base flex font-normal transition-colors ${
            isActive
              ? "text-LightApricot dark:text-LightApricot bg-white/10"
              : "text-white dark:text-white hover:text-LightApricot dark:hover:text-LightApricot hover:bg-white/10/5"
          }`}
        >
          {label}
          {item.submenu && (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
            </svg>
          )}
        </Link>
      )}
      {submenuOpen && (
        <div className="absolute py-2 top-8 left-0 mt-0.5 w-60 bg-white dark:bg-darkmode shadow-lg dark:shadow-darkmd rounded-lg">
          {item.submenu?.map((subItem, index) => (
            <Link key={index} href={subItem.href} className={`block px-4 py-2 text-black dark:text-white hover:bg-AliceBlue dark:hover:bg-darklight ${path === subItem.href ? "bg-primary text-white hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white" : null}`}>
              {subItem.labels[lang]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
