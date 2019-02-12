var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/tecnologia', function(req, res) {
    res.render("sessao/tecnologia")
});

app.get('/', function(req, res) {
    res.send('<html><body>Portal de notícias</body></html>')
});

app.listen(3000, function() {
    console.log("Servidor rodando com Express");
});