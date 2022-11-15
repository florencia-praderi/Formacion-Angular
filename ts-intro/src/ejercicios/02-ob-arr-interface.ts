/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Counter', 'Bash', 'Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string,
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Counter', 'Bash', 'Healing'],
};

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);