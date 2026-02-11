#!/usr/bin/env node

/**
 * Script de déploiement personnalisé pour le fitness-shop
 * Utilise l'API Vercel pour redéployer le projet automatiquement
 */

const https = require('https');

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = process.env.VERCEL_PROJECT_ID || 'prj_44jQvm480414Lq5SXh6hJHqmSVmh';

if (!VERCEL_TOKEN) {
  console.error('❌ Erreur: VERCEL_TOKEN n\'est pas défini');
  process.exit(1);
}

/**
 * Déclenche un redéploiement via l'API Vercel
 */
async function deploy() {
  console.log('🚀 Démarrage du déploiement...');
  console.log(`📦 Projet ID: ${PROJECT_ID}`);

  const options = {
    hostname: 'api.vercel.com',
    path: `/v13/deployments?projectId=${PROJECT_ID}`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${VERCEL_TOKEN}`,
      'Content-Type': 'application/json',
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);

          if (res.statusCode === 201 || res.statusCode === 200) {
            console.log('✅ Déploiement déclenché avec succès!');
            console.log(`🔗 URL: https://${response.url}`);
            console.log(`📝 Deployment ID: ${response.id}`);
            resolve(response);
          } else {
            console.error('❌ Erreur lors du déploiement:');
            console.error(JSON.stringify(response, null, 2));
            reject(new Error(response.message || 'Erreur inconnue'));
          }
        } catch (error) {
          console.error('❌ Erreur lors du parsing de la réponse:', error.message);
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      console.error('❌ Erreur réseau:', error.message);
      reject(error);
    });

    // Envoyer une requête vide pour déclencher le déploiement
    req.write('{}');
    req.end();
  });
}

// Exécuter le déploiement
deploy()
  .then(() => {
    console.log('\n✨ Déploiement en cours sur Vercel...');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Erreur fatale:', error.message);
    process.exit(1);
  });
