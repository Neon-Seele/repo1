const si = require("systeminformation");

si.cpuTemperature()
.then(data => console.log(data))
.catch(error => console.error(error));