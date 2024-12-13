import csvParser from 'csv-parser';
import AbstractFormatter from './AbstractFormater.js';

export default class FormaterCSV extends AbstractFormatter {
  output(cities) {
    let csv = "Name\n";
    for (let city of cities) {
      csv += `${city["Nome"]}\n`;
    }
    return csv;
  }
}
