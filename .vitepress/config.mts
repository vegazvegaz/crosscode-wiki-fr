import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CrossCode Wiki FR",
  description: "L'archive complète du CrossWorlds",
  lang: 'fr-FR',
  themeConfig: {
    // 🔍 Activation de la barre de recherche locale
    search: {
      provider: 'local'
    },
    // 🌙 Configuration du menu
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Débuter', link: '/combat' }
    ],
    sidebar: [
      {
        text: 'Guide du Chercheur',
        items: [
          { text: 'Système de Combat', link: '/combat' },
          { text: 'Les Éléments', link: '/elements' },
          { text: 'Équipements', link: '/equipement' }
        ]
      },
      {
        text: 'Missions',
        items: [
          { text: 'Quêtes de Bergen', link: '/quetes' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ton-pseudo/crosscode-wiki-fr' }
    ]
  }
})