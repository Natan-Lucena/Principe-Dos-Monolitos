// src/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import capituloLogo from "@/assets/logo-without-back.png";
import gabineteLogo from "@/assets/supremo-conselho-logo.png";
import instaIcon from "@/assets/insta.png";

interface FooterProps {
  logoCapSize?: number;
  logoGabSize?: number;
}

export default function Footer({ logoCapSize, logoGabSize }: FooterProps) {
  return (
    <footer className="w-full bg-green-800 text-yellow-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center px-6 gap-8">
        <div className="flex justify-center md:justify-start">
          <Image
            src={capituloLogo}
            alt="Logo Capítulo"
            width={logoCapSize || 160}
            height={logoCapSize || 160}
            className="drop-shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={gabineteLogo}
            alt="Logo Supremo Conselho"
            width={logoGabSize || 140}
            height={logoGabSize || 140}
            className="drop-shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center md:items-end space-y-3 text-center md:text-right">
          <div>
            <span className="font-medium">Contato: </span>
            <a
              href="tel:+5588979997491"
              className="hover:text-yellow-400 transition"
            >
              +55 (88) 97999-7491
            </a>
          </div>

          <div>
            <span className="font-medium">Email: </span>
            <a
              href="mailto:capitulo879@demolaybrasil.org.br"
              className="hover:text-yellow-400 transition"
            >
              capitulo879@demolaybrasil.org.br
            </a>
          </div>

          <Link
            href="https://www.instagram.com/demolayquixada"
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
