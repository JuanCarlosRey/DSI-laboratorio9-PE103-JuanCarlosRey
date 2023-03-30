/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * Tipo que define los atributos de un elemento de la mochila.
 */
export type BagElement = {
    width: number;
    height: number;
}

/**
 * Tipo que define los atributos que retorna el método ```procesar()```.
 */
export type ProcesarReturn = { 
    width: number[]; 
    value: number[]; 
}

/**
 * Clase abstracta que representa a una plantilla para un algoritmo.
 */
export abstract class BagInstance {
    protected capacity: number;
    protected bagElements: BagElement[];

    /**
     * Constructor de clase.
     */
    constructor(){
        this.bagElements = [];
        this.capacity = 0;
    }

    /**
     * Método que inicializa el algoritmo.
     */
    public run() {
        this.beforeProcesar();
        this.procesar();
        this.afterProcesar();
    }

    /**
     * Método para procesar un fichero JSON o CSV.
     */
    protected abstract procesar(): ProcesarReturn | undefined;

    /**
     * Método hook.
     */
    protected beforeProcesar(): void {}

    /**
     * Método hook.
     */
    protected afterProcesar(): void {}
}