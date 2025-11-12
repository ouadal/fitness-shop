# 📷 Comment ajouter tes photos

## 🎯 Méthode Simple (Recommandée)

### Étape 1 : Prépare tes photos
- Prends 6 photos de qualité (transformation, entraînement, produits, etc.)
- Renomme-les simplement : `photo1.jpg`, `photo2.jpg`, etc.
- Format recommandé : JPG ou PNG
- Taille idéale : 800x800 pixels (carré)

### Étape 2 : Ajoute les photos dans le dossier public
1. Ouvre le dossier `fitness-shop/public/`
2. Glisse tes 6 photos dedans
3. Elles doivent être nommées : `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, `photo5.jpg`, `photo6.jpg`

### Étape 3 : Modifie le code

Ouvre `app/page.tsx` et remplace chaque placeholder par ce code :

**Pour la Photo 1 :**
```tsx
{/* Photo 1 */}
<div className="group relative overflow-hidden rounded-2xl bg-zinc-800 hover:scale-105 transition-transform duration-300">
  <Image 
    src="/photo1.jpg" 
    alt="Ma transformation" 
    width={800}
    height={800}
    className="w-full h-full object-cover aspect-square"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
    <p className="text-white font-semibold">Avant / Après</p>
    <p className="text-zinc-300 text-sm">Ma transformation en 6 mois</p>
  </div>
</div>
```

**Pour la Photo 2 :**
```tsx
{/* Photo 2 */}
<div className="group relative overflow-hidden rounded-2xl bg-zinc-800 hover:scale-105 transition-transform duration-300">
  <Image 
    src="/photo2.jpg" 
    alt="Entraînement" 
    width={800}
    height={800}
    className="w-full h-full object-cover aspect-square"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
    <p className="text-white font-semibold">Entraînement</p>
    <p className="text-zinc-300 text-sm">Mon setup à la salle</p>
  </div>
</div>
```

**Continue ainsi pour les 6 photos** en changeant :
- Le numéro de la photo : `/photo3.jpg`, `/photo4.jpg`, etc.
- Le texte de description

**Note importante :** N'oublie pas d'importer Image en haut du fichier :
```tsx
import Image from "next/image";
```

## 🎨 Exemple Complet

Voici le code complet pour une galerie avec 6 vraies photos :

```tsx
{/* Galerie Photos */}
<section className="container mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold mb-12 text-center">
    Ma Transformation 💪
  </h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Photo 1 - Transformation */}
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-800 hover:scale-105 transition-transform duration-300">
      <Image 
        src="/photo1.jpg" 
        alt="Ma transformation" 
        width={800}
        height={800}
        className="w-full h-full object-cover aspect-square"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-white font-semibold">Avant / Après</p>
        <p className="text-zinc-300 text-sm">Ma transformation en 6 mois</p>
      </div>
    </div>

    {/* Photo 2 - Entraînement */}
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-800 hover:scale-105 transition-transform duration-300">
      <Image 
        src="/photo2.jpg" 
        alt="Entraînement" 
        width={800}
        height={800}
        className="w-full h-full object-cover aspect-square"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-white font-semibold">Entraînement</p>
        <p className="text-zinc-300 text-sm">Mon setup à la salle</p>
      </div>
    </div>

    {/* Photo 3 - Produits */}
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-800 hover:scale-105 transition-transform duration-300">
      <Image 
        src="/photo3.jpg" 
        alt="Mes produits" 
        width={800}
        height={800}
        className="w-full h-full object-cover aspect-square"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-white font-semibold">Mes Produits</p>
        <p className="text-zinc-300 text-sm">Ma stack quotidienne</p>
      </div>
    </div>

    {/* Photo 4 - Résultats */}
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-800 hover:scale-105 transition-transform duration-300">
      <Image 
        src="/photo4.jpg" 
        alt="Résultats" 
        width={800}
        height={800}
        className="w-full h-full object-cover aspect-square"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-white font-semibold">Résultats</p>
        <p className="text-zinc-300 text-sm">+5kg de muscle</p>
      </div>
    </div>

    {/* Photo 5 - Lifestyle */}
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-800 hover:scale-105 transition-transform duration-300">
      <Image 
        src="/photo5.jpg" 
        alt="Lifestyle" 
        width={800}
        height={800}
        className="w-full h-full object-cover aspect-square"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-white font-semibold">Lifestyle</p>
        <p className="text-zinc-300 text-sm">Mon quotidien fitness</p>
      </div>
    </div>

    {/* Photo 6 - Motivation */}
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-800 hover:scale-105 transition-transform duration-300">
      <Image 
        src="/photo6.jpg" 
        alt="Motivation" 
        width={800}
        height={800}
        className="w-full h-full object-cover aspect-square"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-white font-semibold">Motivation</p>
        <p className="text-zinc-300 text-sm">No pain, no gain</p>
      </div>
    </div>
  </div>
</section>
```

## 💡 Conseils pour de belles photos

✅ **Qualité** : Utilise des photos nettes et bien éclairées
✅ **Variété** : Alterne entre transformation, entraînement, produits, lifestyle
✅ **Format carré** : Recadre tes photos en carré (1:1) pour un meilleur rendu
✅ **Compression** : Utilise [TinyPNG.com](https://tinypng.com) pour réduire la taille sans perdre en qualité

## 📱 Utiliser des photos depuis ton téléphone

1. Prends tes photos avec ton téléphone
2. Envoie-les sur ton ordinateur (WhatsApp, email, etc.)
3. Renomme-les `photo1.jpg`, `photo2.jpg`, etc.
4. Glisse-les dans le dossier `public/`

## 🎯 Idées de photos à prendre

1. **Avant/Après** : Ta transformation physique
2. **Entraînement** : Toi à la salle en action
3. **Produits** : Tes compléments alignés
4. **Résultats** : Pose qui montre tes gains
5. **Lifestyle** : Toi en train de préparer ton shake
6. **Motivation** : Citation ou pose inspirante

## 🔧 Problème d'affichage ?

Si les photos ne s'affichent pas :
- Vérifie que les noms de fichiers sont exacts : `photo1.jpg` (pas `Photo1.JPG`)
- Assure-toi qu'elles sont bien dans le dossier `public/`
- Rafraîchis la page avec `Ctrl + F5`
- Vérifie que le format est JPG ou PNG

## 🚀 C'est tout !

Tes photos sont maintenant affichées dans une belle galerie responsive.
Tes visiteurs peuvent voir ta transformation et tes résultats ! 📸
