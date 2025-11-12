# 🔧 Guide de Dépannage

## Problème : Le lien Instagram ne s'ouvre pas

### Solution 1 : Vérifier la console du navigateur
1. Ouvre la console (F12)
2. Clique sur le bouton Instagram
3. Regarde s'il y a des erreurs

### Solution 2 : Tester le lien directement
Copie ce lien et colle-le dans ton navigateur :
```
https://www.instagram.com/ouadal7/
```

Si ça fonctionne, le problème vient du code.

### Solution 3 : Vérifier les bloqueurs de popup
- Désactive temporairement ton bloqueur de popup
- Ou autorise les popups pour localhost

### Solution 4 : Tester en navigation privée
1. Ouvre une fenêtre de navigation privée
2. Va sur `http://localhost:3000`
3. Teste le lien Instagram

## Problème : Le thème ne change pas

### Solution 1 : Vider le cache Next.js
```bash
cd fitness-shop
rm -rf .next
npm run dev
```

Sur Windows :
```cmd
cd fitness-shop
rmdir /s /q .next
npm run dev
```

### Solution 2 : Vider le localStorage
1. Ouvre la console (F12)
2. Va dans l'onglet "Application" ou "Storage"
3. Clique sur "Local Storage" → "http://localhost:3000"
4. Supprime la clé "theme"
5. Rafraîchis avec Ctrl + F5

### Solution 3 : Forcer le rafraîchissement
- Windows/Linux : `Ctrl + Shift + R` ou `Ctrl + F5`
- Mac : `Cmd + Shift + R`

### Solution 4 : Vérifier dans la console
1. Ouvre la console (F12)
2. Clique sur le bouton de thème
3. Tu devrais voir des messages comme :
   - "Theme loaded: dark" ou "Theme loaded: light"
   - "Toggling theme to: dark" ou "Toggling theme to: light"

### Solution 5 : Test manuel du thème
Ouvre la console et tape :
```javascript
// Pour passer en mode clair
document.documentElement.classList.remove('dark');
localStorage.setItem('theme', 'light');

// Pour passer en mode sombre
document.documentElement.classList.add('dark');
localStorage.setItem('theme', 'dark');
```

## Page de test

J'ai créé une page de test simple. Pour l'utiliser :

1. Crée un fichier `fitness-shop/app/test/page.tsx` :
```tsx
import TestLinks from '../test-links';

export default function TestPage() {
  return <TestLinks />;
}
```

2. Va sur `http://localhost:3000/test`
3. Teste les liens et le thème

## Vérifications rapides

### Le serveur tourne-t-il ?
```bash
# Vérifie que tu vois ce message :
# ▲ Next.js 16.0.1
# - Local: http://localhost:3000
```

### Le bon port ?
- Vérifie que tu vas bien sur `http://localhost:3000`
- Pas `http://localhost:3002` ou autre

### Le navigateur est à jour ?
- Chrome/Edge : Version 90+
- Firefox : Version 88+
- Safari : Version 14+

## Toujours pas résolu ?

### Redémarre tout
```bash
# 1. Arrête le serveur (Ctrl + C)
# 2. Supprime node_modules et .next
rm -rf node_modules .next

# 3. Réinstalle
npm install

# 4. Relance
npm run dev
```

### Teste avec un autre navigateur
Si ça marche dans un autre navigateur, le problème vient de ton navigateur principal.

## Contact

Si rien ne fonctionne, envoie-moi :
1. Une capture d'écran de la console (F12)
2. Le message d'erreur exact
3. Ton navigateur et sa version
