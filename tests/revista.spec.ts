import 'mocha'
import { expect } from 'chai'
import { Magazine } from '../src/revista'

describe('Class Magazine', () => {
    it('getName() returns name of the Magazine', () => {
        expect(new Magazine('Cuatro', '12/03/2023', 182, 'Mediaset').getName()).to.equal('Cuatro');
    });
    it('getLatestDate() returns the date of latest release of the Magazine', () => {
        expect(new Magazine('Cuatro', '12/03/2023', 182, 'Mediaset').getLatestDate()).to.equal('12/03/2023');
    });
    it('getEdition() returns the latest edition of the Magazine', () => {
        expect(new Magazine('Cuatro', '12/03/2023', 182, 'Mediaset').getEdition()).to.equal(182);
    });
    it('getCompany() returns name of the companys Magazine', () => {
        expect(new Magazine('Cuatro', '12/03/2023', 182, 'Mediaset').getCompany()).to.equal('Mediaset');
    });
})