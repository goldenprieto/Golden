const { constants } = require('buffer');

const opts ={
    base:{
        demand:true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar','imprime en consola la tabla de multiplicar',opts)
    .command('crear','Crea un archivo ',opts)
    .help()
    .argv;

module.exports = {
    argv
}