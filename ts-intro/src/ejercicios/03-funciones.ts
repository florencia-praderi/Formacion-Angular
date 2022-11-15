/*
    ===== Código de TypeScript =====
*/

import { createRegularExpressionLiteral } from "typescript";

function sumar(a: number, b: number): number{
    return a + b;
}

const sumarFlecha = (a: number, b: number): number =>{
    return a + b;
}

function multiplicar(num1: number, num2?: number, base:number = 2): number{
    return num1 * base;
}

const resultado = multiplicar(4, 4)
console.log(resultado)

interface PersonajeLOR {
    nombre: string,
    pv: number,
    mostrarHp: () => void;
}

function curar (personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
    console.log(personaje)
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida', this.pv)
    },
}

curar(nuevoPersonaje, 20)
nuevoPersonaje.mostrarHp()