import 'mocha'
import { expect } from 'chai'
import { ImperialMass } from '../src/imperial_mass'

describe('ImperialMass class', () => {
    it('getPounds()', () => {
        expect(new ImperialMass([16]).getPounds()).to.eql([1]);
    });
    it('getStones()', () => {
        expect(new ImperialMass([224]).getStones()).to.eql([1]);
    });
    it('getHundreds()', () => {
        expect(new ImperialMass([25088]).getHundreds()).to.eql([1])
    });
    it('getTons()', () => {
        expect(new ImperialMass([501760]).getTons()).to.eql([1])
    });
});