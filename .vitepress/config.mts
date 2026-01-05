import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CrossCode Wiki FR",
  description: "Wiki CrossCode Français",
  base: '/crosscode-wiki-fr/',
  lang: 'fr-FR',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Accueil', link: '/' }
    ],
    sidebar: [
      {
        text: 'Sommaire',
        items: [
          { text: 'Combat', link: '/combat' },
          { text: 'Éléments', link: '/elements' },
          { text: 'Quêtes', link: '/quetes' }
        ]
      }
    ]
  }
})