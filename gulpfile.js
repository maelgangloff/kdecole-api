const fs  = require('fs')
const jsdoc  = require('jsdoc-to-markdown')
const del = require('del')
const gulp = require('gulp')
const exec = require('child_process').exec

function cleanDist () {
  return del('./dist')
}

function cleanTypes() {
  return del('./types')
}

function lint(cb) {
  exec('npx eslint . --ext .ts', (err, stdout, stderr)=>{
    console.log(stdout);
    console.log(stderr);
    cb(err);
  })
}

function build (cb) {
  exec('npx tsc', (err, stdout, stderr)=>{
    console.log(stderr);
    cb(err);
  })
}

function test(cb){
  exec('npx jest', (err, stdout, stderr)=>{
    console.log(stderr)
    cb(err)
  })
}

async function jsdocToMarkdown () {
  return fs.writeFileSync('README.md', await jsdoc.renderSync({ files: 'dist/**/*.js' }))
}

module.exports = {
  cleanDist,
  cleanTypes,
  lint,
  build,
  test,
  jsdocToMarkdown,
  default: gulp.series(cleanDist, cleanTypes, lint, build, test, jsdocToMarkdown)
}
