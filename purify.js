const purify = require('purify-css')
const content = ['src/*.js', 'src/**/*.js', 'src/**/**/*.js']
const css = ['src/*.css', 'src/**/*.css', 'src/**/**/*.css']

const options = {
  // Will write purified CSS to this file.
  output: '/public/purified.css'
}

purify(content, css, options)
