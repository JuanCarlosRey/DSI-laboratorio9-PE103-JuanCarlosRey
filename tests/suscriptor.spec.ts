import 'mocha'
import { expect } from 'chai'
import { Subscriber } from '../src/suscriptor'

describe('Class Suscriber', () => {
    it('getId() returns id of the suscriber', () => {
        expect(new Subscriber(5748291, 'Antonio').getId()).to.equal(5748291);
    });
    it('getName() returns suscribers name', () => {
        expect(new Subscriber(5748291, 'Antonio').getName()).to.equal('Antonio');
    });
})