const express = require('express');
const fs = require("fs")
const app = express();
app.get('/', (req, res) => {
    
    res.send("ok")
});
app.get('/saveproduct', (req, res) => {
    
    fs.writeFile('soubor.json', req, (err) => {
        if (err) throw err;
        console.log('Data byla uložena do souboru.');
      });
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
