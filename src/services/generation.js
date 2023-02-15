const fs = require('fs');

const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ID_LENGTH = 7;
const FILE_NAME = 'generated_ids.txt';

const generateId = () => {
  let id = '';
  for (let i = 0; i < ID_LENGTH; i++) {
    id += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  return id;
}

const getUniqueId = async () => {
  let id = generateId();
  while (await isIdAlreadyCreated(id)) {
    id = generateId();
  }
  fs.appendFileSync(`assets/${FILE_NAME}`, `${id}\n`);
  return id;
}

const isIdAlreadyCreated = async (id) => {
  try {
    const data = fs.readFileSync(`assets/${FILE_NAME}`, 'utf8');
    return data.split('\n').includes(id);
  } catch (err) {
    if (err.code === 'ENOENT') {
      fs.writeFileSync(`assets/${FILE_NAME}`, '');
      return false;
    }
    throw err;
  }
}

const generateIds = async(count) => {
  const ids = [];
  for (let i = 0; i < count; i++) {
    ids.push(await getUniqueId());
  }
  return ids;
}

module.exports = {
  generateIds
};
