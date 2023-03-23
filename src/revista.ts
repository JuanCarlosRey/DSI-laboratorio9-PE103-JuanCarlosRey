import { Observable } from "./observable";
import { Observer } from "./observer";

export class Magazine implements Observable {
    private suscribers: Observer[] = [];

    constructor(private name: string, private date_of_release: string, private edition: number, private company: string) {}

    getName() {
        return this.name;
    }

    getLatestDate() {
        return this.date_of_release;
    }

    getEdition() {
        return this.edition;
    }

    getCompany() {
        return this.company;
    }

    subscribe(new_suscriber: Observer): void {
        if(this.suscribers.includes(new_suscriber)) {
            throw new Error('The suscriber had already been subscribed');
        } else {
            this.suscribers.push(new_suscriber);
        }
    }

    unsubscribe(suscriber: Observer): void {
        const index = this.suscribers.indexOf(suscriber);
        if (index === -1) {
            throw new Error('The suscriber has not been subscribed');
        } else {
            this.suscribers.splice(index, 1);
        }
    }

    notify(): void {
        this.suscribers.forEach((suscriber) => suscriber.update(this));
    }
}