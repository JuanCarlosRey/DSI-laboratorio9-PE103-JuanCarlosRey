import { Observable } from "./observable";
import { Observer } from "./observer";
import { Magazine } from "./revista";

/**
 * Clase que representa a un suscriptor de una revista.
 */
export class Subscriber implements Observer {
    /**
     * Constructor de la clase.
     * @param id Identificación del suscriptor.
     * @param name Nombre del suscriptor.
     */
    constructor(private id: number, private name: string) {}

    /**
     * Obtiene la identificación del suscriptor.
     * @returns Identificación del suscriptor.
     */
    getId() {
        return this.id;
    }

    /**
     * Obtiene el nombre del suscriptor.
     * @returns Nombre del suscriptor.
     */
    getName() {
        return this.name;
    }

    /**
     * Método que recibe una notificación indicando que ha salido un nuevo número de la revista
     * a la que está suscrita.
     * @param magazine Revista actualizada.
     */
    update(magazine: Observable): void {
        if(magazine instanceof Magazine) {
            console.log(`I am a Subscriber called ${this.name}. ` +
                        `My id is ${this.id} ` + 
                        `and I received the new edition of the magazine ${magazine.getName()}. ` +
                        `The date of release is ${magazine.getLatestDate()}. ` + 
                        `The edition of the magazine is ${magazine.getEdition()}. ` +
                        `The company of the magazine is ${magazine.getCompany()}.`);
        }
    }
}