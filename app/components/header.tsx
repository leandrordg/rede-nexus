"use client";

import Link from "next/link";

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import HeaderLink from "./headerLink";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const headerLinks: HeaderLink[] = [
  {
    id: 1,
    name: "Produtos",
    href: "/products",
  },
  {
    id: 2,
    name: "Discord",
    href: "/discord",
  },
  {
    id: 3,
    name: "Suporte",
    href: "/support",
  },
];

const Header = () => {
  const { isSignedIn } = useUser();

  const pathname = usePathname();

  return (
    <header
      className={`w-full ${
        pathname !== "/"
          ? "bg-[#141414] border-b border-neutral-800"
          : "bg-black/30"
      }`}
    >
      <div className="flex items-center p-4 gap-6 max-w-7xl mx-auto">
        <Link href="/" className="font-semibold">
          <Image
            src="/sm-logo.png"
            alt="Rede Nexus"
            width={1000}
            height={1000}
            className="w-12 h-auto"
          />
        </Link>

        <nav className="ml-auto hidden md:flex items-center gap-8">
          {headerLinks.map((link) => (
            <HeaderLink link={link} key={link.id} />
          ))}
        </nav>

        <div className="flex md:hidden items-center gap-2 ml-auto cursor-pointer">
          <Bars3Icon className="w-6 h-6" />
          <span className="text-sm sr-only">Abrir menu</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <ShoppingCartIcon className="w-6 h-6" />
          <span className="text-sm sr-only">Carrinho</span>
        </div>

        {!isSignedIn ? (
          <Link
            href="/sign-in"
            className="border text-sm py-1 px-4 rounded-md border-white hover:bg-white/30 transition"
          >
            Entrar
          </Link>
        ) : (
          <>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
