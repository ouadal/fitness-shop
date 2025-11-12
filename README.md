# 🏋️ Site Fitness - Mini-Site de Vente

Site vitrine Next.js pour vendre tes produits fitness avec commandes via WhatsApp.

## 🚀 Démarrage Rapide

```bash
cd fitness-shop
npm run dev
```

Ouvre `http://localhost:3000`

## ⚙️ Configuration Essentielle

### 1️⃣ Configure ton WhatsApp (OBLIGATOIRE)
Ouvre `app/components/OrderModal.tsx` ligne 24 :
```typescript
const whatsappNumber = '237690123456'; // Remplace par ton numéro
```

### 2️⃣ Ajoute tes photos (Optionnel)
1. Glisse 6 photos dans le dossier `public/`
2. Nomme-les : `photo1.jpg`, `photo2.jpg`, etc.
3. Suis le guide : `AJOUTER-PHOTOS.md`

## 📚 Guides Disponibles

- **DEMARRAGE-RAPIDE.md** - Guide de démarrage en 6 étapes
- **WHATSAPP-CONFIG.md** - Configuration WhatsApp détaillée
- **AJOUTER-PHOTOS.md** - Comment ajouter tes photos
- **INSTRUCTIONS.md** - Guide complet de personnalisation

## ✨ Fonctionnalités

✅ Page de vente avec 3 produits personnalisables
✅ Formulaire de commande qui envoie sur WhatsApp
✅ Galerie photos pour ta transformation
✅ Section témoignages clients
✅ Design responsive (mobile/tablette/desktop)
✅ Optimisé pour la conversion

## 🎨 Personnalisation

### Modifier les produits
Édite `app/page.tsx` - Section "Produits"

### Changer les prix
Cherche `35000frcfa`, `20000frcfa`, etc. et modifie

### Modifier les couleurs
Remplace `orange-500` et `red-500` par d'autres couleurs Tailwind

## 🌐 Déploiement Gratuit

### Vercel (Recommandé)
```bash
npm i -g vercel
vercel
```

Ou connecte ton repo GitHub à [vercel.com](https://vercel.com)

### Netlify
1. Build : `npm run build`
2. Upload le dossier `.next` sur [netlify.com](https://netlify.com)

## 📱 Ajouter dans ta bio TikTok

Une fois déployé, tu auras un lien :
`https://ton-site.vercel.app`

Ajoute-le dans ta bio TikTok @urek7forreal ! 🎯

## 🛠️ Technologies

- **Next.js 16** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **WhatsApp API** - Commandes directes

## 💡 Support

Consulte les guides dans le dossier pour toute question.

## 🎉 Prêt à vendre !

Ton site est opérationnel. Les commandes arrivent directement sur ton WhatsApp.
Bonne vente ! 💰
