import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 w-full border-t border-neutral-800 bg-[#141414]">
      <nav className="flex items-center gap-4 max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src="/lg-logo.png"
            alt="Rede Nexus"
            width={1000}
            height={1000}
            className="w-16 h-auto"
          />
        </Link>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/" className="font-semibold">
            Rede Nexus
          </Link>
          <span className="text-neutral-300">
            2023 &copy; Todos os direitos reservados.
          </span>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
