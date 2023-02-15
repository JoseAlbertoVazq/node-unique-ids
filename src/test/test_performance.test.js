const fs = require('fs');
const {
    generateIds
  } = require("../services/generation");
describe('performance', () => {
  afterEach(() => {
    fs.writeFileSync(`assets/generated_ids.txt`, '');
  });

  it('should generate 1000 unique ids in less than 500ms', async () => {
    const startTime = Date.now();
    await generateIds(1000);
    const endTime = Date.now();
    expect(endTime - startTime).toBeLessThan(500);
  });

  it('should generate 10000 unique ids in less than 5000ms', async () => {
    const startTime = Date.now();
    await generateIds(10000);
    const endTime = Date.now();
    expect(endTime - startTime).toBeLessThan(5000);
  });
});
