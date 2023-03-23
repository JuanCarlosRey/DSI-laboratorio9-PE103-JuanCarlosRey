import { Observable } from "./observable";
import { Observer } from "./observer";

/**
 * Clase que representa a una revista. Implementa la interfaz ```Observable```, por lo que otras clases
 * podrán observar a esta y ser notificadas.
 */
export class Magazine implements Observable {
    private suscribers: Observer[] = [];

    /**
     * Constructor de la clase.
     * @param name Nombre de la revista.
     * @param date_of_release Fecha de la publicación más reciente.
     * @param edition Edición acutal.
     * @param company Compañia que esta a cargo de la revista.
     */
    constructor(private name: string, private date_of_release: string, private edition: number, private company: string) {}

    /**
     * Obtiene el nombre de la revista.
     * @returns Nombre de la revista.
     */
    getName() {
        return this.name;
    }

    /**
     * Obtiene la fecha de salida de la revista.
     * @returns Fecha de salida de la revista.
     */
    getLatestDate() {
        return this.date_of_release;
    }

    /**
     * Obtiene la edición de la revista.
     * @returns Edición de la revista.
     */
    getEdition() {
        return this.edition;
    }

    /**
     * Obtiene la compañia de la revista.
     * @returns Compañia de la revista.
     */
    getCompany() {
        return this.company;
    }

    /**
     * Método que permite suscribir a una instancia.
     * @param new_suscriber Nuevo suscriptor.
     */
    subscribe(new_suscriber: Observer): void {
        if(this.suscribers.includes(new_suscriber)) {
            throw new Error('The suscriber had already been subscribed');
        } else {
            this.suscribers.push(new_suscriber);
        }
    }

    /**
     * Método que permite desuscribir a un suscriptor.
     * @param suscriber Suscriptor a eliminar.
     */
    unsubscribe(suscriber: Observer): void {
        const index = this.suscribers.indexOf(suscriber);
        if (index === -1) {
            throw new Error('The suscriber has not been subscribed');
        } else {
            this.suscribers.splice(index, 1);
        }
    }

    /**
     * Método que permite notificar a los suscriptores sobre un cambio.
     */
    notify(): void {
        this.suscribers.forEach((suscriber) => suscriber.update(this));
    }

    /**
     * Método que actualiza la edición de la revista a la más reciente.
     * @param new_date_of_release Nueva fecha de salida.
     * La edición simplemente se tiene que incrementar en 1.
     */
    uptadeMagazine(new_date_of_release: string): void {
        this.date_of_release = new_date_of_release;
        this.edition++;
        this.notify();
    }
}