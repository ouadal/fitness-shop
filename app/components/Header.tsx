"use client";

import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white dark:bg-zinc-800 flex items-center justify-center border-2 border-orange-500">
              <Image
                src="/logo.png"
                alt="Fitness Shop Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-zinc-900 dark:text-white">
                Fitness Shop
              </h1>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                @urek7forreal
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#produits"
              className="text-zinc-700 dark:text-zinc-300 hover:text-orange-500 transition-colors"
            >
              Produits
            </a>
            <a
              href="#galerie"
              className="text-zinc-700 dark:text-zinc-300 hover:text-orange-500 transition-colors"
            >
              Galerie
            </a>
            <a
              href="#temoignages"
              className="text-zinc-700 dark:text-zinc-300 hover:text-orange-500 transition-colors"
            >
              Avis
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://www.tiktok.com/@urek7forreal"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full hover:scale-105 transition-transform font-semibold text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
