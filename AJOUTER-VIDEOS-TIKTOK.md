# 📱 Comment ajouter tes vidéos TikTok

## ✅ Ta première vidéo est déjà intégrée !

J'ai ajouté ta vidéo : `https://www.tiktok.com/@urek7forreal/video/7552913879249063224`

## 🎯 Pour ajouter d'autres vidéos

### Étape 1 : Récupère le code embed de TikTok

1. Va sur ta vidéo TikTok
2. Clique sur les 3 points `...`
3. Clique sur `Intégrer` ou `Embed`
4. Copie le code qui ressemble à ça :

```html
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@username/video/123456789" data-video-id="123456789">
  <section>
    <a target="_blank" href="...">@username</a>
  </section>
</blockquote>
```

### Étape 2 : Trouve l'ID de la vidéo

Dans le code embed, cherche `data-video-id="7552913879249063224"`
C'est l'ID de ta vidéo.

### Étape 3 : Ajoute la vidéo dans ton site

Ouvre `app/page.tsx` et remplace un des placeholders par ce code :

```tsx
{/* Vidéo 2 - Ta deuxième vidéo */}
<div className="w-full max-w-[325px]">
  <blockquote 
    className="tiktok-embed" 
    cite="https://www.tiktok.com/@urek7forreal/video/TON_VIDEO_ID" 
    data-video-id="TON_VIDEO_ID"
    style={{ maxWidth: '605px', minWidth: '325px' }}
  >
    <section>
      <a 
        target="_blank" 
        title="@urek7forreal" 
        href="https://www.tiktok.com/@urek7forreal?refer=embed"
        rel="noopener noreferrer"
      >
        @urek7forreal
      </a>
    </section>
  </blockquote>
</div>
```

### Exemple complet avec 3 vidéos :

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
  
  {/* Vidéo 1 */}
  <div className="w-full max-w-[325px]">
    <blockquote 
      className="tiktok-embed" 
      cite="https://www.tiktok.com/@urek7forreal/video/7552913879249063224" 
      data-video-id="7552913879249063224"
      style={{ maxWidth: '605px', minWidth: '325px' }}
    >
      <section>
        <a 
          target="_blank" 
          title="@urek7forreal" 
          href="https://www.tiktok.com/@urek7forreal?refer=embed"
          rel="noopener noreferrer"
        >
          @urek7forreal
        </a>
      </section>
    </blockquote>
  </div>

  {/* Vidéo 2 */}
  <div className="w-full max-w-[325px]">
    <blockquote 
      className="tiktok-embed" 
      cite="https://www.tiktok.com/@urek7forreal/video/AUTRE_VIDEO_ID" 
      data-video-id="AUTRE_VIDEO_ID"
      style={{ maxWidth: '605px', minWidth: '325px' }}
    >
      <section>
        <a 
          target="_blank" 
          title="@urek7forreal" 
          href="https://www.tiktok.com/@urek7forreal?refer=embed"
          rel="noopener noreferrer"
        >
          @urek7forreal
        </a>
      </section>
    </blockquote>
  </div>

  {/* Vidéo 3 */}
  <div className="w-full max-w-[325px]">
    <blockquote 
      className="tiktok-embed" 
      cite="https://www.tiktok.com/@urek7forreal/video/ENCORE_AUTRE_ID" 
      data-video-id="ENCORE_AUTRE_ID"
      style={{ maxWidth: '605px', minWidth: '325px' }}
    >
      <section>
        <a 
          target="_blank" 
          title="@urek7forreal" 
          href="https://www.tiktok.com/@urek7forreal?refer=embed"
          rel="noopener noreferrer"
        >
          @urek7forreal
        </a>
      </section>
    </blockquote>
  </div>
</div>
```

## 💡 Conseils

✅ **Choisis tes meilleures vidéos** : Celles qui montrent tes résultats, tes conseils, ou tes produits
✅ **3 vidéos suffisent** : Pas besoin d'en mettre trop, garde les meilleures
✅ **Vidéos récentes** : Privilégie tes vidéos les plus récentes et populaires
✅ **Variété** : Alterne entre transformation, conseils, et présentation produits

## 🔧 Problème d'affichage ?

Si les vidéos ne s'affichent pas :
1. Vérifie que le script TikTok est bien dans `app/layout.tsx` (déjà fait ✅)
2. Rafraîchis la page avec `Ctrl + F5`
3. Vérifie que l'ID de la vidéo est correct
4. Assure-toi que la vidéo est publique sur TikTok

## 🎨 Personnaliser l'affichage

Tu peux modifier dans `app/page.tsx` :
- Le nombre de colonnes : `lg:grid-cols-3` → `lg:grid-cols-2` pour 2 colonnes
- L'espacement : `gap-6` → `gap-8` pour plus d'espace
- La largeur max : `max-w-[325px]` → `max-w-[400px]` pour des vidéos plus grandes

## 🚀 C'est tout !

Tes vidéos TikTok sont maintenant intégrées et s'affichent directement sur ton site.
Les visiteurs peuvent les regarder sans quitter ta page ! 📱
