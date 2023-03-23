import { Observer } from "./observer";

/**
 * Interfaz que define los métodos de clases que deban ser observadas.
 */
export interface Observable {
    /**
     * Método que permite suscribir a una instancia.
     * @param new_suscriber Nuevo suscriptor.
     */
    subscribe(new_suscriber: Observer): void;

    /**
     * Método que permite desuscribir a un suscriptor.
     * @param suscriber Suscriptor a eliminar.
     */
    unsubscribe(suscriber: Observer): void;

    /**
     * Método que permite notificar a los suscriptores sobre un cambio.
     */
    notify(): void;
}