var mysql = require('mysql');

var connMySQL = function() {
    return mysql.createConnection({
        host : 'estudos_gui.mysql.dbaas.com.br',
        user: 'estudos_gui',
        password: 'GuiEstudos',
        database: 'estudos_gui'
    });
}

module.exports = function() {
    return connMySQL;
}