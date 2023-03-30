import { ProcesarReturn, BagInstance } from "./template";
import { readFile } from "fs";

/**
 * Clase que representa a una instancia de la mochila y trabaja con archivos en formato CSV.
 */
export class CsvBagInstance extends BagInstance {
    /**
     * Constructor de clase.
     */
    constructor(){
        super();
    }

    /**
     * Lee los datos del fichero CSV y los retorna.
     * @returns Datos de los elementos.
     */
    protected procesar(): ProcesarReturn | undefined {
        readFile("./src/data.csv", (err, data) => {
            if(err) {
                console.log("Hubo algún problema al abrir el fichero CSV");
                return undefined;
            } else {
                const totalWidth = [];
                const totalBenefits = [];
                const elements = data.toString().split('\n');
                this.capacity = Number(elements[0]);
                for(let i = 0; i < Number(elements[1]); i++) {
                    const elementData = elements[2 + i].split(',');
                    totalWidth.push(Number(elementData[0]));
                    totalBenefits.push(Number(elementData[1]));
                }
                console.log(this.capacity);
                console.log(totalWidth);
                console.log(totalBenefits);
                return {totalWidth, totalBenefits};
            }
        });
        return undefined;
    }

    /**
     * Hook utilizado antes de procesar.
     */
    protected beforeProcesar(): void {
        console.log("Aun no se ha procesado el fichero CSV");
    }

    /**
     * Hook utilizado despues de procesar.
     */
    protected afterProcesar(): void {
        console.log("Se ha procesado el fichero CSV:");
    }

    /**
     * Obtiene la capacidad de la mochila.
     */
    get bagCapacity(): number {
        return this.capacity;
    }
}