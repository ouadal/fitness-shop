# Guide de Déploiement - Fitness Shop

Ce document explique comment utiliser le script de déploiement personnalisé pour redéployer automatiquement le projet sur Vercel.

## Prérequis

1. **Token Vercel**: Tu dois avoir un token d'authentification Vercel valide
   - Génère un token sur: https://vercel.com/account/tokens
   - Copie le token en lieu sûr

2. **Project ID**: L'ID du projet Vercel (déjà configuré: `prj_44jQvm480414Lq5SXh6hJHqmSVmh`)

## Configuration

### Option 1: Variable d'environnement temporaire

```bash
export VERCEL_TOKEN='ton_token_vercel'
npm run deploy
```

### Option 2: Fichier .env.local (recommandé)

Crée un fichier `.env.local` à la racine du projet:

```env
VERCEL_TOKEN=ton_token_vercel
VERCEL_PROJECT_ID=prj_44jQvm480414Lq5SXh6hJHqmSVmh
```

Puis exécute:

```bash
npm run deploy
```

### Option 3: Utiliser le script bash directement

```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

## Utilisation

### Via npm

```bash
npm run deploy
```

### Via Node.js directement

```bash
node scripts/deploy.js
```

## Automatisation (CI/CD)

Pour automatiser le déploiement via GitHub Actions, crée un fichier `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main, redeploy-project]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Deploy to Vercel
        run: npm run deploy
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

Puis ajoute tes secrets GitHub:
1. Va sur: https://github.com/ouadal/fitness-shop/settings/secrets/actions
2. Ajoute `VERCEL_TOKEN` et `VERCEL_PROJECT_ID`

## Dépannage

### "VERCEL_TOKEN n'est pas défini"
- Assure-toi que le token est configuré comme variable d'environnement
- Vérifie le fichier `.env.local` s'il existe
- Sur le terminal: `echo $VERCEL_TOKEN`

### "Erreur 401 - Unauthorized"
- Le token est invalide ou expiré
- Génère un nouveau token sur https://vercel.com/account/tokens
- Assure-toi que le token a les bonnes permissions

### "Erreur 404 - Project not found"
- L'ID du projet est incorrect
- Vérifie l'ID du projet sur le dashboard Vercel

## Résultat

Après l'exécution réussie, tu recevras:
- ✅ Statut de succès
- 🔗 URL du déploiement
- 📝 Deployment ID pour suivi

## Plus d'informations

- Documentation Vercel API: https://vercel.com/docs/rest-api
- Dashboard Vercel: https://vercel.com/dashboard
