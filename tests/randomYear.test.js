import {Api} from "../src/api.js";

jest.setTimeout(1000000);

describe('Check arrayOfStrings - ', () => {
    let arrayOfStrings;

    beforeAll(async () => {
        const api = new Api();
        arrayOfStrings = await api.getFactByRandomYear()
    });

    it(`Not empty`, async () => {
        expect(arrayOfStrings.length).not.toBe(0)
    });

    it(`Is empty`, async () => {
        expect(arrayOfStrings.length).toBe(0)
    });

    it(`Have more than 5 elements`, async () => {
        expect(arrayOfStrings.length).toBeGreaterThan(5)
    });

    it(`Length of each elements >= 10 symbols`, async () => {
        let result = true;
        arrayOfStrings.forEach(string => {
            if (string.length < 10) {
                result = false;
            }
        })
        expect(result).toBeTruthy()
    });
});
