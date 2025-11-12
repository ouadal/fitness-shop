# 🎥 Comment ajouter tes vidéos

## ✅ Les 3 dernières cartes sont maintenant des vidéos !

J'ai remplacé les 3 dernières photos par des lecteurs vidéo avec :
- Contrôles de lecture (play, pause, volume)
- Image de prévisualisation (poster)
- Légendes personnalisées
- Design responsive

## 📹 Pour ajouter tes vidéos

### Étape 1 : Prépare tes vidéos

1. **Format recommandé :** MP4 (le plus compatible)
2. **Taille recommandée :** 
   - Résolution : 720p ou 1080p
   - Durée : 15-60 secondes (pour un chargement rapide)
   - Poids : Moins de 10 MB par vidéo

3. **Compresser tes vidéos (optionnel mais recommandé) :**
   - Utilise [HandBrake](https://handbrake.fr/) (gratuit)
   - Ou [CloudConvert](https://cloudconvert.com/mp4-converter) (en ligne)
   - Ou [Clipchamp](https://clipchamp.com/) (en ligne)

### Étape 2 : Renomme tes vidéos

Renomme tes 3 vidéos :
- `video1.mp4` - Transformation
- `video2.mp4` - Entraînement
- `video3.mp4` - Résultats

### Étape 3 : Ajoute-les dans le dossier public

1. Ouvre le dossier `fitness-shop/public/`
2. Glisse tes 3 vidéos dedans
3. Elles doivent être nommées exactement : `video1.mp4`, `video2.mp4`, `video3.mp4`

### Étape 4 : Rafraîchis ton navigateur

Appuie sur `Ctrl + F5` pour voir tes vidéos !

## 🎨 Personnaliser les vidéos

### Changer les légendes

Dans `app/page.tsx`, cherche les sections vidéo et modifie :

```tsx
<p className="text-white font-semibold">🎥 Transformation</p>
<p className="text-zinc-300 text-sm">Mon parcours fitness</p>
```

### Changer les images de prévisualisation (poster)

Les images qui s'affichent avant de lancer la vidéo :

```tsx
poster="/4.jpg"  // Change par ton image
```

### Désactiver l'autoplay

Par défaut, les vidéos ne se lancent pas automatiquement (c'est mieux pour l'expérience utilisateur).

Si tu veux l'autoplay (non recommandé) :
```tsx
<video 
  autoplay
  muted  // Obligatoire avec autoplay
  loop
  ...
>
```

## 📱 Utiliser des vidéos depuis ton téléphone

### Méthode 1 : Transfert direct
1. Connecte ton téléphone à l'ordinateur
2. Copie les vidéos
3. Renomme-les et mets-les dans `public/`

### Méthode 2 : Via WhatsApp/Email
1. Envoie-toi les vidéos par WhatsApp ou email
2. Télécharge-les sur ton ordinateur
3. Renomme-les et mets-les dans `public/`

### Méthode 3 : Via Google Drive/Dropbox
1. Upload les vidéos sur Drive/Dropbox depuis ton téléphone
2. Télécharge-les sur ton ordinateur
3. Renomme-les et mets-les dans `public/`

## 🎬 Idées de vidéos à créer

1. **Vidéo 1 - Transformation :**
   - Avant/Après en timelapse
   - Montage de tes progrès
   - Durée : 15-30 secondes

2. **Vidéo 2 - Entraînement :**
   - Toi en train de t'entraîner
   - Exercices clés
   - Durée : 20-40 secondes

3. **Vidéo 3 - Résultats :**
   - Pose de tes gains musculaires
   - Témoignage rapide
   - Durée : 15-30 secondes

## 🔧 Problèmes courants

### La vidéo ne se charge pas
- Vérifie que le nom du fichier est exact : `video1.mp4` (pas `Video1.mp4` ou `video1.MP4`)
- Vérifie que la vidéo est bien dans le dossier `public/`
- Rafraîchis avec `Ctrl + F5`

### La vidéo est trop lourde
- Compresse-la avec HandBrake ou CloudConvert
- Cible : moins de 10 MB par vidéo
- Résolution : 720p suffit pour le web

### La vidéo ne s'affiche pas sur mobile
- Assure-toi que le format est MP4
- Évite les codecs exotiques
- MP4 avec codec H.264 est le plus compatible

## 🌐 Alternative : Vidéos hébergées en ligne

Si tes vidéos sont trop lourdes, tu peux les héberger sur :

### YouTube (recommandé)
1. Upload ta vidéo sur YouTube
2. Clique sur "Partager" → "Intégrer"
3. Copie le code iframe
4. Remplace le `<video>` par l'iframe YouTube

Exemple :
```tsx
<div className="aspect-square">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/TON_VIDEO_ID"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
```

### Vimeo
Même principe que YouTube, mais avec Vimeo.

## 💡 Conseils

✅ **Qualité** : Filme en bonne lumière, stable
✅ **Durée** : Court = mieux (15-60 secondes)
✅ **Format** : MP4 H.264 pour la compatibilité
✅ **Poids** : Compresse pour un chargement rapide
✅ **Contenu** : Montre tes résultats, ton entraînement, ta transformation

## 🚀 C'est tout !

Tes vidéos vont rendre ton site encore plus dynamique et convaincant ! 🎥✨
