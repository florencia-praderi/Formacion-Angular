/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T){
    return argumento
}

let soyString = queTipoSoy('Hola Mundo')
let soyNumber = queTipoSoy(100)
let soyArray = queTipoSoy([1, 2, 3, 4])
let soyBoolean = queTipoSoy(true)

let soyExplicit = queTipoSoy<number>(100)