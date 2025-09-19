"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Calendar,
  Ticket,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import logo from "@/assets/logo-without-back.png";
import gabineteLogo from "@/assets/supremo-conselho-logo.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-yellow-300 hover:bg-orange-300 transition shadow-md md:hidden"
      >
        <Menu className="w-6 h-6 text-black" />
      </button>

      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full ${
          isOpen ? "w-64" : "w-20"
        } bg-green-800 text-yellow-300 shadow-xl z-50 transform transition-all duration-300 
        ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 flex flex-col`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-yellow-400/30">
          <div className="flex items-center space-x-3">
            <Image
              src={logo}
              alt="Logo Capítulo"
              width={40}
              height={40}
              className="drop-shadow"
            />
            {isOpen && (
              <span className="font-bold text-yellow-300 text-lg">
                Capítulo 879
              </span>
            )}
          </div>

          <button
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden p-2 rounded-lg hover:bg-green-700 transition"
          >
            <X className="w-6 h-6 text-yellow-300" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4 font-medium flex-grow">
          <Link
            href="/calendar"
            className="flex items-center space-x-3 hover:text-yellow-400 transition"
          >
            <Calendar className="w-5 h-5" />
            {isOpen && <span>Calendário</span>}
          </Link>
          <Link
            href="/rifa"
            className="flex items-center space-x-3 hover:text-yellow-400 transition"
          >
            <Ticket className="w-5 h-5" />
            {isOpen && <span>Rifa</span>}
          </Link>
        </nav>

        <div className="p-4 border-t border-yellow-400/30 flex justify-center">
          <Image
            src={gabineteLogo}
            alt="Logo Supremo Conselho"
            width={isOpen ? 100 : 40}
            height={isOpen ? 100 : 40}
            className="drop-shadow-lg transition-all duration-300"
          />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-1/2 right-[-12px] transform -translate-y-1/2 p-2 rounded-full bg-yellow-300 hover:bg-orange-300 text-black transition shadow-md"
        >
          {isOpen ? (
            <ChevronsLeft className="w-5 h-5" />
          ) : (
            <ChevronsRight className="w-5 h-5" />
          )}
        </button>
      </div>
    </>
  );
}
