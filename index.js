'use strict'

const fs = require('fs')
const cursos = require('./cursos.json')


const opts = {
    idcurso:{
        demand: true,
        alias: 'id'
    },
    nombre:{
        default:'',
        alias: 'n'
    },
    cedula:{
        default:'',
        alias: 'c'
    }
}

const argv = require('yargs')
.command('prematricular', 'Seleccionar el curso a matricular', opts)
.argv

let delay = 0;
for(let curso of cursos){
    delay += 2000
    setTimeout(()=>{
        console.log(curso)
    }, delay)
}


const cursoSeleccionado = cursos.find(curso => curso.id == argv.idcurso)
if(cursoSeleccionado){
    const {idcurso, nombre, cedula } = argv
    const infoEstudiante = {...cursoSeleccionado,idcurso,nombre,cedula}

    fs.writeFileSync('estudiantesEscritos.json', JSON.stringify(infoEstudiante))
}else{
    console.error('no se encontró curso')
}
