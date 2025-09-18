import Image from "next/image";
import backgroundImage from "../../assets/background.png";
import fotoMembros from "../../assets/foto-membros.jpg";
import instalacaoNatan from "../../assets/instalacao-natan.jpg";
import eleicaoNatan from "../../assets/eleicao-natan.png";
import instalacaoEnzo from "../../assets/instalacao-enzo.jpg";

import Navbar from "../navbar";
import Carousel from "../carrosel";

export default function HomePage() {
  return (
    <div className="relative w-screen min-h-screen">
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="z-0 object-cover"
      />

      <div className="relative z-10">
        <Navbar />

        <div className="flex flex-col md:flex-row items-center justify-center h-[calc(100vh-80px)] px-6 md:px-20 gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={fotoMembros}
              alt="Foto dos membros"
              className="rounded-2xl shadow-lg object-cover"
              width={500}
              height={400}
            />
          </div>

          <div className="w-full md:w-1/2 text-white bg-black/50 p-6 rounded-2xl shadow-lg">
            <p className="leading-relaxed text-justify">
              O Capítulo DeMolay <strong>Príncipe dos Monólitos n.º 879</strong>{" "}
              foi fundado em Quixadá em 25 de novembro de 2014, após anos de
              esforços da comunidade maçônica local, liderados por Vicente Paulo
              Neto (tio Paulão). O Capítulo homenageia as belezas naturais da
              cidade e busca formar jovens comprometidos com os valores da Ordem
              DeMolay. A instalação oficial ocorreu em 1º de março de 2015, com
              a primeira turma de 15 jovens, apoiada por membros experientes de
              Capítulos vizinhos.
            </p>
            <p className="mt-4 leading-relaxed text-justify">
              O emblema do Capítulo simboliza a cidade, a Loja patrocinadora e
              os ideais de cavalaria e realeza do “Príncipe dos Monólitos”,
              refletindo orgulho e identidade local.
            </p>
          </div>
        </div>

        <div className="mt-16 px-6 md:px-20">
          <Carousel
            images={[instalacaoNatan.src, eleicaoNatan.src, instalacaoEnzo.src]}
            speed={40}
          />
        </div>
      </div>
    </div>
  );
}
