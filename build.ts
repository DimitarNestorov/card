#!/usr/bin/env node

import * as fs from 'fs'
import * as path from 'path'

import { link, eraseLine, cursorPrevLine } from 'ansi-escapes'
import boxen = require('boxen')
import chalk from 'chalk'

const { bold, red: r } = chalk

const name = 'Dimitar Nestorov'
const email = 'gmail@dimitarnestorov.com'

const twitterURI = 'https://twitter.com/dimitarnestorov'
const githubURI = 'https://github.com/dimitarnestorov'
const websiteURI = 'https://dimitarnestorov.com'

const content = `${bold(` ${name}`)}
${r(email)}

Software Engineer at Codemotion

Twitter: ${r(twitterURI)}
 GitHub: ${r(githubURI)}${' '}
Website: ${r(websiteURI)}       `

const box = boxen(content, {
	borderColor: 'red',
	align: 'center',
	margin: 1,
	padding: {
		top: 1,
		bottom: 1,
		left: 6,
		right: 6,
	},
})
const output = `${cursorPrevLine}${eraseLine}${box.replace(` ${name}`, `${name} `)}\n`

fs.writeFileSync(path.join(__dirname, 'clean.out'), output)

const outputWithLinks = output.replace(email, link(email, `mailto:${email}`))
	.replace(twitterURI, link(twitterURI, twitterURI))
	.replace(githubURI, link(githubURI, githubURI))
	.replace(websiteURI, link(websiteURI, websiteURI))
	.replace('Codemotion', link('Codemotion', 'https://codemotionapps.com'))

fs.writeFileSync(path.join(__dirname, 'links.out'), outputWithLinks)
