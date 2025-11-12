// Page de test pour vérifier les liens
export default function TestLinks() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Test des liens</h1>
      
      <div className="space-y-2">
        <p>Lien Instagram (devrait ouvrir dans une nouvelle fenêtre) :</p>
        <a 
          href="https://www.instagram.com/ouadal7/"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 bg-purple-500 text-white rounded"
          onClick={() => console.log('Instagram clicked')}
        >
          Ouvrir Instagram @ouadal7
        </a>
      </div>

      <div className="space-y-2">
        <p>Lien TikTok (devrait ouvrir dans une nouvelle fenêtre) :</p>
        <a 
          href="https://www.tiktok.com/@urek7forreal"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 bg-black text-white rounded"
          onClick={() => console.log('TikTok clicked')}
        >
          Ouvrir TikTok @urek7forreal
        </a>
      </div>

      <div className="space-y-2">
        <p>Test du thème :</p>
        <button
          onClick={() => {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('theme', 'light');
              console.log('Switched to light');
            } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('theme', 'dark');
              console.log('Switched to dark');
            }
          }}
          className="block px-4 py-2 bg-orange-500 text-white rounded"
        >
          Toggle Theme (Check Console)
        </button>
      </div>
    </div>
  );
}
