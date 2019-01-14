#!/usr/bin/env node

/// <reference path="supports-hyperlinks.d.ts" />

import fs = require('fs')
import path = require('path')

import { stdout } from 'supports-hyperlinks'

process.stdout.write(fs.readFileSync(path.join(__dirname, stdout ? 'links.out' : 'clean.out'), 'utf8'))

export = 0
