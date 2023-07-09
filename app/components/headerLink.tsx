"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderLink = ({ link }: { link: HeaderLink }) => {
  const pathname = usePathname();

  return (
    <Link
      key={link.id}
      href={link.href}
      className={`text-sm hover:text-[#3fd2ff] transition ${
        pathname === link.href && "font-semibold text-sky-400"
      }`}
    >
      {link.name}
    </Link>
  );
};

export default HeaderLink;
