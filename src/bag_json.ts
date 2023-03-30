import { ProcesarReturn, BagInstance } from "./template";
import { readFile } from "fs";

/**
 * Clase que representa a una instancia de la mochila y trabaja con archivos en formato JSON.
 */
export class JsonBagInstance extends BagInstance {
    /**
     * Constructor de clase.
     */
    constructor(){
        super();
    }

    /**
     * Lee los datos del fichero JSON y los retorna.
     * @returns Datos de los elementos.
     */
    protected procesar(): ProcesarReturn | undefined {
        readFile("./src/data.json", (err, data) => {
            if(err) {
                console.log("Hubo algún problema al abrir el fichero JSON");
                return undefined;
            } else {
                const totalWidth = [];
                const totalBenefits = [];
                const jsonData = JSON.parse(data.toString());
                this.capacity = jsonData.capacidad;
                for(let i = 0; i < jsonData.numElementos; i++) {
                    totalWidth.push(jsonData.elementos[i].capacidad);
                    totalBenefits.push(jsonData.elementos[i].valor);
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
        console.log("Aun no se ha procesado el fichero JSON");
    }

    /**
     * Hook utilizado despues de procesar.
     */
    protected afterProcesar(): void {
        console.log("Se ha procesado el fichero JSON:");
    }
}