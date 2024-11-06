import fs from 'fs'


const JavaScriptFile = fs.readFileSync('./dist/main.js', 'utf8')
fs.writeFileSync('./build/assets/main.js', JavaScriptFile)

const cssFile = fs.readFileSync('./dist/main.css', 'utf8')
fs.writeFileSync('./build/assets/main.css', cssFile)
