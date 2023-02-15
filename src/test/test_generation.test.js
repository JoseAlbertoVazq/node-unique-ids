const {
  generateIds
} = require("../services/generation");
const fs = require('fs');

describe('Generate Ids', () => {
  afterEach(() => {
    fs.writeFileSync(`assets/generated_ids.txt`, '');
  });
  it('generates single id', async () => {
    const [id] = await generateIds(1);
    expect(id.length).toEqual(7);
  });

  it('generates multiple ids', async () => {
    const ids = await generateIds(10);
    expect(ids.length).toEqual(10);
  });

  it('generates unique ids', async () => {
    const ids = await generateIds(10);
    const set = new Set(ids);
    expect(set.size).toEqual(ids.length);
  });

  it('should write generated ids to file', async () => {
    await generateIds(3);
    const data = fs.readFileSync(`assets/generated_ids.txt`, 'utf8');
    const generatedIdsFromData = data.split('\n');
    expect(generatedIdsFromData.length).toBe(4);
  });

  it('should not generate duplicate ids', async () => {
    const ids = await generateIds(3);
    fs.appendFileSync(`assets/generated_ids.txt`, `${ids[0]}\n`);
    const newIds = await generateIds(1);
    expect(newIds[0]).not.toBe(ids[0]);
  });
});