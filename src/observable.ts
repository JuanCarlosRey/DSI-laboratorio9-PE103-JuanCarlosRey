import { Observer } from "./observer";

export interface Observable {
    subscribe(new_suscriber: Observer): void;
    unsubscribe(suscriber: Observer): void;
    notify(): void;
}