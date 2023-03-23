import 'mocha'
import { Magazine } from '../src/revista'
import { Subscriber } from '../src/suscriptor'

describe('Client code', () => {
    const revista = new Magazine('Cuatro', '12/03/2023', 182, 'Mediaset');
    const suscriptor_1 = new Subscriber(5748291, 'Antonio');
    const suscriptor_2 = new Subscriber(172834, 'Larua');

    it('Suscribing to the magazine', () => {
        revista.subscribe(suscriptor_1);
        revista.subscribe(suscriptor_2);
    });

    it('Getting the update and print in console', () => {
        revista.uptadeMagazine('16/06/2023');
    });

    it('Unsubscribing suscriptor 1', () => {
        revista.unsubscribe(suscriptor_1);
    });

    it('Getting the update without suscriptor 1', () => {
        revista.uptadeMagazine('18/06/2023');
    });
});