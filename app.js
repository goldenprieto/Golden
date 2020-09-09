//configuracion de yargs 
const argv =require('./config/yargs.js').argv;

//configuracion de npm colors
const colors = require('colors');

const {crearArchivo} = require('./multiplicar/multiplicar.js');
const {listarArchivo} = require('./multiplicar/multiplicar.js');
let comando = argv._[0];
switch(comando){
    case 'listar':
        listarArchivo(argv.base,argv.limite)
    break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`Archivo Creado :`+`${archivo}.txt`.red))
            .catch(e => console.log(e));
    break;
    default:
        console.log('Comando no Aceptado');
}

// console.log(process.argv);
//let argv2 =  process.argv;
//console.log(argv);
// let parametro = argv[2];
// let base = parametro.split('=')[1];





