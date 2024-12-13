import ReportsFacade from './src/ReportsFacade.js';
import fs from 'node:fs';

const arquivo = './data/cidades-2.json';
const facade = new ReportsFacade();

fs.readFile(arquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err}`);
    return;
  }

try {
  const cities = JSON.parse(data);
  
  console.log("Relatório HTML:");
  console.log(facade.generateReport(cities, 'html'));

  console.log("\nRelatório TXT:");
  console.log(facade.generateReport(cities, 'txt'));

  console.log("\nRelatório CSV:");
  console.log(facade.generateReport(cities, 'csv'));

} catch (error) {
  console.error("Erro:", error.message);
}});