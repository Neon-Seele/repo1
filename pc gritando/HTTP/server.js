const http = require("http")
const path = require("path")

const loginfo = path.join(__dirname, "logger.js")
const statsInfo = path.join(__dirname, "stats.js")

const {stats} = statsInfo


http.createServer((req, res) => {
    res.write(`${JSON.stringify(stats)}`)

    
    
}).listen(5000, () => console.table(stats))


