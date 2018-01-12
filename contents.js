const Contents = [
  {
    title: 'Overview',
    pages: [
      'Introduction',
      'Getting started',
      'Syntax',
      'Configuration and styles',
    ],
  },
  {
    title: 'Components',
    pages: [
      'Components overview',
      'Built-in components',
      'NPM components',
      'Custom components',
      'Scrolling and Refs',
    ],
  },
  {
    title: 'Publishing',
    pages: [
      'Deploying to the web',
    ],
  },
  {
    title: 'Open Source',
    pages: [
      'GitHub',
      'Gitter',
    ],
  },
]

const hrefFromName = name => name.trim().toLowerCase().replace(/\s+/g, '-')

module.exports = {
  Contents,
  hrefFromName,
}
