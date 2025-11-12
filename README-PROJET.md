# 🏋️ Fitness Shop - Site E-commerce de Compléments Alimentaires

Site vitrine Next.js moderne pour vendre des produits fitness avec système de commande via WhatsApp.

## 🚀 Fonctionnalités

### ✅ Page d'accueil
- Header sticky avec logo personnalisé
- Navigation fluide (Produits, Galerie, Avis)
- Toggle thème clair/sombre
- Liens vers TikTok et Instagram

### 🛍️ Produits
- 3 produits avec photos réelles
- Cartes modernes avec effet hover
- Badge "MEILLEURES VENTES"
- Bouton d'achat avec icône panier
- Prix en FCFA

### 📱 Système de commande WhatsApp
- Formulaire de commande complet
- Envoi automatique sur WhatsApp
- Informations client : nom, prénom, téléphone, email (optionnel), adresse, ville
- Message structuré avec prochaines étapes :
  1. Confirmer la disponibilité
  2. Confirmer le prix et frais de livraison
  3. Mode de paiement (YAS ou FLOOZ)
  4. Organiser la livraison

### 📸 Galerie
- 3 photos de transformation
- 3 vidéos avec lecteur personnalisé
- Bouton play orange/rouge
- Légendes personnalisées

### 💡 Section "Pourquoi ces produits"
- 4 cartes colorées avec animations
- Stats visuelles (+5kg, 6 mois)
- Badges de validation
- CTA vers les produits

### ⭐ Témoignages
- 3 avis clients avec notes 5 étoiles
- Design moderne avec avatars

### 🎨 Design
- Thème clair/sombre avec sauvegarde localStorage
- Responsive (mobile, tablette, desktop)
- Animations fluides
- Gradients modernes
- Icônes SVG

## 🛠️ Technologies

- **Next.js 16** - Framework React avec Turbopack
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utility-first
- **React Hooks** - useState, useEffect, useRef
- **WhatsApp API** - Intégration commandes

## 📦 Structure du projet

```
fitness-shop/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Header avec navigation
│   │   ├── ThemeToggle.tsx     # Toggle thème clair/sombre
│   │   ├── OrderModal.tsx      # Modal de commande
│   │   └── VideoPlayer.tsx     # Lecteur vidéo personnalisé
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Page d'accueil
│   ├── globals.css             # Styles globaux
│   └── icon.png                # Favicon (logo)
├── public/
│   ├── logo.png                # Logo du site
│   ├── 1.jpg à 5.jpg          # Photos galerie
│   ├── whey.avif               # Photo produit 1
│   ├── creatine mono.jpg       # Photo produit 2
│   ├── Fast-r.avif             # Photo produit 3
│   └── video11-13.mp4          # Vidéos
├── INSTRUCTIONS.md             # Guide complet
├── WHATSAPP-CONFIG.md          # Config WhatsApp
├── REPONSES-WHATSAPP.md        # Templates messages
├── AJOUTER-PHOTOS.md           # Guide photos
├── AJOUTER-VIDEOS.md           # Guide vidéos
├── DEPANNAGE.md                # Résolution problèmes
└── README.md                   # Ce fichier
```

## 🚀 Installation

```bash
# Cloner le repo
git clone https://github.com/TON_USERNAME/fitness-shop.git
cd fitness-shop

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## ⚙️ Configuration

### 1. Numéro WhatsApp
Modifie `app/components/OrderModal.tsx` ligne 30 :
```typescript
const whatsappNumber = "22897488732"; // Ton numéro avec indicatif pays
```

### 2. Liens réseaux sociaux
Modifie dans `app/components/Header.tsx` et `app/page.tsx` :
- TikTok : `https://www.tiktok.com/@urek7forreal`
- Instagram : `https://www.instagram.com/ouadal7/`

### 3. Produits
Modifie les produits dans `app/page.tsx` :
- Noms, descriptions, prix
- Photos dans `public/`

### 4. Photos et vidéos
- Photos : Ajoute dans `public/` (1.jpg à 5.jpg)
- Vidéos : Ajoute dans `public/` (video11.mp4 à video13.mp4)

## 🌐 Déploiement

### Vercel (Recommandé)
```bash
npm i -g vercel
vercel
```

Ou connecte ton repo GitHub à [vercel.com](https://vercel.com)

### Netlify
```bash
npm run build
# Upload le dossier .next sur netlify.com
```

## 📱 Utilisation

1. Le client visite le site
2. Clique sur "Acheter" sur un produit
3. Remplit le formulaire de commande
4. Clique sur "Envoyer sur WhatsApp"
5. WhatsApp s'ouvre avec le message pré-rempli
6. Le message est envoyé sur ton WhatsApp
7. Tu traites la commande selon les étapes indiquées

## 📚 Documentation

- `INSTRUCTIONS.md` - Guide complet de personnalisation
- `WHATSAPP-CONFIG.md` - Configuration WhatsApp détaillée
- `REPONSES-WHATSAPP.md` - Templates de réponses clients
- `AJOUTER-PHOTOS.md` - Comment ajouter des photos
- `AJOUTER-VIDEOS.md` - Comment ajouter des vidéos
- `DEPANNAGE.md` - Résolution des problèmes courants

## 🎯 Prochaines étapes

- [ ] Ajouter plus de produits
- [ ] Intégrer un système de paiement en ligne
- [ ] Ajouter un tableau de bord admin
- [ ] Créer un système de suivi de commandes
- [ ] Ajouter Google Analytics
- [ ] Optimiser le SEO

## 📄 Licence

Ce projet est privé et destiné à un usage personnel.

## 👤 Auteur

**@urek7forreal**
- TikTok: [@urek7forreal](https://www.tiktok.com/@urek7forreal)
- Instagram: [@ouadal7](https://www.instagram.com/ouadal7/)

## 🙏 Remerciements

Projet créé avec Next.js, Tailwind CSS et beaucoup de café ☕
