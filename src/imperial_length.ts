/**
 * Clase que convierte magnitudes de longitud en sistema imperial.
 */
export class ImperialLength {
    /**
     * Constructor de clase.
     * @param lengths Diferentes valores en una misma magnitud.
     * @param magnitude Magnitud de los valores.
     */
    constructor(protected lengths: number[], protected magnitude: string) {}

    /**
     * Convierte los valores de ```lengths``` a pulgadas.
     * @returns Los valores convertidos a pulgadas.
     */
    getInches(): number[] | undefined {
        const result: number[] = []
        switch (this.magnitude) {
            case 'Feet':
                this.lengths.forEach((length) => {
                    result.push(length * 12);
                });
                break;
            case 'Yards':
                this.lengths.forEach((length) => {
                    result.push(length * 36);
                }); 
                break;
            case 'Miles':
                this.lengths.forEach((length) => {
                    result.push(length * 63360);
                });    
                break;
            default:
                return undefined;
        }
        return result;
    }

    /**
     * Convierte los valores de ```lengths``` a pies.
     * @returns Los valores convertidos a pies.
     */
    getFeet(): number[] | undefined {
        const result: number[] = []
        switch (this.magnitude) {
            case 'Inches':
                this.lengths.forEach((length) => {
                    result.push(length / 12);
                });
                break;
            case 'Yards':
                this.lengths.forEach((length) => {
                    result.push(length * 3);
                });
                break;
            case 'Miles':
                this.lengths.forEach((length) => {
                    result.push(length * 5280);
                });
                break;
            default:
                return undefined;
        }
        return result;
    }

    /**
     * Convierte los valores de ```lengths``` a yardas.
     * @returns Los valores convertidos a yardas.
     */
    getYards(): number[] | undefined {
        const result: number[] = []
        switch (this.magnitude) {
            case 'Inches':
                this.lengths.forEach((length) => {
                    result.push(length / 36);
                });
                break;
            case 'Feet':
                this.lengths.forEach((length) => {
                    result.push(length / 3);
                });
                break;
            case 'Miles':
                this.lengths.forEach((length) => {
                    result.push(length * 1760);
                });
                break;
            default:
                return undefined;
        }
        return result;
    }

    /**
     * Convierte los valores de ```lengths``` a millas.
     * @returns Los valores convertidos a millas.
     */
    getMiles(): number[] | undefined {
        const result: number[] = []
        switch (this.magnitude) {
            case 'Inches':
                this.lengths.forEach((length) => {
                    result.push(length / 63360);
                });
                break;
            case 'Feet':
                this.lengths.forEach((length) => {
                    result.push(length / 5280);
                });
                break;
            case 'Yards':
                this.lengths.forEach((length) => {
                    result.push(length / 1760);
                });
                break;
            default:
                return undefined;
        }
        return result;
    }
}