"use client";

import { useState } from "react";
import Image from "next/image";
import backgroundImage from "../../assets/background.png";
import Navbar from "../navbar";
import Footer from "../footer";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    console.log("Tentando logar com:", { id, senha });
    router.push("/calendar");
  };

  const handleChangePassword = () => {
    console.log("Redirecionar para mudar senha");
  };

  return (
    <div className="relative w-screen min-h-screen">
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="z-0 object-cover"
        priority
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar isAlreadyLoggedIn={true} />

        <main className="flex-1 flex items-center justify-center px-6 min-h-[calc(100vh-160px)]">
          <div className="w-full max-w-md bg-black/50 backdrop-blur-md p-8 rounded-2xl shadow-lg mt-25">
            <h2 className="text-2xl font-bold text-center text-white mb-6">
              Login
            </h2>

            <div className="mb-4">
              <label className="block text-white mb-2">ID</label>
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Digite seu ID"
                className="w-full p-3 rounded-lg bg-gray-100 text-black outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-6">
              <label className="block text-white mb-2">Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full p-3 rounded-lg bg-gray-100 text-black outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleLogin}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition"
              >
                Logar
              </button>
              <button
                onClick={handleChangePassword}
                className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 rounded-lg transition"
              >
                Mudar Senha
              </button>
            </div>
          </div>
        </main>

        <Footer logoCapSize={120} logoGabSize={100} />
      </div>
    </div>
  );
}
