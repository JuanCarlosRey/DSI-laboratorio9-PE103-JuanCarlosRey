import 'mocha'
import { expect } from 'chai'
import { Adapter } from '../src/adapter'
import { ImperialMass } from '../src/imperial_mass'

describe('Adapter class', () => {
    const imperial_mass = new ImperialMass([80000]);
    const adapter = new Adapter(imperial_mass);

    it('getImpKilograms()', () => {
        expect(adapter.getKilograms()).to.eql([2267.9645471781987])
    });
    it('getImpTons()', () => {
        expect(adapter.getTons()).to.eql([2.267964547178199])
    });

});