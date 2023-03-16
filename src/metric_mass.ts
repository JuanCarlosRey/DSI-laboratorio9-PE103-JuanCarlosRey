/**
 * Clase que trabaja con medidas méticas de masa
 */
export class MetricMass {
    /**
     * Constructor de clase.
     * @param masses Lista de masas en gramos.
     */
    constructor(protected masses: number[]) {}

    /**
     * Convierte gramos en kilogramos.
     * @returns Valores en kilogramos.
     */
    getKilograms() {
        const result: number[] = []
        this.masses.forEach((mass) => {
            result.push(mass / 1000)
        });
        return result;
    }
    /**
     * Convierte gramos en toneladas.
     * @returns Valores en toneladas.
     */
    getTons() {
        const result: number[] = []
        this.masses.forEach((mass) => {
            result.push(mass / 1000000)
        });
        return result;
    }
}