# 🏋️ Mini-Site Fitness - Instructions

## 🚀 Lancer le site en local

```bash
cd fitness-shop
npm run dev
```

Ouvre ton navigateur sur `http://localhost:3000`

## 📝 Personnalisation

### 1. Modifier les produits

Dans `app/page.tsx`, cherche la section "Produits Section" et modifie :

- Les noms des produits
- Les prix
- Les descriptions
- Les emojis

### 2. Intégrer tes vidéos TikTok

Pour intégrer tes vraies vidéos TikTok :

1. Va sur ta vidéo TikTok
2. Clique sur "Partager" → "Intégrer"
3. Copie le code embed
4. Remplace les placeholders dans la section "Vidéos TikTok"

Exemple de code TikTok embed :

```tsx
<blockquote
  className="tiktok-embed"
  cite="https://www.tiktok.com/@username/video/123456789"
  data-video-id="123456789"
>
  <section></section>
</blockquote>
<script async src="https://www.tiktok.com/embed.js"></script>
```

### 3. Modifier les témoignages

Dans la section "Témoignages", remplace les noms et commentaires par de vrais avis.

### 4. Ajouter tes liens d'achat

Remplace les boutons "Acheter" par tes vrais liens affiliés :

```tsx
<a
  href="TON_LIEN_AFFILIE"
  target="_blank"
  className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full font-semibold transition-colors"
>
  Acheter
</a>
```

### 5. Personnaliser les couleurs

Les couleurs principales sont orange/rouge. Pour changer :

- Cherche `orange-500` et `red-500` dans le code
- Remplace par d'autres couleurs Tailwind (blue-500, green-500, etc.)

## 🌐 Déployer en ligne (GRATUIT)

### Option 1 : Vercel (Recommandé)

1. Crée un compte sur [vercel.com](https://vercel.com)
2. Connecte ton GitHub
3. Push ton code sur GitHub
4. Importe le projet sur Vercel
5. Déploiement automatique en 2 minutes !

### Option 2 : Netlify

1. Crée un compte sur [netlify.com](https://netlify.com)
2. Drag & drop le dossier `.next` après avoir fait `npm run build`

## 📱 Ajouter le lien dans ta bio TikTok

Une fois déployé, tu auras un lien type :
`https://ton-site.vercel.app`

Ajoute-le dans ta bio TikTok ! 🎯

## 🎨 Améliorations futures

- Ajouter un système de paiement (Stripe)
- Créer un formulaire de contact
- Ajouter Google Analytics
- Optimiser pour le SEO
- Ajouter plus de produits

## 💡 Besoin d'aide ?

Le site est prêt à l'emploi ! Personnalise-le à ton image et lance-le 🚀
