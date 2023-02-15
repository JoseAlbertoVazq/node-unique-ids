const fs = require('fs');
const {
    generateIds
} = require("../services/generation");
const FILE_NAME = 'generated_ids.txt';

/**
 * This test suite uses the beforeEach hook to clear the generated_ids.txt file before each test, simulating a crash. 
 * The tests then call generateIds twice with different numbers of ids to generate, and checks if the ids generated are unique and stored correctly in the file.
 */
describe('generateIds', () => {
    beforeEach(() => {
        try {
            fs.unlinkSync(`assets/${FILE_NAME}`);
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }
    });

    it('generates unique ids and recovers from crashes', async () => {
        const ids1 = await generateIds(3);
        const data1 = fs.readFileSync(`assets/${FILE_NAME}`, 'utf8');

        try {
            fs.unlinkSync(`assets/${FILE_NAME}`);
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }

        const ids2 = await generateIds(2);
        const data2 = fs.readFileSync(`assets/${FILE_NAME}`, 'utf8');

        expect(ids1).toEqual(data1.split('\n').slice(0, -1));
        expect(ids2).toEqual(data2.split('\n').slice(0, -1));
        expect(new Set([...ids1, ...ids2]).size).toEqual(ids1.length + ids2.length);
    });
});