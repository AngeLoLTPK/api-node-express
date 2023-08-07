const express = require('express');

const app = express();
app.listen(3000, () => {
    console.log("Server Working in door 3000. http://localHost:3000")
})

app.get('/', (req, res) => {
    res.json({message: 'welcome to our world API'});
});