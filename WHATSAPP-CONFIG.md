# 📱 Configuration WhatsApp

## ⚠️ IMPORTANT : Configure ton numéro WhatsApp

Ouvre le fichier `app/components/OrderModal.tsx` et modifie la ligne 24 :

```typescript
const whatsappNumber = '33612345678'; // ⚠️ CHANGE CE NUMÉRO
```

### Format du numéro :
- **Cameroun** : `237XXXXXXXXX` (exemple: `237690123456`)
- **France** : `33XXXXXXXXX` (exemple: `33612345678`)
- **Côte d'Ivoire** : `225XXXXXXXXXX` (exemple: `2250123456789`)
- **Sénégal** : `221XXXXXXXXX` (exemple: `221771234567`)

**Règles importantes :**
- ❌ Pas d'espaces
- ❌ Pas de tirets
- ❌ Pas de + au début
- ❌ Pas de 0 au début du numéro local
- ✅ Juste l'indicatif pays + numéro

### Exemple complet :
Si ton numéro WhatsApp est **+237 6 90 12 34 56**, tu dois écrire :
```typescript
const whatsappNumber = '237690123456';
```

## 🎯 Comment ça marche ?

1. Le client clique sur "Acheter"
2. Un formulaire s'ouvre (modal)
3. Le client remplit ses informations :
   - Nom et Prénom
   - Téléphone
   - Email
   - Adresse complète
4. Il clique sur "Envoyer sur WhatsApp"
5. WhatsApp s'ouvre automatiquement avec un message pré-rempli contenant :
   - Le produit commandé
   - Le prix
   - Toutes les infos du client
6. Le message est envoyé directement sur TON WhatsApp ! 🎉

## 📋 Exemple de message que tu recevras :

```
🛒 NOUVELLE COMMANDE

📦 Produit: Whey Protéine
💰 Prix: 35000 FCFA

👤 Informations Client:
• Nom: Kouassi
• Prénom: Jean
• 📞 Téléphone: 0690123456
• 📧 Email: jean.kouassi@email.com
• 📍 Adresse: 123 Rue de la Paix
• 🏙️ Ville: Abidjan
• 📮 Code Postal: 00225

━━━━━━━━━━━━━━━━━━━━
📋 PROCHAINES ÉTAPES:

1️⃣ Confirmer la disponibilité du produit
2️⃣ Confirmer le prix et les frais de livraison
3️⃣ Mode de paiement: YAS ou FLOOZ
4️⃣ Organiser la livraison

💬 Merci de me confirmer votre commande !
```

## 🧪 Tester le système

1. Lance le site : `npm run dev`
2. Clique sur un bouton "Acheter"
3. Remplis le formulaire avec des infos de test
4. Clique sur "Envoyer sur WhatsApp"
5. Vérifie que WhatsApp s'ouvre avec le bon message

## 💡 Avantages de cette méthode

✅ **Simple** : Pas besoin de backend ou de base de données
✅ **Gratuit** : Aucun coût d'hébergement ou d'API
✅ **Direct** : Tu reçois les commandes instantanément
✅ **Flexible** : Tu peux négocier avec le client directement
✅ **Sécurisé** : Pas de paiement en ligne à gérer
✅ **Mobile-friendly** : Fonctionne parfaitement sur téléphone

## 🚀 Prochaines étapes

Une fois que tu reçois une commande sur WhatsApp :
1. Confirme la disponibilité du produit
2. Confirme le prix et les frais de livraison
3. Demande le mode de paiement (Yas, flooz.)
4. Organise la livraison
5. Envoie le numéro de suivi si applicable

## 🔧 Personnalisation

Tu peux modifier le message WhatsApp dans `OrderModal.tsx` ligne 27-40 pour :
- Ajouter des emojis
- Changer le format
- Ajouter des informations supplémentaires
- Modifier le texte

Exemple pour ajouter une question sur le mode de paiement :
```typescript
const message = `
🛒 *NOUVELLE COMMANDE*

📦 Produit: ${productName}
💰 Prix: ${productPrice}

👤 *Informations Client:*
Nom: ${formData.nom}
Prénom: ${formData.prenom}
📞 Téléphone: ${formData.telephone}
📧 Email: ${formData.email}
📍 Adresse: ${formData.adresse}
🏙️ Ville: ${formData.ville}
📮 Code Postal: ${formData.codePostal}

💳 Mode de paiement souhaité : [À préciser]
`.trim();
```


## 🚀 Guide de traitement des commandes

### 1️⃣ Confirmer la disponibilité
Réponds rapidement au client :
```
✅ Bonjour [Nom] ! Merci pour votre commande.
Le produit [Nom du produit] est bien disponible en stock.
```

### 2️⃣ Confirmer le prix et les frais de livraison
```
💰 Prix du produit: [Prix] FCFA
🚚 Frais de livraison: [Montant] FCFA (selon votre ville)
📦 TOTAL: [Total] FCFA
```

### 3️⃣ Demander le mode de paiement
```
💳 Modes de paiement acceptés:
• YAS (Moov Money)
• FLOOZ (Togocom)

Quel mode de paiement préférez-vous ?
```

### 4️⃣ Organiser la livraison
```
📍 Adresse de livraison confirmée:
[Adresse du client]

🕐 Délai de livraison: [X] jours
📞 Nous vous contacterons pour confirmer la réception.
```

### 5️⃣ Envoyer les instructions de paiement
```
💳 Instructions de paiement [YAS/FLOOZ]:
Numéro: [Ton numéro]
Montant: [Total] FCFA
Nom: [Ton nom]

Envoyez-nous la capture d'écran du paiement pour confirmation.
```

## 💡 Conseils pour gérer les commandes

✅ **Réponds rapidement** : Dans les 30 minutes si possible
✅ **Sois professionnel** : Utilise un ton courtois et clair
✅ **Confirme tout** : Prix, adresse, mode de paiement
✅ **Garde une trace** : Note les commandes dans un cahier ou Excel
✅ **Suivi** : Envoie un message quand le colis est expédié
