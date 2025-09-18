import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-without-back.png";

interface NavbarProps {
  isAlreadyLoggedIn?: boolean;
}

export default function Navbar({ isAlreadyLoggedIn }: NavbarProps) {
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
          <Link href="/" className="hover:text-yellow-500 transition">
            Início
          </Link>
          <Link href="/ordem" className="hover:text-yellow-500 transition">
            Ordem DeMolay
          </Link>
          <Link href="/comunidade" className="hover:text-yellow-500 transition">
            Comunidade
          </Link>
          <Link href="/lideranca" className="hover:text-yellow-500 transition">
            Liderança
          </Link>
          <Link href="/conteudo" className="hover:text-yellow-500 transition">
            Conteúdo
          </Link>
          <Link href="/apoie" className="hover:text-yellow-500 transition">
            Apoie
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
