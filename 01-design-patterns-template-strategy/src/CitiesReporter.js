import fs from 'node:fs';
import FileValidator from './FileValidator.js';

export default class CitiesReporter {

  _read(filename) {
    FileValidator.validateFile(filename);
    return fs.readFileSync(filename, 'utf8');
  }

  _parseJSON(data) {
    try {
      return JSON.parse(data);
    } catch (err) {
      throw new Error("Erro ao converter dados para JSON.");
    }
  }


  report(filename) {
    this._read(filename);
    this._parseJSON();
    return this._formaterStrategy.output(this._cities);
  }
}