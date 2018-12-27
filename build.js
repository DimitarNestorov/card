#!/usr/bin/env node

'use strict'

const boxen = require('boxen')
const { bold, blueBright: b } = require('chalk').default
const fs = require('fs')
const path = require('path')

///////////////////////////////////////////////////////////////////////////////

const title = `${bold(`Griko Muhammad Sultan Nibras`)} · Griko Nibras`
const subtitle = `       Surabaya, ID · ${b(`hello@griko.id`)}`
const header = `${title}\n${subtitle}`

///////////////////////////////////////////////////////////////////////////////

const list = {
  [bold(`    Work`)]: `Freelance Software Developer`,
  [bold(` Twitter`)]: b(`https://twitter.com/griko_nibras`),
  [bold(`  GitHub`)]: b(`https://github.com/grikomsn`),
  [bold(`LinkedIn`)]: b(`https://linkedin.com/in/griko`),
  [bold(` Website`)]: b(`https://griko.id`),
}

const renderedList = Object.keys(list)
  .map(l => `${l}: ${list[l]}`)
  .join('\n')

///////////////////////////////////////////////////////////////////////////////

const footer = `${bold(`    Card`)}: npx grikomsn`

///////////////////////////////////////////////////////////////////////////////

const cardContent = `${header}\n\n${renderedList}\n\n${footer}`

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  boxen(cardContent, {
    borderColor: 'blue',
    margin: 1,
    padding: {
      top: 1,
      bottom: 1,
      left: 6,
      right: 6,
    },
  })
)

// huge thanks to https://github.com/bnb/bitandbang
