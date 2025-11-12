"use client";

import { useState } from "react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productPrice: string;
}

export default function OrderModal({
  isOpen,
  onClose,
  productName,
  productPrice,
}: OrderModalProps) {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    adresse: "",
    ville: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ton numéro WhatsApp (avec indicatif pays, ex: 237690123456 pour le Cameroun)
    const whatsappNumber = "22897488732"; // ⚠️ CHANGE CE NUMÉRO avec ton indicatif pays (228 = Togo)

    // Construction du message WhatsApp
    const message = `
🛒 *NOUVELLE COMMANDE*

📦 *Produit:* ${productName}
💰 *Prix:* ${productPrice}

👤 *Informations Client:*
• Nom: ${formData.nom}
• Prénom: ${formData.prenom}
• 📞 Téléphone: ${formData.telephone}${
      formData.email ? `\n• 📧 Email: ${formData.email}` : ""
    }
• 📍 Adresse: ${formData.adresse}
• 🏙️ Ville: ${formData.ville}

━━━━━━━━━━━━━━━━━━━━
📋 *PROCHAINES ÉTAPES:*

1️⃣ Confirmer la disponibilité du produit
2️⃣ Confirmer le prix et les frais de livraison
3️⃣ Mode de paiement: YAS ou FLOOZ
4️⃣ Organiser la livraison

💬 Merci de me confirmer votre commande !
    `.trim();

    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(message);

    // Ouvrir WhatsApp avec le message pré-rempli
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );

    // Fermer le modal et réinitialiser le formulaire
    onClose();
    setFormData({
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      adresse: "",
      ville: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Commander</h3>
              <p className="text-zinc-400 text-sm mt-1">
                {productName} - {productPrice}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nom}
                  onChange={(e) =>
                    setFormData({ ...formData, nom: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="Dupont"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  required
                  value={formData.prenom}
                  onChange={(e) =>
                    setFormData({ ...formData, prenom: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="Jean"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Téléphone *
              </label>
              <input
                type="tel"
                required
                value={formData.telephone}
                onChange={(e) =>
                  setFormData({ ...formData, telephone: e.target.value })
                }
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                placeholder="90 12 34 56"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Email <span className="text-zinc-500 text-xs">(optionnel)</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                placeholder="jean.dupont@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Adresse *
              </label>
              <input
                type="text"
                required
                value={formData.adresse}
                onChange={(e) =>
                  setFormData({ ...formData, adresse: e.target.value })
                }
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                placeholder="123 Rue de la République"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Ville *
              </label>
              <input
                type="text"
                required
                value={formData.ville}
                onChange={(e) =>
                  setFormData({ ...formData, ville: e.target.value })
                }
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
                placeholder="Lomé"
              />
            </div>

            {/* Boutons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-semibold transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Envoyer sur WhatsApp
                <span>📱</span>
              </button>
            </div>
          </form>

          <p className="text-xs text-zinc-500 text-center mt-4">
            En cliquant sur "Envoyer", vous serez redirigé vers WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
}
