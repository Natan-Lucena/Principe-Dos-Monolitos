// src/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import capituloLogo from "@/assets/logo-without-back.png";
import gabineteLogo from "@/assets/supremo-conselho-logo.png";
import instaIcon from "@/assets/insta.png";

export default function Footer() {
  return (
    <footer className="w-full bg-green-800 text-yellow-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center px-6 gap-8">
        {/* Logo Capítulo (esquerda) */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={capituloLogo}
            alt="Logo Capítulo"
            width={160}
            height={160}
            className="drop-shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={gabineteLogo}
            alt="Logo Supremo Conselho"
            width={140}
            height={140}
            className="drop-shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center md:items-end space-y-3 text-center md:text-right">
          <div>
            <span className="font-medium">Contato: </span>
            <a
              href="tel:+5511999999999"
              className="hover:text-yellow-400 transition"
            >
              +55 (11) 99999-9999
            </a>
          </div>

          <div>
            <span className="font-medium">Email: </span>
            <a
              href="mailto:zerogamerptbr@gmail.com"
              className="hover:text-yellow-400 transition"
            >
              zerogamerptbr@gmail.com
            </a>
          </div>

          <Link
            href="https://www.instagram.com/exemplo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={instaIcon}
              alt="Instagram"
              width={28}
              height={28}
              className="hover:opacity-80 transition mx-auto md:mx-0"
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
