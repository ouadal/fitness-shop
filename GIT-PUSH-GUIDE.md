# 📤 Guide pour Push sur GitHub

## ✅ Favicon remplacé
Le favicon a été remplacé par ton logo (`logo.png` → `app/icon.png`)

## 🔧 Étapes pour push sur GitHub

### Étape 1 : Configure Git (une seule fois)

Ouvre un terminal dans le dossier `fitness-shop` et exécute :

```bash
# Configure ton nom (remplace par ton vrai nom)
git config --global user.name "Ton Nom"

# Configure ton email (utilise l'email de ton compte GitHub)
git config --global user.email "ton.email@example.com"
```

**Exemple :**
```bash
git config --global user.name "urek7forreal"
git config --global user.email "ton.email@gmail.com"
```

### Étape 2 : Vérifie que Git est initialisé

```bash
# Tu es déjà dans fitness-shop, vérifie :
git status
```

Tu devrais voir une liste de fichiers prêts à être commités.

### Étape 3 : Fais le premier commit

```bash
git commit -m "Initial commit: Site e-commerce fitness avec WhatsApp"
```

### Étape 4 : Connecte ton repo GitHub

Remplace `TON_USERNAME` par ton nom d'utilisateur GitHub :

```bash
git remote add origin https://github.com/TON_USERNAME/fitness-shop.git
```

**Exemple :**
```bash
git remote add origin https://github.com/urek7forreal/fitness-shop.git
```

### Étape 5 : Renomme la branche en main

```bash
git branch -M main
```

### Étape 6 : Push sur GitHub

```bash
git push -u origin main
```

**Note :** GitHub va te demander de t'authentifier :
- Soit avec ton mot de passe (si tu as activé l'authentification par mot de passe)
- Soit avec un Personal Access Token (recommandé)

### Créer un Personal Access Token (si nécessaire)

1. Va sur GitHub.com
2. Clique sur ton avatar → Settings
3. Scroll en bas → Developer settings
4. Personal access tokens → Tokens (classic)
5. Generate new token (classic)
6. Donne un nom : "fitness-shop"
7. Coche : `repo` (accès complet aux repos)
8. Generate token
9. **COPIE LE TOKEN** (tu ne le reverras plus !)
10. Utilise ce token comme mot de passe quand Git te le demande

## 📋 Résumé des commandes

```bash
# 1. Configure Git (une seule fois)
git config --global user.name "Ton Nom"
git config --global user.email "ton.email@example.com"

# 2. Commit les fichiers
git commit -m "Initial commit: Site e-commerce fitness avec WhatsApp"

# 3. Connecte le repo GitHub
git remote add origin https://github.com/TON_USERNAME/fitness-shop.git

# 4. Renomme la branche
git branch -M main

# 5. Push
git push -u origin main
```

## 🎯 Après le push

Une fois le push réussi, ton code sera sur GitHub ! Tu pourras :

1. **Voir ton code en ligne** : `https://github.com/TON_USERNAME/fitness-shop`
2. **Déployer sur Vercel** :
   - Va sur [vercel.com](https://vercel.com)
   - Connecte ton compte GitHub
   - Importe le repo `fitness-shop`
   - Déploiement automatique en 2 minutes !

## 🔄 Pour les prochaines modifications

Quand tu modifies ton code :

```bash
# 1. Ajoute les fichiers modifiés
git add .

# 2. Commit avec un message descriptif
git commit -m "Description de tes modifications"

# 3. Push sur GitHub
git push
```

## 📝 Messages de commit recommandés

- `"Ajout de nouveaux produits"`
- `"Modification des prix"`
- `"Ajout de nouvelles photos"`
- `"Correction du formulaire de commande"`
- `"Mise à jour du design"`
- `"Ajout de vidéos"`

## ❌ Problèmes courants

### Erreur : "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TON_USERNAME/fitness-shop.git
```

### Erreur : "failed to push some refs"
```bash
git pull origin main --rebase
git push -u origin main
```

### Erreur d'authentification
- Utilise un Personal Access Token au lieu du mot de passe
- Ou configure SSH (plus avancé)

## 🎉 C'est tout !

Ton projet sera sur GitHub et tu pourras :
- ✅ Sauvegarder ton code en ligne
- ✅ Travailler depuis plusieurs ordinateurs
- ✅ Déployer facilement sur Vercel/Netlify
- ✅ Partager ton code si besoin
- ✅ Avoir un historique de toutes tes modifications

## 📊 Contenu du projet

Voici ce qui sera pushé sur GitHub :

### Code source
- ✅ Tous les composants React (Header, VideoPlayer, OrderModal, etc.)
- ✅ Pages (page.tsx, layout.tsx)
- ✅ Styles (Tailwind CSS)
- ✅ Configuration (Next.js, TypeScript, ESLint)

### Assets
- ✅ Logo (logo.png, icon.png)
- ✅ Photos produits (whey.avif, creatine mono.jpg, Fast-r.avif)
- ✅ Photos galerie (1.jpg à 5.jpg)
- ✅ Vidéos (video11.mp4 à video13.mp4)

### Documentation
- ✅ README-PROJET.md (description complète)
- ✅ INSTRUCTIONS.md (guide d'utilisation)
- ✅ WHATSAPP-CONFIG.md (config WhatsApp)
- ✅ REPONSES-WHATSAPP.md (templates messages)
- ✅ AJOUTER-PHOTOS.md (guide photos)
- ✅ AJOUTER-VIDEOS.md (guide vidéos)
- ✅ DEPANNAGE.md (résolution problèmes)
- ✅ GIT-PUSH-GUIDE.md (ce fichier)

### Exclusions (.gitignore)
- ❌ node_modules/ (trop lourd, sera réinstallé avec npm install)
- ❌ .next/ (généré automatiquement)
- ❌ .env (fichiers secrets)

**Taille totale estimée :** ~50-100 MB (selon la taille des vidéos)
