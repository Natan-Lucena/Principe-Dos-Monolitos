import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-without-back.png";

interface NavbarProps {
  isAlreadyLoggedIn?: boolean;
  isInHomePage?: boolean;
}

export default function Navbar({
  isAlreadyLoggedIn,
  isInHomePage,
}: NavbarProps) {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 shadow-md backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="Logo Capítulo" width={50} height={50} />
          <span className="font-bold text-lg text-yellow-500 drop-shadow-md">
            Capítulo Príncipe dos Monólitos nº 879
          </span>
        </div>

        <div className="hidden md:flex space-x-6 font-medium text-gray-900">
          {!isInHomePage ? (
            <Link href="/" className="hover:text-yellow-500 transition">
              Início
            </Link>
          ) : null}

          <Link
            href="https://www.demolaybrasil.org.br"
            className="hover:text-yellow-500 transition"
          >
            DeMolay Brasil
          </Link>

          <Link
            href="https://demolayceara.org.br"
            className="hover:text-yellow-500 transition"
          >
            DeMolay Ceara
          </Link>

          <Link
            href="https://sis.demolaybrasil.org.br/login"
            className="hover:text-yellow-500 transition"
          >
            Sistema Demolay
          </Link>
          <Link
            href="https://www.instagram.com/demolayquixada"
            className="hover:text-yellow-500 transition"
          >
            Conteúdo
          </Link>
          <Link
            href="https://ocaminhocomecaaqui.com.br"
            className="hover:text-yellow-500 transition"
          >
            Quero ser DeMolay
          </Link>
        </div>

        {!isAlreadyLoggedIn && (
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="bg-yellow-300 text-black px-4 py-2 rounded-lg font-semibold hover:bg-orange-300 transition shadow-md"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
