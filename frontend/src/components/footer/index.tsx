// src/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import gabineteLogo from "@/assets/supremo-conselho-logo.png";
import instaIcon from "@/assets/insta.png";

export default function Footer() {
  return (
    <footer className="w-full bg-green-800 text-yellow-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-6 md:mb-0">
          <Image
            src={gabineteLogo}
            alt="Logo Supremo Conselho"
            width={50}
            height={50}
          />
          <span className="font-bold text-lg drop-shadow-md">
            Supremo Conselho
          </span>
        </div>

        {/* Contato + Instagram */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <span className="font-medium">Contato:</span>
          <a
            href="tel:+5511999999999"
            className="hover:text-yellow-400 transition"
          >
            +55 (11) 99999-9999
          </a>

          <Link
            href="https://www.instagram.com/exemplo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={instaIcon}
              alt="Instagram"
              width={25}
              height={25}
              className="hover:opacity-80 transition"
            />
          </Link>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-yellow-200">
        © {new Date().getFullYear()} Capítulo Príncipe dos Monólitos nº 879.
        Todos os direitos reservados.
      </div>
    </footer>
  );
}
