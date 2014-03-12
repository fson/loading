#!/usr/bin/env node

var path = require('path');
var read = require('fs').readFileSync;
var rework = require('rework');
var reworkNPM = require('rework-npm');
var autoprefixer = require('autoprefixer');

var input = path.resolve(process.argv[2]);
var output = rework(read(input, 'utf8'))
  .use(reworkNPM({dir: path.dirname(input)}))
  .use(autoprefixer().rework)
  .toString();

process.stdout.write(output);
