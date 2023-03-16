/**
 * Clase que convierte las onzas en masa en el sistema imperial.
 */
export class ImperialMass {
    /**
     * Constructor de la clase.
     * @param masses Masas en onzas.
     */
    constructor(private masses: number[]) {}

    /**
     * Convierte las onzas en libras.
     * @returns Los valores converidos en libras.
     */
    getPounds(): number[] | undefined {
        const result: number[] = []
        this.masses.forEach((mass) => {
            result.push(mass / 16)
        });
        return result;
    }

    /**
     * Convierte las onzas en piedras.
     * @returns Los valores converidos en piedras.
     */
    getStones(): number[] | undefined {
        const result: number[] = []
        this.masses.forEach((mass) => {
            result.push(mass / 224)
        });
        return result;
    }

    /**
     * Convierte las onzas en centenas.
     * @returns Los valores converidos en centenas.
     */
    getHundreds(): number[] | undefined {
        const result: number[] = []
        this.masses.forEach((mass) => {
            result.push(mass / 25088)
        });
        return result;
    }

    /**
     * Convierte las onzas en toneladas.
     * @returns Los valores converidos en toneladas.
     */
    getTons(): number[] | undefined {
        const result: number[] = []
        this.masses.forEach((mass) => {
            result.push(mass / 501760)
        });
        return result;
    }
}