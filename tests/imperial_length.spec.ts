import 'mocha'
import { expect } from 'chai'
import { ImperialLength } from '../src/imperial_length'

describe('ImperialLength class', () => {
    it('getInches()', () => {
        expect(new ImperialLength([1], 'Feet').getInches()).to.eql([12])
        expect(new ImperialLength([1], 'Yards').getInches()).to.eql([36])
        expect(new ImperialLength([1], 'Miles').getInches()).to.eql([63360])
    });
    it('getFeet()', () => {
        expect(new ImperialLength([12], 'Inches').getFeet()).to.eql([1])
        expect(new ImperialLength([1], 'Yards').getFeet()).to.eql([3])
        expect(new ImperialLength([1], 'Miles').getFeet()).to.eql([5280])
    });
    it('getYards()', () => {
        expect(new ImperialLength([36], 'Inches').getYards()).to.eql([1])
        expect(new ImperialLength([3], 'Feet').getYards()).to.eql([1])
        expect(new ImperialLength([1], 'Miles').getYards()).to.eql([1760])
    });
    it('getMiles()', () => {
        expect(new ImperialLength([63360], 'Inches').getMiles()).to.eql([1])
        expect(new ImperialLength([5280], 'Feet').getMiles()).to.eql([1])
        expect(new ImperialLength([1760], 'Yards').getMiles()).to.eql([1])
    });
});