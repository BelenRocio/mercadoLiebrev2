const fs = require('fs');

module.exports = JSON.parse(fs.readFileSync(__dirname + '/productsDB.json','utf-8'));