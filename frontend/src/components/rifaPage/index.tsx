"use client";

import { useState } from "react";
import Sidebar from "../siderbar";
import Image from "next/image";
import backgroundImage from "../../assets/background.png";

interface BuyerInfo {
  name: string;
  email: string;
}

interface Ticket {
  number: number;
  sold: boolean;
  buyer?: BuyerInfo;
}

export default function RifaPage() {
  const [tickets, setTickets] = useState<Ticket[]>(
    Array.from({ length: 200 }, (_, i) => ({
      number: i + 1,
      sold: i === 2 || i === 50,
      buyer:
        i === 2
          ? { name: "João Silva", email: "joao@email.com" }
          : i === 50
          ? { name: "Maria Souza", email: "maria@email.com" }
          : undefined,
    }))
  );

  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");

  const handleConfirmPurchase = () => {
    if (selectedTicket && !selectedTicket.sold) {
      setTickets((prev) =>
        prev.map((ticket) =>
          ticket.number === selectedTicket.number
            ? {
                ...ticket,
                sold: true,
                buyer: { name: buyerName, email: buyerEmail },
              }
            : ticket
        )
      );
      setSelectedTicket(null);
      setBuyerName("");
      setBuyerEmail("");
    }
  };

  return (
    <div className="relative w-screen min-h-screen">
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="z-0 object-cover"
      />

      <div className="relative z-10 flex min-h-screen">
        <Sidebar />

        <main className="flex-1 flex flex-col items-center justify-start p-6 md:ml-64">
          <h1 className="text-3xl font-bold mb-6 text-green-800 drop-shadow">
            🎟️ Rifa Solidária
          </h1>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-20 gap-3 bg-green-800 p-6 rounded-2xl shadow-xl">
            {tickets.map((ticket) => (
              <button
                key={ticket.number}
                onClick={() => setSelectedTicket(ticket)}
                className={`min-w-[3rem] h-12 rounded-lg flex items-center justify-center font-bold transition 
        ${
          ticket.sold
            ? "bg-red-500 text-white cursor-pointer"
            : "bg-yellow-300 hover:bg-yellow-400 text-black"
        }`}
              >
                {ticket.number}
              </button>
            ))}
          </div>
        </main>
      </div>

      {selectedTicket && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full">
            {selectedTicket.sold ? (
              <>
                <h2 className="text-xl font-bold mb-4 text-red-600">
                  Número {selectedTicket.number} já vendido
                </h2>
                <p className="text-gray-800">
                  <span className="font-semibold">Nome:</span>{" "}
                  {selectedTicket.buyer?.name}
                </p>
                <p className="text-gray-800">
                  <span className="font-semibold">Email:</span>{" "}
                  {selectedTicket.buyer?.email}
                </p>
                <button
                  onClick={() => setSelectedTicket(null)}
                  className="mt-6 w-full bg-gray-700 hover:bg-gray-900 text-white py-2 rounded-lg"
                >
                  Fechar
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4 text-gray-900">
                  Comprar número {selectedTicket.number}
                </h2>
                <input
                  type="text"
                  placeholder="Nome"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full mb-3 p-2 border rounded-lg text-gray-900"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  className="w-full mb-3 p-2 border rounded-lg text-gray-900"
                />
                <button
                  onClick={handleConfirmPurchase}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded-lg"
                >
                  Confirmar Compra
                </button>
                <button
                  onClick={() => setSelectedTicket(null)}
                  className="mt-3 w-full bg-gray-700 hover:bg-gray-900 text-white py-2 rounded-lg"
                >
                  Cancelar
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
