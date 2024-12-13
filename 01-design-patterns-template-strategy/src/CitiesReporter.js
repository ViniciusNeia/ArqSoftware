import fs from 'node:fs';
import FileValidator from './FileValidator.js';

export default class CitiesReporter {
  constructor({ formaterStrategy }) {
    this._formaterStrategy = formaterStrategy;
  }

  _read(filename) {
    FileValidator.validateFile(filename);  // Valida o arquivo antes de processar
    this._cities_json = fs.readFileSync(filename);
  }

  _parseJSON() {
    this._cities = JSON.parse(this._cities_json);
  }

  report(filename) {
    this._read(filename);
    this._parseJSON();
    return this._formaterStrategy.output(this._cities);
  }
}