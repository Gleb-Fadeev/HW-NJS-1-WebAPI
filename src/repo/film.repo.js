const path = require('path');
const { readJsonFile, writeJsonFile } = require('../utils/file.utils');

const FILE_PATH = path.resolve(path.dirname(require.main.filename), '..', 'data', 'films.json');

const filmsRepo = {
    async getAll() {
        return await readJsonFile(FILE_PATH) || [];
    },
    async add(film) {
        const films = await this.getAll();
        films.push(film);
        await writeJsonFile(FILE_PATH, films);
    }
};

module.exports = filmsRepo;