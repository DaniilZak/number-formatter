const {expect} = require('chai');
const numFormatter = require('../index');

describe('Number formatter', () => {
    it ('should convert single digit', () => {
        const result = numFormatter(1);
        expect(result).to.equal('1');
    });

    it ('should convert double digit', () => {
        const result = numFormatter(12);
        expect(result).to.equal('12');
    });

    it ('should convert three digits', () => {
        const result = numFormatter(123);
        expect(result).to.equal('123');
    });

    it ('should convert four digits', () => {
        const result = numFormatter(1234);
        expect(result).to.equal('1,234');
    });

    it ('should convert five digits', () => {
        const result = numFormatter(12345);
        expect(result).to.equal('12,345');
    });

    it ('should convert six digits', () => {
        const result = numFormatter(123456);
        expect(result).to.equal('123,456');
    });

    it ('should convert seven digits', () => {
        const result = numFormatter(1234567);
        expect(result).to.equal('1,234,567');
    });

    it ('should convert eight digits', () => {
        const result = numFormatter(12345678);
        expect(result).to.equal('12,345,678');
    });
});