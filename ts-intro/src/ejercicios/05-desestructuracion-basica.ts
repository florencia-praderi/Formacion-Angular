/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles,
}

interface Detalles {
    autor: string,
    anio: number,
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015,
    }
}

//Desestructuración del objeto
const {volumen, segundo, cancion, detalles} = reproductor; 
const {autor} = detalles;

console.log('El volumen es de:', volumen)
console.log('El segundo es de:', segundo)
console.log('La cancion es:', cancion)
console.log('El autor es:', autor)
console.log('El año es:', reproductor.detalles.anio)

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

//Destructuración del array

const [p1, p2, p3] = dbz;

console.log('Personaje 1', p1)
console.log('Personaje 2', p2)
console.log('Personaje 3', p3)