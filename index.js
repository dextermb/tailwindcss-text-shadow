const plugin = require('tailwindcss/plugin')

const TextShadow = plugin(({ addUtilities, variants }) => (
  addUtilities(
    {
      '.text-shadow': {
        'text-shadow': '0 1px 0 rgba(0, 0, 0, .25)'
      },
      '.-text-shadow': {
        'text-shadow': '0 -1px 0 rgba(0, 0, 0, .25)'
      },
      '.text-shadow-none': {
        'text-shadow': 'none'
      }
    },
    variants('textShadow')
  )
))

module.exports = TextShadow
