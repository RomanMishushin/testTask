import * as axios from 'axios';

export class Api {
    regExp = /(feb|jan|mar|apr|may|june|july|aug|sept|oct|nov|dec).*\s+(\d{1,2})(st|nd|rd|th)?/i

    async getFactByRandomYear() {
        const arrayOfStrings = [];
        for (let count = 0; count < 100; count++) {
            const data = (await axios.get('http://numbersapi.com/random/year')).data;
            if (data.match(this.regExp)) {
                arrayOfStrings.push(data);
            }
        }
        console.info('"arrayOfStrings" length = ', arrayOfStrings.length, 'elements')
        return arrayOfStrings;
    }

    async getFactByYear(year) {
        const arrayOfStrings = [];
        for (let count = 0; count < 100; count++) {
            const data = (await axios.get(`http://numbersapi.com/${year}/year`)).data;
            if (data.match(this.regExp)) {
                arrayOfStrings.push(data);
            }
        }
        console.info('"arrayOfStrings" length = ',  arrayOfStrings.length)
        return arrayOfStrings;
    }
}