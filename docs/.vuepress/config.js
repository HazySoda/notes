module.exports = {
  title: 'Note Book',
  description: 'WildNode\'s note book',
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/KidneyFlower/notes' }
    ],
    sidebar: [
      {
        title: 'HTML & CSS',
        children: [
          '/html-and-css/'
        ]
      },
      {
        title: 'JavaScript',
        children: [
          '/javascript/'
        ]
      }
    ],
    displayAllHeaders: true
  }
}
