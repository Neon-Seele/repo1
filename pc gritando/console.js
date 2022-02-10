const log = require('./logger')
const os = require("os")
const minfo = require('./stats')

setInterval(() => {

console.clear()
console.log("===O pc tá gritando?===")
console.table(minfo.stats)

log("rodando")


}, 1000)
