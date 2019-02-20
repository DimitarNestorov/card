import fs = require('fs')
import path = require('path')

const linksResult = fs.readFileSync(path.join(__dirname, '..', 'links.out'), 'utf8')
const cleanResult = fs.readFileSync(path.join(__dirname, '..', 'clean.out'), 'utf8')

const linksTest = fs.readFileSync(path.join(__dirname, 'links.test.out'), 'utf8')
const cleanTest = fs.readFileSync(path.join(__dirname, 'clean.test.out'), 'utf8')

if (linksResult !== linksTest) {
	throw new Error('Result with links doesn\'t match')
}

if (cleanResult !== cleanTest) {
	throw new Error('Result without links doesn\'t match')
}
