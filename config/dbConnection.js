var mysql = require('mysql');

module.exports = function() {
    return mysql.createConnection({
        host : 'estudos_gui.mysql.dbaas.com.br',
        user: 'estudos_gui',
        password: 'GuiEstudos',
        database: 'estudos_gui'
    });
}