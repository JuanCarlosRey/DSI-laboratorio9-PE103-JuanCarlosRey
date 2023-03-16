import { ImperialMass } from "./imperial_mass";
import { MetricMass } from "./metric_mass";

/**
 * Clase que adapta el sistema imperial a sistema métrico.
 */
export class Adapter extends MetricMass {
    /**
     * Constructor de clase.
     * @param conversion Parámetro de tipo ```ImperialMass```
     */
    constructor(private conversion: ImperialMass) {
        super([]);
    }

    /**
     * Obtiene los kilogramos.
     * @returns Valores en kilogramos.
     */
    getKilograms() {
        const result: number[] = []
        this.conversion.getPounds()?.forEach((mass) => {
            result.push(mass / 2.20462)
        });
        return result;
    }

    /**
     * Obtiene las toneladas correspondientes.
     * @returns Valores en toneladas métricas.
     */
     getTons() {
        const result: number[] = []
        this.conversion.getPounds()?.forEach((mass) => {
            result.push(mass / 2204.62)
        });
        return result;
     }
}