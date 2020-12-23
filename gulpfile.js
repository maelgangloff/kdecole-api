const fs  = require('fs')
const jsdoc  = require('jsdoc-to-markdown')
const del = require('del')
const gulp = require('gulp')
const exec = require('child_process').exec

function clean () {
  return del('./dist')
}

function build (cb) {
  exec('tsc', (err, stdout, stderr)=>{
    console.log(stdout);
    console.log(stderr);
    cb(err);
  })
}

async function jsdocToMarkdown () {
  return fs.writeFileSync('definitions.md', await jsdoc.renderSync({ files: 'dist/Kdecole.js' }))
}

module.exports = {
  clean,
  build,
  jsdocToMarkdown,
  default: gulp.series(clean, build, jsdocToMarkdown)
}
