#!/bin/bash

# Script de déploiement bash pour fitness-shop
# Utilise le script Node.js deploy.js

set -e

echo "================================================"
echo "  🚀 Fitness Shop - Script de Déploiement"
echo "================================================"
echo ""

# Vérifier que le token Vercel est configuré
if [ -z "$VERCEL_TOKEN" ]; then
  echo "❌ Erreur: La variable VERCEL_TOKEN n'est pas définie"
  echo ""
  echo "Pour utiliser ce script, configure la variable d'environnement:"
  echo "  export VERCEL_TOKEN='ton_token_vercel'"
  echo ""
  echo "Tu peux générer un token depuis: https://vercel.com/account/tokens"
  exit 1
fi

# Afficher les informations du projet
echo "📦 Projet: fitness-shop"
echo "🆔 Project ID: ${VERCEL_PROJECT_ID:-prj_44jQvm480414Lq5SXh6hJHqmSVmh}"
echo "🔑 Token configuré: ✓"
echo ""

# Exécuter le script de déploiement Node.js
echo "Déclenchement du redéploiement..."
echo ""

node "$(dirname "$0")/deploy.js"

exit_code=$?

echo ""
echo "================================================"
if [ $exit_code -eq 0 ]; then
  echo "✅ Script de déploiement exécuté avec succès!"
else
  echo "❌ Le script de déploiement s'est arrêté avec une erreur"
fi
echo "================================================"

exit $exit_code
