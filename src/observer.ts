import { Observable } from "./observable";

/**
 * Interfaz que define los métodos de clases que deban observar clases observables.
 */
export interface Observer {
    /**
     * Método que permite recibir una actualización de un objeto al que esten observando.
     * @param magazine Objeto actualizado.
     */
    update(magazine: Observable): void;
}