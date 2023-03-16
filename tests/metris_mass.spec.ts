import 'mocha'
import { expect } from 'chai'
import { MetricMass } from '../src/metric_mass'

describe('MetricMass class', () => {
    it('getKilograms()', () => {
        expect(new MetricMass([1000]).getKilograms()).to.eql([1]);
    });
    it('getTons()', () => {
        expect(new MetricMass([1000000]).getTons()).to.eql([1]);
    });
});