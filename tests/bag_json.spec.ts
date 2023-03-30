import "mocha";
import { expect } from "chai";
import { JsonBagInstance } from "../src/bag_json";

describe('Class CsvBagInstance', () => {
    const bagInstanceJson = new JsonBagInstance();

    it('procesar()', () => {
        bagInstanceJson.run();
    });
});