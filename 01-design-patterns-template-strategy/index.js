import sys from 'node:sys';

import ReportsMediator from './src/ReportsMediator.js';
import FormaterHTML from './src/FormaterHTML.js';
import FormaterTXT from './src/FormaterTXT.js';
import FormaterCSV from './src/FormaterCSV.js';
import fs from 'node:fs';

const mediator = new ReportsMediator();
mediator.registerFormatter("html", new FormaterHTML());
mediator.registerFormatter("txt", new FormaterTXT());
mediator.registerFormatter("csv", new FormaterCSV());

const [cmd, script, param1] = process.argv;
const filename = './data/cidades-2.json';

if (!['html', 'txt', 'csv'].includes(param1)) {
  console.error("Formato não suportado. Use 'html', 'txt' ou 'csv'.");
  process.exit(1);
}


fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err}`);
    return;
  }

  const cities = JSON.parse(data);

  const report = mediator.format(param1, cities);
  
  console.log(report);
});






