"use client";

import { useState } from "react";
import Image from "next/image";
import OrderModal from "./components/OrderModal";
import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    price: "",
  });

  const handleOrderClick = (productName: string, productPrice: string) => {
    setSelectedProduct({ name: productName, price: productPrice });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          Mes Produits Fitness
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
          Les compléments que j'utilise au quotidien pour mes performances
        </p>
      </section>

      {/* Produits Section */}
      <section id="produits" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-zinc-900 dark:text-white">
          Mes Produits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Produit 1 - Whey */}
          <div className="group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl transition-all duration-300">
            {/* Image Container */}
            <div className="relative bg-zinc-50 dark:bg-zinc-800 h-64 flex items-center justify-center p-6">
              <button className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-zinc-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <svg
                  className="w-5 h-5 text-zinc-700 dark:text-zinc-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <Image
                src="/whey.avif"
                alt="Whey Protéine"
                width={250}
                height={250}
                className="object-contain h-full w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold mb-1 text-zinc-900 dark:text-white">
                Whey Protéine
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Récupération musculaire • Goût chocolat
              </p>

              <div className="flex items-center gap-1 mb-3">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  (42)
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-zinc-800">
                <div>
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                    35,000 <span className="text-sm">FCFA</span>
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    1kg
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleOrderClick("Whey Protéine", "35000 FCFA")
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Produit 2 - Créatine */}
          <div className="group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative bg-zinc-50 dark:bg-zinc-800 h-64 flex items-center justify-center p-6">
              <button className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-zinc-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <svg
                  className="w-5 h-5 text-zinc-700 dark:text-zinc-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <Image
                src="/crettt.webp"
                alt="Créatine Monohydrate"
                width={250}
                height={250}
                className="object-contain h-full w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold mb-1 text-zinc-900 dark:text-white">
                Créatine Monohydrate
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Énergie • Force • Performance
              </p>

              <div className="flex items-center gap-1 mb-3">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  (38)
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-zinc-800">
                <div>
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                    16,000 <span className="text-sm">FCFA</span>
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    300g
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleOrderClick("Créatine Monohydrate", "20000 FCFA")
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Produit 3 - Protéine */}
          <div className="group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative bg-zinc-50 dark:bg-zinc-800 h-64 flex items-center justify-center p-6">
              <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                MEILLEURES VENTES
              </div>
              <button className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-zinc-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <svg
                  className="w-5 h-5 text-zinc-700 dark:text-zinc-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <Image
                src="/Fast-r.avif"
                alt="Protéine Fast-R"
                width={250}
                height={250}
                className="object-contain h-full w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold mb-1 text-zinc-900 dark:text-white">
                Mass Gainer
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Muscle • Récupération • Performance
              </p>

              <div className="flex items-center gap-1 mb-3">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  (56)
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-zinc-800">
                <div>
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                    25,000 <span className="text-sm">FCFA</span>
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    1kg
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleOrderClick("Protéine Fast-R", "30000 FCFA")
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi ces produits - Storytelling */}
      <section className="container mx-auto px-4 py-20 my-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
            Pourquoi j'ai choisi ces produits
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Mon parcours vers la performance optimale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Card 1 - Mon parcours */}
          <div className="group relative bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 rounded-3xl p-8 border border-orange-200 dark:border-orange-900/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">
                Mon parcours
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Après des années d'entraînements sans compléments alimentaires
                et d'erreurs, j'ai enfin trouvé les produits qui fonctionnent
                vraiment pour moi.
              </p>
            </div>
            <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg
                className="w-24 h-24"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          {/* Card 2 - Résultats concrets */}
          <div className="group relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-900/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">
                Résultats concrets
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Depuis que j'utilise cette stack, j'ai gagné 5kg de muscle en 6
                mois et mes performances ont explosé.
              </p>
              <div className="flex gap-4 mt-4">
                <div className="bg-white dark:bg-zinc-800 rounded-xl p-3 flex-1 border border-zinc-200 dark:border-zinc-700">
                  <p className="text-3xl font-bold text-blue-500">+5kg</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Muscle
                  </p>
                </div>
                <div className="bg-white dark:bg-zinc-800 rounded-xl p-3 flex-1 border border-zinc-200 dark:border-zinc-700">
                  <p className="text-3xl font-bold text-purple-500">6</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Mois
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Qualité avant tout */}
          <div className="group relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 rounded-3xl p-8 border border-green-200 dark:border-green-900/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">
                Qualité avant tout
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Je ne recommande que ce que j'utilise personnellement. Pas de
                bullshit, que des produits testés et approuvés.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <div className="w-8 h-8 rounded-full bg-teal-500 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  100% testé
                </span>
              </div>
            </div>
          </div>

          {/* Card 4 - Science-based */}
          <div className="group relative bg-gradient-to-br from-amber-500/10 to-yellow-500/10 dark:from-amber-500/20 dark:to-yellow-500/20 rounded-3xl p-8 border border-amber-200 dark:border-amber-900/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">
                Science-based
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Tous ces produits sont soutenus par des études scientifiques et
                utilisés par les meilleurs athlètes.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-full text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                  Études cliniques
                </span>
                <span className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-full text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                  Athlètes pro
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 shadow-2xl">
            <p className="text-white text-xl font-semibold mb-4">
              Prêt à transformer ton physique comme moi ?
            </p>
            <a
              href="#produits"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Découvrir les produits
            </a>
          </div>
        </div>
      </section>

      {/* Galerie Photos */}
      <section id="galerie" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-zinc-900 dark:text-white">
          Ma Transformation
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Photo 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-800 hover:scale-105 transition-transform duration-300">
            <Image
              src="/1.jpg"
              alt="Ma transformation"
              width={800}
              height={800}
              className="w-full h-full object-cover aspect-square"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-semibold">Avant</p>
              <p className="text-zinc-300 text-sm">
                Ma transformation en 6 mois
              </p>
            </div>
          </div>

          {/* Photo 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-800 hover:scale-105 transition-transform duration-300">
            <Image
              src="/avant 2.jpg"
              alt="Entraînement"
              width={800}
              height={800}
              className="w-full h-full object-cover aspect-square"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-semibold"></p>
              <p className="text-zinc-300 text-sm"></p>
            </div>
          </div>

          {/* Photo 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-800 hover:scale-105 transition-transform duration-300">
            <Image
              src="/avant 3.jpg"
              alt="Mes produits"
              width={800}
              height={800}
              className="w-full h-full object-cover aspect-square"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-semibold"></p>
              <p className="text-zinc-300 text-sm"></p>
            </div>
          </div>

          {/* Vidéo 1 */}
          <VideoPlayer
            src="/video11.mp4"
            title="🎥 Transformation"
            subtitle="Mon parcours fitness"
          />

          {/* Vidéo 2 */}
          <VideoPlayer
            src="/video12.mp4"
            title="🎥 Entraînement"
            subtitle="Ma routine à la salle"
          />

          {/* Vidéo 3 */}
          <VideoPlayer
            src="/video13.mp4"
            title="🎥 Résultats"
            subtitle="Mes gains en 6 mois"
          />
        </div>

        <p className="text-center mt-8 text-zinc-400">
          Suis-moi sur TikTok{" "}
          <a
            href="https://www.tiktok.com/@urek7forreal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400 font-semibold"
          >
            @urek7forreal
          </a>{" "}
          pour plus de contenu !
        </p>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-zinc-900 dark:text-white">
          Ce qu'ils en pensent
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="ml-3">
                <p className="font-bold text-zinc-900 dark:text-white">Alex</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Client depuis 3 mois
                </p>
              </div>
            </div>
            <p className="text-zinc-700 dark:text-zinc-300">
              "La whey est incroyable, meilleur goût que j'ai testé et les
              résultats sont là !"
            </p>
            <div className="mt-3 text-orange-500">⭐⭐⭐⭐</div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="ml-3">
                <p className="font-bold text-zinc-900 dark:text-white">Sarah</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Cliente depuis 2 mois
                </p>
              </div>
            </div>
            <p className="text-zinc-700 dark:text-zinc-300">
              "J'ai enfin trouvé des produits de qualité recommandés par
              quelqu'un de confiance"
            </p>
            <div className="mt-3 text-orange-500">⭐⭐⭐⭐</div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="ml-3">
                <p className="font-bold text-zinc-900 dark:text-white">
                  Thomas
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Client depuis 4 mois
                </p>
              </div>
            </div>
            <p className="text-zinc-700 dark:text-zinc-300">
              "La créatine a changé mes entraînements, je sens vraiment la
              différence"
            </p>
            <div className="mt-3 text-orange-500">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
        <p>© 2025 - Tous droits réservés</p>
        <div className="mt-4 space-x-4">
          <a
            href="https://www.tiktok.com/@urek7forreal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            TikTok
          </a>
          <a
            href="https://www.instagram.com/ouadal7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            Instagram
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            Contact
          </a>
        </div>
      </footer>

      {/* Modal de commande */}
      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selectedProduct.name}
        productPrice={selectedProduct.price}
      />
    </div>
  );
}
