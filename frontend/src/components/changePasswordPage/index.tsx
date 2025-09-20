"use client";

import { useState } from "react";
import Image from "next/image";
import backgroundImage from "../../assets/background.png";
import Navbar from "../navbar";
import Footer from "../footer";
import { useRouter } from "next/navigation";

export default function ChangePasswordPage() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const router = useRouter();

  const handleConfirm = () => {
    if (!id || !email || !senha || !confirmSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    if (senha !== confirmSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    alert(
      `Uma confirmação foi enviada para o email: ${email}. Após confirmada, sua senha será alterada.`
    );
    router.push("/login");
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
              Alterar Senha
            </h2>

            <div className="mb-4">
              <label className="block text-white mb-2">ID (SisDM)</label>
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Digite seu ID"
                className="w-full p-3 rounded-lg bg-gray-100 text-black outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email do SisDM"
                className="w-full p-3 rounded-lg bg-gray-100 text-black outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2">Nova Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite a nova senha"
                className="w-full p-3 rounded-lg bg-gray-100 text-black outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-6">
              <label className="block text-white mb-2">
                Confirme a Nova Senha
              </label>
              <input
                type="password"
                value={confirmSenha}
                onChange={(e) => setConfirmSenha(e.target.value)}
                placeholder="Confirme a nova senha"
                className="w-full p-3 rounded-lg bg-gray-100 text-black outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleConfirm}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition"
              >
                Confirmar
              </button>
              <button
                onClick={() => router.push("/login")}
                className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 rounded-lg transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </main>

        <Footer logoCapSize={120} logoGabSize={100} />
      </div>
    </div>
  );
}
