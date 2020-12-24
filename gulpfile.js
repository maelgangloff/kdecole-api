const fs  = require('fs')
const jsdoc  = require('jsdoc-to-markdown')
const del = require('del')
const gulp = require('gulp')
const exec = require('child_process').exec

function clean () {
  return del('./dist')
}

function lint(cb) {
  exec('npx eslint . --ext .ts', (err, stdout, stderr)=>{
    console.log(stdout);
    console.log(stderr);
    cb(err);
  })
}

function build (cb) {
  exec('tsc', (err, stdout, stderr)=>{
    console.log(stdout);
    console.log(stderr);
    cb(err);
  })
}

async function jsdocToMarkdown () {
  return fs.writeFileSync('README.md', await jsdoc.renderSync({ files: 'dist/**/*.js' }))
}

module.exports = {
  clean,
  lint,
  build,
  jsdocToMarkdown,
  default: gulp.series(clean, lint, build, jsdocToMarkdown)
}
