import Image from "next/image";
import backgroundImage from "../../assets/background.png";
import fotoMembros from "../../assets/foto-membros.jpg";
import instalacaoNatan from "../../assets/instalacao-natan.jpg";
import eleicaoNatan from "../../assets/eleicao-natan.png";
import instalacaoEnzo from "../../assets/instalacao-enzo.jpg";
import anoDemolay from "../../assets/ano-demolay.jpg";
import instalacaoSilva from "../../assets/instalacao-silva.jpg";

import Navbar from "../navbar";
import Carousel from "../carrosel";
import Footer from "../footer";

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
            images={[
              instalacaoNatan.src,
              eleicaoNatan.src,
              instalacaoEnzo.src,
              anoDemolay.src,
              instalacaoSilva.src,
            ]}
            speed={40}
          />
          <div className="mt-12 px-6 md:px-20 text-white bg-black/50 p-6 rounded-2xl shadow-lg">
            <p className="leading-relaxed text-justify">
              Atualmente, o Capítulo DeMolay{" "}
              <strong>Príncipe dos Monólitos n.º 879</strong> conta com 12
              membros ativos, alguns deles integrando a Cavalaria do Priorado da
              Quinta Região e o Gabinete Estadual. O Capítulo se destaca por
              participar ativamente no desenvolvimento de lideranças, oferecendo
              aos jovens oportunidades de crescimento pessoal, responsabilidade
              e atuação comunitária.
            </p>
            <p className="mt-4 leading-relaxed text-justify">
              Mais do que uma organização juvenil, o Príncipe dos Monólitos é um
              espaço onde os membros aprendem a trabalhar em equipe, tomar
              decisões e exercer influência positiva, preparando-se para assumir
              papéis de destaque dentro da Ordem DeMolay e na sociedade. A
              participação em projetos, eventos e na gestão do próprio Capítulo
              reforça a formação de jovens conscientes, éticos e comprometidos
              com o bem comum.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
