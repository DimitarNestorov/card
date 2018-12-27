const boxen = require('boxen')
const { bold, blueBright: b } = require('chalk').default

const cardContent = `${bold(`Griko Muhammad Sultan Nibras`)} · Surabaya, ID

    ${bold(`Work`)}: Freelance Software Developer
 ${bold(`Twitter`)}: ${b(`https://twitter.com/griko_nibras`)}
  ${bold(`GitHub`)}: ${b(`https://github.com/grikomsn`)}
${bold(`LinkedIn`)}: ${b(`https://linkedin.com/in/griko`)}
 ${bold(`Website`)}: ${b(`https://griko.id`)}

    ${bold(`Card`)}: npx grikomsn`

console.log(
  boxen(cardContent, {
    borderColor: 'blue',
    margin: 1,
    padding: 1,
  })
)
