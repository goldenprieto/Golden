//requireds
const fs  = require('fs');

//configuracion de npm colors
const colors = require('colors');

listarArchivo=(base,limite)=>{
    console.log('======================'.green);
    console.log(`==== Tabla del ${base} =====`.green);
    console.log('======================'.green);
    for (let i = 1;i <=limite;i++){
            console.log(`${i} * ${base} = ${i*base}`);
    }
}


crearArchivo= (base,limite)=>{
    return new Promise((resolve, rejects)=>{
        if(!Number(base)){
            rejects('La base No es Numero ');
            return;
        }
        let data = ''; 
        for (let i = 1;i <=limite;i++){
               data += `${i} * ${base} = ${i*base}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`,data, (err) => {
            if (err) rejects (err)
            else 
                resolve(`tabla-${base}`)
          
        });
    });
}
module.exports = {
    crearArchivo,
    listarArchivo
}
